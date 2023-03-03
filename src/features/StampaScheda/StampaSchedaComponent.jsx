import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import Card from "../../components/Card";
import { PDFDocument } from "pdf-lib";
import download from "downloadjs";
import Sine_Requie_Pdf_Form from "../../components/Sine_Requie_Pdf_Form.pdf";

import { styled } from "@mui/material/styles";

const TypographyTitle = styled(Typography)({
  color: "black",
  padding: "12px",
  textAlign: "center",
});

const TypographySubTitle = styled(Typography)({
  color: "black",
  padding: "12px",
  textAlign: "center",
});

const TypographyBody = styled(Typography)({
  color: "black",
  padding: "12px",
});

async function fillForm() {
  const formUrl = Sine_Requie_Pdf_Form;
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
  const nameField = form.getTextField("nome");
  nameField.setText("Mario");
  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "sine-requie-creapg.pdf", "application/pdf");
}

const StampaSchedaComponent = () => {
  const componentRef = useRef();
  const { nome, cognome } = useSelector((state) => state.generalita);
  const { taroccoDominante, taroccoPassato } = useSelector(
    (state) => state.tarocco
  );
  const { professione } = useSelector((state) => state.professione);
  const { eta } = useSelector((state) => state.eta);
  const { pregi, difetti } = useSelector((state) => state.pregiDifetti);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);

  const visualizzaModificare = (car) => {
    let carVisual = car.valore;
    if (car.modificatore != null) {
      const mod = car.modificatore(car.valore);
      carVisual = carVisual + " " + mod;
    }
    return carVisual;
  };

  return (
    <Card headerText="Scheda Personaggio">
      <button onClick={() => fillForm()}>Stampa</button>
      <ReactToPrint
        trigger={() => (
          <Tooltip title="Dopo aver cliccato il pulsante Stampa attendere che il browser crei l'anteprima della scheda da stampare, le prime volte potrebbe metterci qualche secondo.">
            <Button size="small" variant="contained">
              Stampa
            </Button>
          </Tooltip>
        )}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <Box sx={{ width: "100%", backgroundColor: "white" }}>
          <TypographyTitle variant="h4" gutterBottom>
            Sine Requie
          </TypographyTitle>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
          >
            <Stack spacing={2}>
              <TypographyBody variant="body1" gutterBottom>
                {`Nome del Personaggio: ${nome} ${cognome}`}
              </TypographyBody>
              <TypographyBody variant="body1" gutterBottom>
                {`Tarocco Dominante: ${
                  taroccoDominante.nome ? taroccoDominante.nome : ""
                }`}
              </TypographyBody>
              <TypographyBody variant="body1" gutterBottom>
                {`Professione: ${professione.nome ? professione.nome : ""}`}
              </TypographyBody>
              <Stack direction="row" spacing={2}>
                <TypographyBody variant="body1" gutterBottom>
                  {`Tarocco del Passato: ${
                    taroccoPassato.nome ? taroccoPassato.nome : ""
                  }`}
                </TypographyBody>
                <TypographyBody
                  variant="body1"
                  gutterBottom
                >{`Età: ${eta}`}</TypographyBody>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={0}>
              <List>
                <TypographyBody variant="body1" gutterBottom>
                  Pregi
                </TypographyBody>
                {pregi.map((p) => (
                  <ListItem key={p.id}>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary={`${p.nome}`}
                    />
                  </ListItem>
                ))}
              </List>
              <List>
                <TypographyBody variant="body1" gutterBottom>
                  Difetti
                </TypographyBody>
                {difetti.map((d) => (
                  <ListItem key={d.id}>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary={`${d.nome}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Stack>
          <TypographyTitle variant="h6" gutterBottom>
            Caratteristiche
          </TypographyTitle>
          <Grid container spacing={4}>
            <Grid item xs>
              <List>
                {caratteristiche
                  .filter((car) => car.seme === "Cuori")
                  .map((car) => (
                    <ListItem key={car.id}>
                      <ListItemText
                        sx={{ color: "black" }}
                        primary={`${car.nome}: ${visualizzaModificare(car)}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs>
              <List>
                {caratteristiche
                  .filter((car) => car.seme === "Quadri")
                  .map((car) => (
                    <ListItem key={car.id}>
                      <ListItemText
                        sx={{ color: "black" }}
                        primary={`${car.nome}: ${visualizzaModificare(car)}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs>
              <List>
                {caratteristiche
                  .filter((car) => car.seme === "Fiori")
                  .map((car) => (
                    <ListItem key={car.id}>
                      <ListItemText
                        sx={{ color: "black" }}
                        primary={`${car.nome}: ${visualizzaModificare(car)}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs>
              <List>
                {caratteristiche
                  .filter((car) => car.seme === "Picche")
                  .map((car) => (
                    <ListItem key={car.id}>
                      <ListItemText
                        sx={{ color: "black" }}
                        primary={`${car.nome}: ${visualizzaModificare(car)}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
          <TypographySubTitle variant="subtitle1" gutterBottom>
            Creato con sine-requie-creapg
          </TypographySubTitle>
        </Box>
      </div>
    </Card>
  );
};

export default StampaSchedaComponent;
