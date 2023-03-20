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
  setNumeroAbilitaTaroccoPassato,
} from "../../redux/slices/etaSlice";
import { resetProfessione } from "../../redux/slices/professioneSlice";
import { resetTarocchi } from "../../redux/slices/taroccoSlice";
import {
  getDescForEtaPaper,
  setAbilitaMiscByEta,
} from "../../utils/etaMethods";
import { ambSoviet } from "../../utils/ambientazioniMethods";

function EtaComponent() {
  const { eta, puntiAbilitaEta, gradoMassimoEta } = useSelector(
    (state) => state.eta
  );
  const { ambientazione } = useSelector((state) => state.generalita);

  const dispatch = useDispatch();

  const handleDispatchSetPuntiAbilitaEta = (value) =>
    dispatch(setPuntiAbilitaEta(value));

  const handleDispatchSetGradoMassimoEta = (value) =>
    dispatch(setGradoMassimoEta(value));

  const handleDispatchSetArrayProfessioneEta = (value) =>
    dispatch(setArrayProfessioneEta(value));

  const handleDispatchUpdateCaratteristica = (value) =>
    dispatch(updateCaratteristica(value));

  const handleDispatchSetNumeroAbilitaTaroccoPassato = (value) =>
    dispatch(setNumeroAbilitaTaroccoPassato(value));

  const handleChangeEta = (event) => {
    const etaValue = event.target.value;
    dispatch(resetTarocchi());
    dispatch(resetCaratteristiche());
    dispatch(resetAllAbilita());
    dispatch(resetProfessione());
    if (etaValue > 0) {
      dispatch(setEta(etaValue));
      setAbilitaMiscByEta(
        etaValue,
        handleDispatchSetPuntiAbilitaEta,
        handleDispatchSetGradoMassimoEta,
        handleDispatchSetArrayProfessioneEta,
        handleDispatchUpdateCaratteristica,
        handleDispatchSetNumeroAbilitaTaroccoPassato,
        ambientazione
      );
      dispatch(setCaratteristicheStorico());
    }
  };

  const handleAmbSoviet = () =>
    ambSoviet.id === ambientazione ? eta >= 6 : eta >= 10;

  const setEtaPaper = () => {
    const { titolo, descrizione } = getDescForEtaPaper(
      eta,
      puntiAbilitaEta,
      gradoMassimoEta,
      ambientazione
    );
    return (
      handleAmbSoviet() && (
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
