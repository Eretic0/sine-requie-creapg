import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Card from "../../components/Card";
import ProfessioniDb from "../../db/Professioni";
import React, { useEffect, useState } from "react";

const Professione = () => {
  const [professioni, setProfessioni] = useState([]);

  useEffect(() => {
    setProfessioni(ProfessioniDb);
  }, []);

  return (
    <Card headerText="Professione">
      <Grid container spacing={4}>
        <Grid item xs>
          <FormControl fullWidth>
            <InputLabel
              id="label-input-select-professione"
              htmlFor="select-professione"
            >
              Professione
            </InputLabel>
            <Select
              id="select-professione"
              label="Professione"
              //value={ambientazione}
              //onChange={handleChangeAmbientazione}
            >
              {professioni.length > 0 &&
                professioni.map((prof) => (
                  <MenuItem key={prof.id} value={prof.id}>
                    {prof.descrizione}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Professione;
