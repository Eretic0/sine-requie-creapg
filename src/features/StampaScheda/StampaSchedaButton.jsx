import download from "downloadjs";
import { PDFDocument } from "pdf-lib";
import SineRequie_UomoForm from "../../components/SineRequie_UomoForm.pdf";
import { useSelector } from "react-redux";
import PrintIcon from "@mui/icons-material/Print";
import Fab from "@mui/material/Fab";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { calcolaCaratUsata, calcolaVS } from "../../utils/abilitaMethods";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";

const setTextField = (form, idTextField, valore) => {
  form.getTextField(idTextField).setText(valore);
};

const fillAbilitaLabel = (form, abilita, caratteristiche) => {
  const abilitaPrest = abilita.filter((t) => t.prestampata);

  const abilitaNotPrest = abilita.filter((t) => !t.prestampata);

  abilitaPrest.forEach((element) => {
    const caratteristica = element.caratteristicaRef
      ? getCaratteristica(caratteristiche, element.caratteristicaRef)
      : "";
    setTextField(form, element.id, element.grado.toString());
    setTextField(
      form,
      `vs_${element.id}`,
      calcolaVS(element.grado, caratteristica.valore)
    );

    if (element.id !== "343960377471533261") {
      setTextField(
        form,
        `car_${element.id}`,
        calcolaCaratUsata(element.grado, caratteristica.valore)
      );
    } else {
      setTextField(
        form,
        `car_${element.id}`,
        `${caratteristica ? caratteristica.sigla : ""} ${calcolaCaratUsata(
          element.grado,
          caratteristica.valore
        )}`
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
    setTextField(
      form,
      `vs_abilita_${index}`,
      calcolaVS(element.grado, caratteristica.valore)
    );

    setTextField(
      form,
      `car_abilita_${index}`,
      `${caratteristica ? caratteristica.sigla : ""} ${calcolaCaratUsata(
        element.grado,
        caratteristica.valore
      )}`
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

const getValoreCaratteristica = (caratteristiche, idCaratteristica) => {
  let car = "";

  const caratt = getCaratteristica(caratteristiche, idCaratteristica);
  if (caratt) {
    car = caratt.valore;
  }

  return car;
};

const getCaratteristica = (caratteristiche, idCaratteristica) =>
  caratteristiche.find((t) => t.id === idCaratteristica);

async function fillForm({
  nome,
  cognome,
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
}) {
  const formUrl = SineRequie_UomoForm;
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
  const nomePg = `${nome} ${cognome}`;
  setTextField(form, "nomePg", nomePg);
  setTextField(form, "taroccoDominante", taroccoDominante.nome);
  setTextField(form, "taroccoPassato", taroccoPassato.nome);
  setTextField(form, "professione", professione.nome);
  setTextField(form, "eta", eta);
  setTextField(form, "doni", doni.map((t) => t).join("\n"));

  if (pregi.length > 0) {
    setTextField(form, "pregi", pregi.map((t) => t.nome).join("\n"));
  }

  if (difetti.length > 0) {
    setTextField(form, "difetti", difetti.map((t) => t.nome).join("\n"));
  }

  const vitField = form.getRadioGroup("vit");

  let vitMaxLabel = "8";

  const forzaFisicaVal = getValoreCaratteristica(
    caratteristiche,
    "341575980363546829"
  );
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

  const equilibrioMentaleVal = getValoreCaratteristica(
    caratteristiche,
    "341576027967848653"
  );

  if (equilibrioMentaleVal <= 3) {
    form.getCheckBox("equi3").check();
    equilibrioMentaleVal <= 2 && form.getCheckBox("equi2").check();
    equilibrioMentaleVal <= 1 && form.getCheckBox("equi1").check();

    const distuMent3 = disturbiMentali.filter((t) => t.equilibrioMental === 3);
    const distuMent2 = disturbiMentali.filter((t) => t.equilibrioMental === 2);
    const distuMent1 = disturbiMentali.filter((t) => t.equilibrioMental === 1);

    distuMent3 && setTextField(form, "disturboMentale3", distuMent3.nome);
    distuMent2 && setTextField(form, "disturboMentale2", distuMent2.nome);
    distuMent1 && setTextField(form, "disturboMentale1", distuMent1.nome);
  }

  const percezioneVal = getValoreCaratteristica(
    caratteristiche,
    "341575935372296397"
  );

  const volontaVal = getValoreCaratteristica(
    caratteristiche,
    "341575940363518157"
  );

  const coordinazioneVal = getValoreCaratteristica(
    caratteristiche,
    "341575970478620877"
  );

  const karmaVal = getValoreCaratteristica(
    caratteristiche,
    "341576033844068557"
  );

  const risoluzioneLabel =
    percezioneVal + volontaVal + coordinazioneVal + karmaVal;
  setTextField(form, "risoluzione", risoluzioneLabel.toString());
  fillCaratteristicheLabel(form, caratteristiche);
  fillAbilitaLabel(form, abilita, caratteristiche);

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, `SineRequie_${nomePg}.pdf`, "application/pdf");
}

const StampaSchedaButton = () => {
  const [printingPdf, setPrintingPdf] = useState(false);
  const [openDialogError, setOpenDialogError] = React.useState(false);
  const { nome, cognome } = useSelector((state) => state.generalita);
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
      cognome,
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
    })
      .then(() => setPrintingPdf(false))
      .catch(() => handleCatchError());
  };

  const handleCatchError = () => {
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
      <Fab
        color="primary"
        variant="extended"
        sx={{ position: "absolute", right: "8px" }}
        onClick={() => handlePrint()}
      >
        <PrintIcon sx={{ mr: 1 }} />
        Stampa
      </Fab>
    </>
  );
};

export default StampaSchedaButton;
