import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AbilitaTable from "../../components/AbilitaTable";
import Card from "../../components/Card";
import ProfiloAbilitaDb from "../../db/ProfiloAbilita";
import {
  setListBonusAbilita,
  setProfiloAbilitaSelezionato,
} from "../../redux/slices/abilitaSlice";

const Abilita = () => {
  const { abilita, profiloAbilitaSelezionato, listBonusAbilita } = useSelector(
    (state) => state.abilita
  );
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleChangeProfiloAbilita = (event) => {
    const profiloAbilita = ProfiloAbilitaDb.find(
      (pa) => pa.id === event.target.value
    );
    dispatch(setProfiloAbilitaSelezionato(profiloAbilita.id));
    dispatch(setListBonusAbilita(profiloAbilita.arrayBonus));
  };

  return (
    <Card headerText="Abilità">
      <Stack direction="row" spacing={2}>
        <FormControl fullWidth>
          <FormLabel id="abilitaprofiloscelta-radio-buttons-group-label">
            Seleziona il profilo Abilità
          </FormLabel>
          <RadioGroup
            name="abilitaprofiloscelta-radio-buttons-group"
            value={profiloAbilitaSelezionato}
            onChange={handleChangeProfiloAbilita}
          >
            {ProfiloAbilitaDb.map((pa) => (
              <FormControlLabel
                key={pa.id}
                value={pa.id}
                control={<Radio />}
                label={
                  <pre>
                    {pa.nome}
                    <br />
                    {pa.descrizione}
                  </pre>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
      <AbilitaTable abilita={abilita} listBonusAbilita={listBonusAbilita} />
    </Card>
  );
};

export default Abilita;
