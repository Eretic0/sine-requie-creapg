import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import IconTooltip from "../../components/IconTooltip";
import { resetAllAbilita } from "../../redux/slices/abilitaSlice";
import {
  resetCaratteristiche,
  setCaratteristicheStorico,
  updateCaratteristica,
} from "../../redux/slices/caratteristicheSlice";
import {
  setArrayProfessioneEta,
  setEta,
  setGradoMassimoEta,
  setPuntiAbilitaEta,
} from "../../redux/slices/etaSlice";
import { resetProfessione } from "../../redux/slices/professioneSlice";
import { resetTarocchi } from "../../redux/slices/taroccoSlice";

function EtaComponent() {
  const { eta } = useSelector((state) => state.eta);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);

  const carMemoria = caratteristiche.find((t) => t.id === "341575873655210189");
  const carAspetto = caratteristiche.find((t) => t.id === "341575948055871693");
  const carFiori = caratteristiche.filter((t) => t.seme === "Fiori");

  const dispatch = useDispatch();

  const assignMalusToCaratteristicheByEta = (valore) => {
    let carMemoriaMod = { ...carMemoria };
    let carAspettoMod = { ...carAspetto };
    carMemoriaMod.valore -= valore;
    carAspettoMod.valore -= valore;
    dispatch(updateCaratteristica(carMemoriaMod));
    dispatch(updateCaratteristica(carAspettoMod));
    carFiori.forEach((element) => {
      let carMod = { ...element };
      carMod.valore -= valore;
      dispatch(updateCaratteristica(carMod));
    });
  };

  const handleChangeEta = (event) => {
    const etaValue = event.target.value;
    dispatch(resetTarocchi());
    dispatch(resetCaratteristiche());
    dispatch(resetAllAbilita());
    dispatch(resetProfessione());
    if (etaValue > 0) {
      dispatch(setEta(etaValue));
      if (etaValue >= 10 && etaValue <= 18) {
        dispatch(setPuntiAbilitaEta(2));
        dispatch(setGradoMassimoEta(2));
        dispatch(setArrayProfessioneEta(["N"]));
      } else if (etaValue >= 19 && etaValue <= 39) {
        dispatch(setPuntiAbilitaEta(7));
        dispatch(setGradoMassimoEta(3));
        dispatch(setArrayProfessioneEta(["N"]));
      } else if (etaValue >= 40 && etaValue <= 59) {
        dispatch(setPuntiAbilitaEta(15));
        dispatch(setGradoMassimoEta(4));
        dispatch(setArrayProfessioneEta(["N", "A"]));
        assignMalusToCaratteristicheByEta(1);
      } else if (etaValue >= 60) {
        dispatch(setPuntiAbilitaEta(21));
        dispatch(setGradoMassimoEta(5));
        dispatch(setArrayProfessioneEta(["N", "A", "E"]));
        assignMalusToCaratteristicheByEta(2);
      }
      dispatch(setCaratteristicheStorico());
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
          <>
            <TextField type="number" value={eta} onChange={handleChangeEta} />
            <IconTooltip
              type={"info"}
              message={
                "La modifica comporta il reset dei seguenti campi: Professione, Abilità, Caratteristiche, Tarocco Dominante, Tarocco del Passato"
              }
            />
          </>
        </Grid>
        <Grid item xs>
          {setEtaPaper()}
        </Grid>
      </Grid>
    </Card>
  );
}

export default EtaComponent;
