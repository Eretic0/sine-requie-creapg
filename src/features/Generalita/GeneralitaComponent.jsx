import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import AmbientazioniDb from "../../db/Ambientazioni";
import {
  setAmbientazione,
  setCognome,
  setNome,
  setSesso,
} from "../../redux/slices/generalitaSlice";
import { resetProfessione } from "../../redux/slices/professioneSlice";
import { resetTarocchi } from "../../redux/slices/taroccoSlice";
import { resetAllAbilita } from "../../redux/slices/abilitaSlice";
import { resetCaratteristiche } from "../../redux/slices/caratteristicheSlice";
import IconTooltip from "../../components/IconTooltip";

function GeneralitaComponent() {
  const { nome, cognome, ambientazione, sesso } = useSelector(
    (state) => state.generalita
  );
  const dispatch = useDispatch();

  const handleChangeAmbientazione = (event) => {
    dispatch(resetTarocchi());
    dispatch(resetCaratteristiche());
    dispatch(resetAllAbilita());
    dispatch(resetProfessione());
    dispatch(setAmbientazione(event.target.value));
  };

  const handleChangeNome = (event) => {
    dispatch(setNome(event.target.value));
  };

  const handleChangeCognome = (event) => {
    dispatch(setCognome(event.target.value));
  };

  const handleChangeSesso = (event) => {
    dispatch(setSesso(event.target.value));
  };

  return (
    <>
      <Card headerText="Generalità">
        <Grid container spacing={4}>
          <Grid item xs>
            <>
              <FormControl fullWidth>
                <InputLabel id="label-input-select-ambientazione">
                  Manuale / Ambientazione
                </InputLabel>
                <Select
                  labelId="label-input-select-ambientazione"
                  id="select-ambientazione"
                  label="Manuale / Ambientazione"
                  defaultValue=""
                  value={ambientazione}
                  onChange={handleChangeAmbientazione}
                >
                  {AmbientazioniDb.map((ambient) => (
                    <MenuItem key={ambient.id} value={ambient.id}>
                      {ambient.descrizione}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <IconTooltip
                type={"info"}
                message={
                  "La modifica comporta il reset dei seguenti campi: Professione, Abilità, Tarocco Dominante, Tarocco del Passato"
                }
              />
            </>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <TextField
                id="nome-textfield"
                label="Nome"
                value={nome}
                onChange={handleChangeNome}
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <TextField
                id="cognome-textfield"
                label="Cognome"
                value={cognome}
                onChange={handleChangeCognome}
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <InputLabel id="label-input-select-tipologiaScheda">
                Tipologia Scheda
              </InputLabel>
              <Select
                labelId="label-input-select-tipologiaScheda"
                id="select-tipologiaScheda"
                label="Tipologia Scheda"
                defaultValue=""
                value={sesso}
                onChange={handleChangeSesso}
              >
                <MenuItem key="M" value="M">
                  Uomo
                </MenuItem>
                <MenuItem key="F" value="F">
                  Donna
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default GeneralitaComponent;
