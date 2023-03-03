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

const calcolaCaratUsata = (gradoAbilita, valoreCaratteristica) => {
  let caratUsata = "";
  if ("1/2" === gradoAbilita) {
    if (typeof valoreCaratteristica == "number") {
      caratUsata = Math.floor(valoreCaratteristica / 2);
    }
  } else {
    if (typeof valoreCaratteristica == "number") {
      caratUsata = gradoAbilita + valoreCaratteristica;
    }
  }

  return caratUsata.toString();
};

const calcolaVS = (gradoAbilita, valoreCaratteristica) => {
  let textVs = "";
  if ("1/2" === gradoAbilita) {
    if (valoreCaratteristica / 2 >= 8) {
      textVs = "V";
    } else if (valoreCaratteristica / 2 <= 3) {
      textVs = "S";
    }
  } else {
    if (gradoAbilita + valoreCaratteristica >= 8) {
      textVs = "V";
    } else if (gradoAbilita + valoreCaratteristica <= 3) {
      textVs = "S";
    }
  }
  return textVs;
};

const setTextField = (form, idTextField, valore) => {
  form.getTextField(idTextField).setText(valore);
};

const fillAbilitaLabel = (form, abilita, caratteristiche) => {
  const abilitaPrest = abilita.filter((t) => t.prestampata);

  const abilitaNotPrest = abilita.filter((t) => !t.prestampata);

  abilitaPrest.forEach((element) => {
    const valoreCaratt = element.caratteristicaRef
      ? getValoreCaratteristica(caratteristiche, element.caratteristicaRef)
      : "";
    setTextField(form, element.id, element.grado.toString());
    setTextField(
      form,
      `vs_${element.id}`,
      calcolaVS(element.grado, valoreCaratt)
    );
    setTextField(
      form,
      `car_${element.id}`,
      calcolaCaratUsata(element.grado, valoreCaratt)
    );
    if (element.specifico && element.specificoSelezionato !== "") {
      setTextField(
        form,
        `specifico_${element.id}`,
        element.specificoSelezionato
      );
    }
  });

  abilitaNotPrest.forEach((element, index) => {
    const valoreCaratt = element.caratteristicaRef
      ? getValoreCaratteristica(caratteristiche, element.caratteristicaRef)
      : "";
    setTextField(form, `nome_abilita_${index}`, element.nome);
    setTextField(form, `abilita_${index}`, element.grado.toString());
    setTextField(
      form,
      `vs_abilita_${index}`,
      calcolaVS(element.grado, valoreCaratt)
    );
    setTextField(
      form,
      `car_abilita_${index}`,
      calcolaCaratUsata(element.grado, valoreCaratt)
    );
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
  return caratteristiche.find((t) => t.id === idCaratteristica).valore;
};

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
  let pregiLabel = "";
  if (pregi.length > 0) {
    pregi.forEach((element) => {
      pregiLabel += `${element.nome}, `;
    });
    setTextField(form, "pregi", pregiLabel);
  }

  let difettiLabel = "";
  if (difetti.length > 0) {
    difetti.forEach((element) => {
      difettiLabel += `${element.nome}, `;
    });
    setTextField(form, "difetti", difettiLabel);
  }
  const vitField = form.getRadioGroup("vit");
  //TODO
  //const oreMarciaField = form.getTextField("oreMarcia");
  //const doniField = form.getTextField("doni");

  let vitMaxLabel = "8";

  const forzaFisicaVal = getValoreCaratteristica(
    caratteristiche,
    "341575980363546829"
  );
  if (forzaFisicaVal > 8) {
    vitMaxLabel = forzaFisicaVal.toString();
  }
  vitField.select(vitMaxLabel);

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

  //TODO
  if (equilibrioMentaleVal <= 3) {
    setTextField(form, "disturboMentale3", "disturboMentale3");
    form.getCheckBox("equi3").check();
    if (equilibrioMentaleVal === 2) {
      setTextField(form, "disturboMentale2", "disturboMentale2");
      form.getCheckBox("equi2").check();
    } else if (equilibrioMentaleVal <= 1) {
      setTextField(form, "disturboMentale1", "disturboMentale1");
      form.getCheckBox("equi1").check();
    }
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
  const { nome, cognome } = useSelector((state) => state.generalita);
  const { taroccoDominante, taroccoPassato } = useSelector(
    (state) => state.tarocco
  );
  const { professione } = useSelector((state) => state.professione);
  const { eta } = useSelector((state) => state.eta);
  const { pregi, difetti } = useSelector((state) => state.pregiDifetti);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { abilita } = useSelector((state) => state.abilita);

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
    }).then(() => setPrintingPdf(false));
  };

  return (
    <>
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
            Attendere la creazione della Scheda Personaggio
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
