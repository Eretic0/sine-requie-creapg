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
import { getAllAmbientazioni } from "../../api";
import Card from "../../components/Card";

function Generalita() {
  const [ambientazione, setAmbientazione] = useState("");
  const [ambientazioni, setAmbientazioni] = useState([]);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [sesso, setSesso] = useState("");

  const handleChangeAmbientazione = (event) => {
    setAmbientazione(event.target.value);
  };

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeCognome = (event) => {
    setCognome(event.target.value);
  };

  const handleChangeSesso = (event) => {
    setSesso(event.target.value);
  };

  useEffect(() => {
    getAllAmbientazioni.then((res) => {
      setAmbientazioni(res);
    });
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
                  <MenuItem
                    key={ambient.ref.value.id}
                    value={ambient.ref.value.id}
                  >
                    {ambient.data.descrizione}
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
