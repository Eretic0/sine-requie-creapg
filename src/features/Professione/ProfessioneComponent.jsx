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
  updateAbilita,
} from "../../redux/slices/abilitaSlice";
import {
  addProfessioneAbilitaScelta,
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
  const { abilita } = useSelector((state) => state.abilita);
  const { taroccoPassato } = useSelector((state) => state.tarocco);
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

  const handleChangeProfessione = (event) => {
    dispatch(resetAllAbilita());
    const prof = event.target.value;
    dispatch(setProfessione(prof));
    const listAbilitaByProfessione = prof.abilitaRef;
    listAbilitaByProfessione.forEach((element) => {
      const abi = AbilitaDb.find((ab) => ab.id === element.id);
      if (taroccoPassato.abilitaRef) {
        const abiPassProf = taroccoPassato.abilitaRef.find(
          (t) => t.id === abi.id
        );
        if (abiPassProf) {
          let abiPassProfMod = { ...abi };
          abiPassProfMod.grado = +0;
          abiPassProfMod.professione = true;
          abiPassProfMod.passato = true;
          if (abiPassProfMod.prestampata) {
            abiPassProfMod.counterFallimento += 10;
            dispatch(updateAbilita(abiPassProfMod));
          } else {
            abiPassProfMod.counterFallimento += 5;
            dispatch(addAbilita(abiPassProfMod));
          }
        } else {
          let abiMod = { ...abi };
          abiMod.grado = +0;
          abiMod.professione = true;
          if (abiMod.prestampata) {
            abiMod.counterFallimento += 5;
            dispatch(updateAbilita(abiMod));
          } else {
            dispatch(addAbilita(abiMod));
          }
        }
      } else {
        let abiMod = { ...abi };
        abiMod.grado = +0;
        abiMod.professione = true;
        if (abiMod.prestampata) {
          abiMod.counterFallimento += 5;
          dispatch(updateAbilita(abiMod));
        } else {
          dispatch(addAbilita(abiMod));
        }
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
