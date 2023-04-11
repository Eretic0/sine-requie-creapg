import PrintIcon from "@mui/icons-material/Print";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import download from "downloadjs";
import { PDFDocument } from "pdf-lib";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SineRequie_DonnaForm from "../../components/SineRequie_DonnaForm.pdf";
import SineRequie_UomoForm from "../../components/SineRequie_UomoForm.pdf";
import {
  calcolaCaratUsata,
  calcolaVS,
  getDescIfPregioOrDifetto,
  getValoreIfPregioOrDifetto,
} from "../../utils/abilitaMethods";
import {
  calcolaRisoluzione,
  carEquilibrioMentaleByStore,
  carForzaFisicaByStore,
} from "../../utils/caratteristicheMethods";

const setTextField = (form, idTextField, valore) => {
  form.getTextField(idTextField).setText(valore);
};

const fillAbilitaLabel = (form, abilita, caratteristiche, pregi, difetti) => {
  const abilitaPrest = abilita.filter((t) => t.prestampata);

  const abilitaNotPrest = abilita.filter((t) => !t.prestampata);

  abilitaPrest.forEach((element) => {
    const caratteristica = element.caratteristicaRef
      ? getCaratteristica(caratteristiche, element.caratteristicaRef)
      : "";
    let sommaGradoCaratt = calcolaCaratUsata(
      element.grado,
      caratteristica.valore
    );
    sommaGradoCaratt = getValoreIfPregioOrDifetto(
      element.id,
      sommaGradoCaratt,
      pregi,
      difetti
    );

    setTextField(
      form,
      element.id,
      `${element.grado.toString()} ${getDescIfPregioOrDifetto(
        element.id,
        pregi,
        difetti
      )}`
    );

    setTextField(form, `vs_${element.id}`, calcolaVS(sommaGradoCaratt));

    if (element.id !== "343960377471533261") {
      setTextField(form, `car_${element.id}`, sommaGradoCaratt);
    } else {
      setTextField(
        form,
        `car_${element.id}`,
        `${caratteristica ? caratteristica.sigla : ""} ${sommaGradoCaratt}`
      );
    }

    if (element.specifico && element.specificoSelezionato !== "") {
      setTextField(
        form,
        `specifico_${element.id}`,
        element.specificoSelezionato
      );
    }

    if (element.counterFallimento > 0) {
      for (let index = 1; index <= element.counterFallimento; index++) {
        form
          .getRadioGroup(`counter_${element.id}_${index}`)
          .select(index.toString());
      }
    }
  });

  abilitaNotPrest.forEach((element, index) => {
    let indexElement = index;
    const caratteristica = element.caratteristicaRef
      ? getCaratteristica(caratteristiche, element.caratteristicaRef)
      : "";

    let sommaGradoCaratt = calcolaCaratUsata(
      element.grado,
      caratteristica.valore
    );
    sommaGradoCaratt = getValoreIfPregioOrDifetto(
      element.id,
      sommaGradoCaratt,
      pregi,
      difetti
    );

    if (element.specificoSelezionato) {
      setTextField(
        form,
        `nome_abilita_${index}`,
        `${element.nome} -${element.specificoSelezionato}-`
      );
    } else {
      setTextField(form, `nome_abilita_${index}`, `${element.nome}`);
    }

    setTextField(form, `abilita_${index}`, element.grado.toString());
    setTextField(form, `vs_abilita_${index}`, calcolaVS(sommaGradoCaratt));

    setTextField(
      form,
      `car_abilita_${index}`,
      `${caratteristica ? caratteristica.sigla : ""} ${sommaGradoCaratt}`
    );

    if (element.counterFallimento > 0) {
      for (let index = 1; index <= element.counterFallimento; index++) {
        form
          .getRadioGroup(`counter_abilita_${indexElement}_${index}`)
          .select(index.toString());
      }
    }
  });
};

const fillCaratteristicheLabel = (form, caratteristiche) => {
  caratteristiche.forEach((element) => {
    setTextField(form, element.id, element.valore.toString());
    if (element.modificatore) {
      setTextField(
        form,
        `bonus_${element.id}`,
        element.modificatore(element.valore).toString()
      );
    }
  });
};

const getCaratteristica = (caratteristiche, idCaratteristica) =>
  caratteristiche.find((t) => t.id === idCaratteristica);

async function fillForm({
  nome,
  taroccoDominante,
  taroccoPassato,
  professione,
  eta,
  pregi,
  difetti,
  caratteristiche,
  abilita,
  doni,
  disturbiMentali,
  sesso,
  morto,
}) {
  const formUrl = sesso === "M" ? SineRequie_UomoForm : SineRequie_DonnaForm;
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
  setTextField(form, "nomePg", nome);
  setTextField(form, "taroccoDominante", taroccoDominante.nome);
  setTextField(form, "taroccoPassato", taroccoPassato.nome);
  setTextField(form, "professione", professione.nome);
  setTextField(form, "eta", eta);
  if (doni.length > 0) {
    setTextField(form, "doni", doni.map((t) => t.nome).join(", "));
  }

  if (pregi.length > 0) {
    setTextField(
      form,
      "pregi",
      pregi
        .map((t) =>
          t.descrizioneBreve ? `${t.nome} (${t.descrizioneBreve})` : `${t.nome}`
        )
        .join("\n")
    );
  }

  if (difetti.length > 0) {
    setTextField(
      form,
      "difetti",
      difetti
        .map((t) =>
          t.descrizioneBreve ? `${t.nome} (${t.descrizioneBreve})` : `${t.nome}`
        )
        .join("\n")
    );
  }

  if (!morto) {
    const vitField = form.getRadioGroup("vit");
    let vitMaxLabel = "8";
    const carForzaFisica = carForzaFisicaByStore(caratteristiche);
    const forzaFisicaVal = carForzaFisica.valore;
    if (forzaFisicaVal > 8) {
      vitMaxLabel = forzaFisicaVal.toString();
    }
    vitField.select(vitMaxLabel);
    setTextField(form, "oreMarcia", forzaFisicaVal.toString());
    setTextField(
      form,
      "vitMax",
      forzaFisicaVal > 8 ? forzaFisicaVal.toString() : "8"
    );
    setTextField(form, "morteA", `-${forzaFisicaVal}`);
  }

  const equilibrioMentaleVal = carEquilibrioMentaleByStore(caratteristiche);

  if (equilibrioMentaleVal <= 3) {
    form.getCheckBox("equi3").check();
    equilibrioMentaleVal <= 2 && form.getCheckBox("equi2").check();
    equilibrioMentaleVal <= 1 && form.getCheckBox("equi1").check();

    const distuMent3 = disturbiMentali.find((t) => t.equilibrioMental === 3);
    const distuMent2 = disturbiMentali.find((t) => t.equilibrioMental === 2);
    const distuMent1 = disturbiMentali.find((t) => t.equilibrioMental === 1);

    distuMent3 &&
      setTextField(form, "disturboMentale3", distuMent3.disturbo.nome);
    distuMent2 &&
      setTextField(form, "disturboMentale2", distuMent2.disturbo.nome);
    distuMent1 &&
      setTextField(form, "disturboMentale1", distuMent1.disturbo.nome);
  }

  const risoluzioneLabel = calcolaRisoluzione(caratteristiche, pregi);
  setTextField(form, "risoluzione", risoluzioneLabel.toString());

  if (professione.magiaRituale) {
    setTextField(form, "equipaggiamento", "Magia Rituale:");
  }
  if (professione.sferaInfluenza) {
    setTextField(
      form,
      "equipaggiamento",
      `Sfera d'Influenza : ${professione.sferaInfluenza}`
    );
  }

  fillCaratteristicheLabel(form, caratteristiche);
  fillAbilitaLabel(form, abilita, caratteristiche, pregi, difetti);

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, `SineRequie_${nome}.pdf`, "application/pdf");
}

const StampaSchedaButton = () => {
  const [printingPdf, setPrintingPdf] = useState(false);
  const [openDialogError, setOpenDialogError] = React.useState(false);
  const { nome, sesso, morto } = useSelector((state) => state.generalita);
  const { taroccoDominante, taroccoPassato } = useSelector(
    (state) => state.tarocco
  );
  const { professione } = useSelector((state) => state.professione);
  const { eta } = useSelector((state) => state.eta);
  const { pregi, difetti } = useSelector((state) => state.pregiDifetti);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { abilita } = useSelector((state) => state.abilita);
  const { disturbiMentali } = useSelector((state) => state.disturbiMentali);
  const { doni } = useSelector((state) => state.doni);

  const handleClickDialogError = () => {
    setOpenDialogError(true);
  };

  const handleCloseDialogError = () => {
    setOpenDialogError(false);
  };

  const handlePrint = () => {
    setPrintingPdf(true);
    fillForm({
      nome,
      taroccoDominante,
      taroccoPassato,
      professione,
      eta,
      pregi,
      difetti,
      caratteristiche,
      abilita,
      disturbiMentali,
      doni,
      sesso,
      morto,
    })
      .then(() => setPrintingPdf(false))
      .catch((er) => handleCatchError(er));
  };

  const handleCatchError = (er) => {
    console.error("Error", er);
    setPrintingPdf(false);
    handleClickDialogError();
  };

  return (
    <>
      <Dialog open={openDialogError}>
        <DialogTitle id="alert-dialog-error-title">{"Errore"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-error-title">
            Si è verificato un problema, riprovare più tardi
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogError} autoFocus>
            Chiudi
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={printingPdf}>
        <DialogTitle id="alert-dialog-title">{"Stampa in corso"}</DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <CircularProgress color="primary" />
            </Stack>
          </Box>
          <DialogContentText id="alert-dialog-description">
            Attendere la creazione della Scheda Personaggio.
            <br />
            Una volta creata la Scheda Personaggio raccomandiamo di aprirla
            utilizzando Adobe Reader per avere un'esperienza migliore.
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Fab color="primary" variant="extended" onClick={() => handlePrint()}>
        <PrintIcon sx={{ mr: 1 }} />
        Stampa
      </Fab>
    </>
  );
};

export default StampaSchedaButton;
