import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import AmbientazioniDb from "../../db/Ambientazioni";

import {
  setNome,
  setCognome,
  setAmbientazione,
  setSesso,
} from "../../redux/slices/generalitaSlice";

function Generalita() {
  const { nome, cognome, ambientazione, sesso } = useSelector(
    (state) => state.generalita
  );
  const dispatch = useDispatch();
  const [ambientazioni, setAmbientazioni] = useState([]);

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

  useEffect(() => {
    setAmbientazioni(AmbientazioniDb);
  }, []);

  return (
    <Card headerText="Generalità">
      <Grid container spacing={4}>
        <Grid item xs>
          <FormControl fullWidth>
            <InputLabel id="label-input-select-ambientazione">
              Ambientazione
            </InputLabel>
            <Select
              labelId="label-input-select-ambientazione"
              id="select-ambientazione"
              label="Ambientazione"
              value={ambientazione}
              onChange={handleChangeAmbientazione}
            >
              {ambientazioni.length > 0 &&
                ambientazioni.map((ambient) => (
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
            <FormLabel id="demo-radio-buttons-group-label">Sesso</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={sesso}
              onChange={handleChangeSesso}
            >
              <FormControlLabel value="F" control={<Radio />} label="F" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
              <FormControlLabel
                value="Altro"
                control={<Radio />}
                label="Altro"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Generalita;
