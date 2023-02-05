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

function GeneralitaComponent() {
  const { nome, cognome, ambientazione, sesso } = useSelector(
    (state) => state.generalita
  );
  const dispatch = useDispatch();

  const handleChangeAmbientazione = (event) => {
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
              <InputLabel id="label-input-select-sesso">Sesso</InputLabel>
              <Select
                labelId="label-input-select-sesso"
                id="select-sesso"
                label="Sesso"
                defaultValue=""
                value={sesso}
                onChange={handleChangeSesso}
              >
                <MenuItem key="M" value="M">
                  M
                </MenuItem>
                <MenuItem key="F" value="F">
                  F
                </MenuItem>
                <MenuItem key="Altro" value="Altro">
                  Altro
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
