import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import {
  setEta,
  setGradoMassimoEta,
  setPuntiAbilitaEta,
} from "../../redux/slices/etaSlice";

function Eta() {
  const { eta } = useSelector((state) => state.eta);
  const dispatch = useDispatch();

  const handleChangeEta = (event) => {
    const etaValue = event.target.value;
    dispatch(setEta(etaValue));
    if (etaValue < 18) {
      dispatch(setPuntiAbilitaEta(2));
      dispatch(setGradoMassimoEta(2));
    } else if (etaValue >= 19 && etaValue <= 39) {
      dispatch(setPuntiAbilitaEta(7));
      dispatch(setGradoMassimoEta(3));
    } else if (etaValue >= 40 && etaValue <= 59) {
      dispatch(setPuntiAbilitaEta(15));
      dispatch(setGradoMassimoEta(4));
    } else if (etaValue >= 60) {
      dispatch(setPuntiAbilitaEta(21));
      dispatch(setGradoMassimoEta(5));
    }
  };

  const setEtaPaper = () => {
    let titolo = "";
    let descrizione = "";
    if (eta >= 10 && eta <= 18) {
      titolo = "Giovane (10-18 anni d'età)";
      descrizione =
        "Tarocco del Passato: Nessuno, Abilità di Professione: 2 punti, Abilità Massime: Grado +2";
    } else if (eta >= 19 && eta <= 39) {
      titolo = "Adulto (19-39 anni d'età)";
      descrizione = "Nessuna modifica, si tratta dei Personaggi Standard.";
    } else if (eta >= 40 && eta <= 59) {
      titolo = "Maturo (40-59 anni d'età)";
      descrizione =
        "Cuori: Memoria -1, Quadri: Aspetto -1, Fiori: tutte -1, Abilità di Professione: 15 punti, Abilità massime: Grado +4, Professioni Avanzate";
    } else if (eta >= 60) {
      titolo = "Anziano (60 anni o superiore)";
      descrizione =
        "Cuori: Memoria -2, Quadri: Aspetto -2, Fiori: tutte -2, Abilità di Professione: 21 punti. Abilità massime: Grado +5, Professioni Eccellenti";
    }
    return (
      eta > 9 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: "100%",
            },
          }}
        >
          <Paper elevation={0}>
            <Typography gutterBottom variant="h5" component="div">
              {titolo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descrizione}
            </Typography>
          </Paper>
        </Box>
      )
    );
  };

  return (
    <Card headerText="Età">
      <Grid container spacing={4}>
        <Grid item xs>
          <TextField type="number" value={eta} onChange={handleChangeEta} />
        </Grid>
        <Grid item xs>
          {setEtaPaper()}
        </Grid>
      </Grid>
    </Card>
  );
}

export default Eta;
