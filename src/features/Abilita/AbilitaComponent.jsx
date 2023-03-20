import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import ProfiloAbilitaDb from "../../db/ProfiloAbilita";
import {
  resetAllAbilita,
  setAbilita,
  setListBonusAbilita,
  setProfiloAbilitaSelezionato,
} from "../../redux/slices/abilitaSlice";
import AbilitaTable from "./AbilitaTable";

function AbilitaComponent() {
  const {
    abilita,
    profiloAbilitaSelezionato,
    listBonusAbilita,
    abilitaStoricoProfessione,
    abilitaStoricoTarocco,
  } = useSelector((state) => state.abilita);
  const dispatch = useDispatch();

  const handleChangeProfiloAbilita = (event) => {
    const profiloAbilita = ProfiloAbilitaDb.find(
      (pa) => pa.id === event.target.value
    );
    dispatch(resetAllAbilita());

    abilitaStoricoTarocco.length > abilitaStoricoProfessione.length
      ? dispatch(setAbilita(abilitaStoricoTarocco))
      : dispatch(setAbilita(abilitaStoricoProfessione));

    dispatch(setProfiloAbilitaSelezionato(profiloAbilita.id));
    dispatch(setListBonusAbilita(profiloAbilita.arrayBonus));
  };

  return (
    <Card headerText="Abilità">
      <FormControl fullWidth sx={{ marginBottom: "8px" }}>
        <InputLabel id="label-input-select-abilitaprofiloscelta">
          Seleziona il profilo Abilità
        </InputLabel>
        <Select
          id="select-abilitaprofiloscelta"
          labelId="label-input-select-abilitaprofiloscelta"
          defaultValue=""
          value={profiloAbilitaSelezionato}
          label="Seleziona il profilo Abilità"
          onChange={handleChangeProfiloAbilita}
        >
          {ProfiloAbilitaDb.map((pa) => (
            <MenuItem value={pa.id} key={pa.id}>
              <ListItemText primary={pa.nome} secondary={pa.descrizione} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <AbilitaTable
        abilita={abilita}
        listBonusAbilita={listBonusAbilita}
        profiloAbilitaSelezionato={profiloAbilitaSelezionato}
      />
    </Card>
  );
}

export default AbilitaComponent;
