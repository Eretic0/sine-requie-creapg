import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import IconTooltip from "../../components/IconTooltip";
import AbilitaDb from "../../db/Abilita";
import ProfessioniDb from "../../db/Professioni";
import {
  addAbilita,
  resetAllAbilita,
  setAbilita,
  updateAbilita,
} from "../../redux/slices/abilitaSlice";
import {
  addProfessioneAbilitaScelta,
  resetProfessione,
  resetProfessioneAbilitaScelte,
  resetProfessioneAbilitaScelteLibere,
  setProfessione,
  setProfessioneAbilitaScelteLibere,
  updateProfessioneAbilitaScelta,
} from "../../redux/slices/professioneSlice";
import ProfessionePaper from "./ProfessionePaper";

const ProfessioneComponent = () => {
  const {
    professione,
    professioneAbilitaScelte,
    professioneAbilitaScelteLibere,
  } = useSelector((state) => state.professione);
  const { puntiAbilitaEta, gradoMassimoEta } = useSelector(
    (state) => state.eta
  );
  const { abilita, abilitaStoricoTarocco } = useSelector(
    (state) => state.abilita
  );
  const { arrayProfessioneEta } = useSelector((state) => state.eta);
  const { ambientazione } = useSelector((state) => state.generalita);
  const dispatch = useDispatch();

  const handleChangeAbilitaSceltaLibera = (event) => {
    let abilitySelected = event.target.value;

    if (typeof abilitySelected === "string") {
      abilitySelected = abilitySelected.split(",");
    }
    dispatch(setProfessioneAbilitaScelteLibere(abilitySelected));

    abilitySelected.forEach((element) => {
      let ability = abilita.find((ab) => ab.id === element);
      if (!ability) {
        ability = AbilitaDb.find((ab) => ab.id === element);
        if (!ability.scelta) {
          ability.scelta = true;
          dispatch(addAbilita(setAbilityForProfessione(ability)));
        }
      } else {
        if (!ability.scelta) {
          ability.scelta = true;
          dispatch(updateAbilita(setAbilityForProfessione(ability)));
        }
      }
    });
  };

  const getListProfessione = () => {
    let professioniFilter = ProfessioniDb;
    if (ambientazione) {
      professioniFilter = professioniFilter.filter(
        (p) => p.ambientazioneRef === ambientazione
      );
    }
    professioniFilter = professioniFilter.filter((p) =>
      arrayProfessioneEta.includes(p.eta)
    );
    return professioniFilter;
  };

  const getListProfessioneFilterByPrecedente = () => {
    let professioniFilter = ProfessioniDb.filter(
      (p) => p.ambientazioneRef === professione.ambientazioneRef
    );
    professioniFilter = professioniFilter.filter(
      (p) => p.id !== professione.id
    );
    professioniFilter = professioniFilter.filter((p) =>
      arrayProfessioneEta.includes(p.eta)
    );
    return professioniFilter;
  };

  const setAbilityForProfessione = (ability) => {
    let abilityInt = { ...ability };
    if (abilityInt.prestampata) {
      abilityInt.counterFallimento += 5;
    }
    abilityInt.grado = 0;
    abilityInt.professione = true;
    return abilityInt;
  };

  const handleChangeAbilitaScelta = (idList, event) => {
    const idAbilita = event.target.value;
    const professioneAbilitaScelta = {
      idList,
      idAbilita,
    };
    if (professioneAbilitaScelte.find((t) => t.idList === idList)) {
      dispatch(updateProfessioneAbilitaScelta(professioneAbilitaScelta));
    } else {
      dispatch(addProfessioneAbilitaScelta(professioneAbilitaScelta));
    }
    let ability = abilita.find((ab) => ab.id === idAbilita);
    if (!ability) {
      ability = AbilitaDb.find((ab) => ab.id === idAbilita);
      dispatch(addAbilita(setAbilityForProfessione(ability)));
    } else {
      dispatch(updateAbilita(setAbilityForProfessione(ability)));
    }
  };

  const handleChangeProfessionePrecedente = (event) => {
    dispatch(resetProfessioneAbilitaScelte());
    dispatch(resetProfessioneAbilitaScelteLibere());
    dispatch(resetAllAbilita());
  };

  const handleChangeProfessione = (event) => {
    dispatch(resetProfessione());
    dispatch(resetAllAbilita());
    const prof = event.target.value;
    dispatch(setProfessione(prof));
    const listAbilitaByProfessione = prof.abilitaRef;
    dispatch(setAbilita(abilitaStoricoTarocco));
    listAbilitaByProfessione.forEach((element) => {
      let abilitaStor = abilitaStoricoTarocco.find((t) => t.id === element.id);
      if (abilitaStor) {
        let abiMod = { ...abilitaStor };
        abiMod.grado = +0;
        abiMod.professione = true;
        abiMod.counterFallimento += 5;
        dispatch(updateAbilita(abiMod));
      } else {
        abilitaStor = AbilitaDb.find((t) => t.id === element.id);
        let abiMod = { ...abilitaStor };
        abiMod.grado = +0;
        abiMod.professione = true;
        dispatch(addAbilita(abiMod));
      }
    });
  };

  return (
    <Card headerText="Professione">
      <Grid container spacing={4}>
        <Grid item xs>
          <>
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
                value={professione}
                defaultValue=""
                onChange={handleChangeProfessione}
              >
                {getListProfessione().map((prof) => (
                  <MenuItem key={prof.id} value={prof}>
                    {prof.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconTooltip
              type={"info"}
              message={
                "La modifica comporta il reset dei seguenti campi: Abilità"
              }
            />
          </>
        </Grid>
        {professione.professionePrecedente && (
          <Grid item xs>
            <>
              <FormControl fullWidth>
                <InputLabel
                  id="label-input-select-professione-precedente"
                  htmlFor="select-professione-precedente"
                >
                  Professione Precedente
                </InputLabel>
                <Select
                  id="select-professione-precedente"
                  label="Professione Precedente"
                  value={professione}
                  defaultValue=""
                  onChange={handleChangeProfessionePrecedente}
                >
                  {getListProfessioneFilterByPrecedente().map((prof) => (
                    <MenuItem key={prof.id} value={prof}>
                      {prof.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <IconTooltip
                type={"info"}
                message={
                  "La modifica comporta il reset dei seguenti campi: Abilità"
                }
              />
            </>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <ProfessionePaper
            professione={professione}
            professioneAbilitaScelte={professioneAbilitaScelte}
            handleChangeAbilitaScelta={handleChangeAbilitaScelta}
            handleChangeAbilitaSceltaLibera={handleChangeAbilitaSceltaLibera}
            puntiAbilita={puntiAbilitaEta}
            gradoMassimo={gradoMassimoEta}
            abilita={abilita}
            professioneAbilitaScelteLibere={professioneAbilitaScelteLibere}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfessioneComponent;
