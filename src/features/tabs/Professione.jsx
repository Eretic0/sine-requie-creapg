import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import ProfessionePaper from "../../components/ProfessionePaper";
import AbilitaDb from "../../db/Abilita";
import ProfessioniDb from "../../db/Professioni";
import { setAbilita } from "../../redux/slices/abilitaSlice";
import { setProfessione } from "../../redux/slices/professioneSlice";

const Professione = () => {
  const { professione } = useSelector((state) => state.professione);
  const { taroccoPassato } = useSelector((state) => state.tarocco);
  const { eta } = useSelector((state) => state.eta);
  const { ambientazione } = useSelector((state) => state.generalita);
  const dispatch = useDispatch();
  const [professioni, setProfessioni] = useState([]);
  const [abilitaScelta, setAbilitaScelta] = useState("");
  const [puntiAbilita, setPuntiAbilita] = useState(7);
  const [gradoMassimo, setGradoMassimo] = useState("+3");

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

    if (eta < 18) {
      setPuntiAbilita(2);
      setGradoMassimo("+2");
    } else if (eta >= 19 && eta <= 39) {
      setPuntiAbilita(7);
      setGradoMassimo("+3");
    } else if (eta >= 40 && eta <= 59) {
      setPuntiAbilita(15);
      setGradoMassimo("+4");
    } else if (eta >= 60) {
      setPuntiAbilita(21);
      setGradoMassimo("+5");
    }
  }, [ambientazione, eta]);

  const handleChangeAbilitaScelta = (event) => {
    setAbilitaScelta(event.target.value);
  };

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
                professione: true,
                counterFallimento: el.counterFallimento + 5,
              }
            : el
        );
      } else {
        abi.grado = +0;
        abi.professione = true;
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
                  professione: true,
                  counterFallimento: el.counterFallimento + 5,
                }
              : el
          );
        } else {
          abil = { ...abil, grado: +0, professione: true };
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
          <ProfessionePaper
            professione={professione}
            abilitaScelta={abilitaScelta}
            handleChangeAbilitaScelta={handleChangeAbilitaScelta}
            puntiAbilita={puntiAbilita}
            gradoMassimo={gradoMassimo}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Professione;
