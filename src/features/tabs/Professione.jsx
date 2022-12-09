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
import ProfessionePaper from "../../components/ProfessionePaper";
import { setAbilita } from "../../redux/slices/abilitaSlice";
import AbilitaDb from "../../db/Abilita";

const Professione = () => {
  const { professione } = useSelector((state) => state.professione);
  const { taroccoPassato } = useSelector((state) => state.tarocco);
  const { eta } = useSelector((state) => state.eta);
  const { ambientazione } = useSelector((state) => state.generalita);
  const dispatch = useDispatch();
  const [professioni, setProfessioni] = useState([]);

  useEffect(() => {
    let professioniFilter = ProfessioniDb;
    if (ambientazione) {
      professioniFilter = professioniFilter.filter(
        (p) => p.ambientazioneRef === ambientazione
      );
    }

    if (eta < 40) {
      professioniFilter = professioniFilter.filter(
        (p) => p.eta !== "A" && p.eta !== "E"
      );
    } else if (eta < 60) {
      professioniFilter = professioniFilter.filter((p) => p.eta !== "E");
    }
    setProfessioni(professioniFilter);
  }, [ambientazione, eta]);

  const handleChangeProfessione = (event) => {
    const prof = event.target.value;
    dispatch(setProfessione(prof));

    let listAbilita = AbilitaDb.filter((ab) => ab.prestampata === true);
    const listAbilitaByProfessione = prof.abilitaRef;

    listAbilitaByProfessione.forEach((element) => {
      let abi = AbilitaDb.find((ab) => ab.id === element.id);
      if (abi.prestampata) {
        listAbilita = listAbilita.map((el) =>
          el.id === element.id
            ? {
                ...el,
                grado: +0,
                counterFallimento: el.counterFallimento + 5,
              }
            : el
        );
      } else {
        abi.grado = +0;
        listAbilita.push(abi);
      }
    });

    const listAbilitaByTarocco = taroccoPassato.abilitaRef;

    if (listAbilitaByTarocco != null) {
      listAbilitaByTarocco.forEach((element) => {
        let abil = AbilitaDb.find((ab) => ab.id === element.id);
        if (abil.prestampata) {
          listAbilita = listAbilita.map((el) =>
            el.id === element.id
              ? {
                  ...el,
                  grado: +0,
                  counterFallimento: el.counterFallimento + 5,
                }
              : el
          );
        } else {
          abil = { ...abil, grado: +0 };
          listAbilita.push(abil);
        }
      });
    }

    dispatch(setAbilita(listAbilita));
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
                    {prof.nome}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <ProfessionePaper professione={professione} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Professione;
