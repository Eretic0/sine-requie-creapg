import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import Card from "../../components/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";

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

const StampaScheda = () => {
  const componentRef = useRef();
  const { nome, cognome } = useSelector((state) => state.generalita);
  const { taroccoDominante, taroccoPassato } = useSelector(
    (state) => state.tarocco
  );
  const { professione } = useSelector((state) => state.professione);
  const { eta } = useSelector((state) => state.eta);
  const { pregi, difetti } = useSelector((state) => state.pregiDifetti);

  return (
    <Card headerText="Scheda Personaggio">
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
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <TypographyBody variant="body1" gutterBottom>
              {`Nome del Personaggio: ${nome} ${cognome}`}
            </TypographyBody>
            <List>
              {pregi.map((p) => (
                <TypographyBody key={p.id} variant="body1" gutterBottom>
                  {`Pregio: ${p.nome}`}
                </TypographyBody>
              ))}
            </List>
            <List>
              {difetti.map((d) => (
                <TypographyBody key={d.id} variant="body1" gutterBottom>
                  {`Difetto: ${d.nome}`}
                </TypographyBody>
              ))}
            </List>
          </Stack>

          <TypographyBody variant="body1" gutterBottom>
            {`Tarocco Dominante: ${
              taroccoDominante.nome ? taroccoDominante.nome : ""
            }`}
          </TypographyBody>
          <TypographyBody variant="body1" gutterBottom>
            {`Tarocco del Passato: ${
              taroccoPassato.nome ? taroccoPassato.nome : ""
            }`}
          </TypographyBody>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <TypographyBody variant="body1" gutterBottom>
                {`Professione: ${professione.nome ? professione.nome : ""}`}
              </TypographyBody>
            </Grid>
            <Grid item xs={3}>
              <TypographyBody
                variant="body1"
                gutterBottom
              >{`Età: ${eta}`}</TypographyBody>
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

export default StampaScheda;
