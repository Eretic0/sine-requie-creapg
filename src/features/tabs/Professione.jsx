import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Card from "../../components/Card";
import ProfessioniDb from "../../db/Professioni";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfessione } from "../../redux/slices/professioneSlice";

const Professione = () => {
  const { professione } = useSelector((state) => state.professione);
  const { eta } = useSelector((state) => state.eta);
  const { ambientazione } = useSelector((state) => state.generalita);
  const dispatch = useDispatch();
  const [professioni, setProfessioni] = useState([]);

  useEffect(() => {
    let professioniFilter = ProfessioniDb;
    if (ambientazione) {
      console.log("professioniFilter", professioniFilter);
      setProfessioni(
        professioniFilter.filter((p) => p.ambientazioneRef === ambientazione)
      );
    } else {
      setProfessioni(professioniFilter);
    }
  }, [ambientazione]);

  const handleChangeProfessione = (event) => {
    dispatch(setProfessione(event.target.value));
  };

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
            {professioni.length > 0 && (
              <Select
                id="select-professione"
                label="Professione"
                value={professione}
                defaultValue=""
                onChange={handleChangeProfessione}
              >
                {professioni.map((prof) => (
                  <MenuItem key={prof.id} value={prof}>
                    {prof.descrizione}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Professione;
