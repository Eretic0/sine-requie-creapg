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
import Button from "@mui/material/Button";
import {
  addAbilita,
  resetAllAbilita,
  saveOrUpdateAbilita,
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
  setProfessionePrecedente,
  updateProfessioneAbilitaScelta,
} from "../../redux/slices/professioneSlice";
import { getAmbSoviet } from "../../utils/etaMethods";
import ProfessionePaper from "./ProfessionePaper";
import { setPuntiAbilitaEta } from "../../redux/slices/etaSlice";
import DialogGeneric from "../../components/DialogGeneric";

const ProfessioneComponent = () => {
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
  const [profSovietAppoggio, setProfSovietAppoggio] = React.useState({});
  const {
    professione,
    professioneAbilitaScelte,
    professionePrecedente,
    professioneAbilitaScelteLibere,
  } = useSelector((state) => state.professione);
  const { puntiAbilitaEta, gradoMassimoEta, eta } = useSelector(
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

  const handleAmbSoviet = (prof) => {
    const ambSoviet = getAmbSoviet;
    const profArray = ["A", "E"];
    let test = false;
    if (
      ambSoviet.id === ambientazione &&
      profArray.includes(prof.eta) &&
      eta < 40
    ) {
      test = true;
    }
    return test;
  };

  const getAmbSovietProfAlertDialogDesc = () => {
    let etaProfessioneLabel = "";
    let numeroPunti = "";
    let puntiPerdita = "";
    if (profSovietAppoggio.eta === "A") {
      etaProfessioneLabel = "Avanzata";
      numeroPunti = "15";
      puntiPerdita = "2";
    } else if (profSovietAppoggio.eta === "E") {
      etaProfessioneLabel = "Eccellente";
      numeroPunti = "30";
      puntiPerdita = "3";
    }
    const descrizione = `Dato l'addestramento intensivo infantile tramite la Macchina Educatrice è possibile selezionare questa professione ${etaProfessioneLabel}.\n Questa scelta comporta che saranno disponibili ${numeroPunti} punti per le abilità di professione ma il PG avrà -${puntiPerdita} punti Equilibrio Mentale e -${puntiPerdita} punti Distanza dalla Morte.`;
    return descrizione;
  };

  const handleConfirmProfSoviet = () => {
    if (profSovietAppoggio.eta === "A") {
      dispatch(setPuntiAbilitaEta(15));
    } else if (profSovietAppoggio.eta === "E") {
      dispatch(setPuntiAbilitaEta(30));
    }
    handleCloseAlertDialog();
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
      (p) => !p.professionePrecedente
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
    setProfSovietAppoggio({});
    const prof = event.target.value;
    if (handleAmbSoviet(prof)) {
      setProfSovietAppoggio(prof);
      setOpenAlertDialog(true);
    } else {
      dispatch(setProfessionePrecedente(prof));
      dispatch(setAbilita(abilitaStoricoTarocco));
      const listAbilitaByProfessione = prof.abilitaRef;

      const mainProf = ProfessioniDb.find((t) => t.id === professione.id);

      if (mainProf.abilitaRef.length > 0) {
        mainProf.abilitaRef.forEach((element) => {
          let abilitaStor = abilitaStoricoTarocco.find(
            (t) => t.id === element.id
          );
          if (abilitaStor) {
            let abiMod = { ...abilitaStor };
            abiMod.grado = +0;
            abiMod.professione = true;
            dispatch(saveOrUpdateAbilita(abiMod));
          } else {
            abilitaStor = AbilitaDb.find((t) => t.id === element.id);
            let abiMod = { ...abilitaStor };
            abiMod.grado = +0;
            abiMod.professione = true;
            dispatch(saveOrUpdateAbilita(abiMod));
          }
        });
      }

      listAbilitaByProfessione.forEach((element) => {
        let abilitaStor = abilitaStoricoTarocco.find(
          (t) => t.id === element.id
        );
        if (abilitaStor) {
          let abiMod = { ...abilitaStor };
          abiMod.grado = +0;
          abiMod.professione = true;
          dispatch(saveOrUpdateAbilita(abiMod));
        } else {
          abilitaStor = AbilitaDb.find((t) => t.id === element.id);
          let abiMod = { ...abilitaStor };
          abiMod.grado = +0;
          abiMod.professione = true;
          dispatch(saveOrUpdateAbilita(abiMod));
        }
      });
    }
  };

  const handleChangeProfessione = (event) => {
    dispatch(resetProfessione());
    dispatch(resetAllAbilita());
    setProfSovietAppoggio({});
    const prof = event.target.value;
    if (handleAmbSoviet(prof)) {
      setProfSovietAppoggio(prof);
      setOpenAlertDialog(true);
    } else {
      dispatch(setProfessione(prof));
      const listAbilitaByProfessione = prof.abilitaRef;
      dispatch(setAbilita(abilitaStoricoTarocco));
      listAbilitaByProfessione.forEach((element) => {
        let abilitaStor = abilitaStoricoTarocco.find(
          (t) => t.id === element.id
        );
        if (abilitaStor) {
          let abiMod = { ...abilitaStor };
          abiMod.grado = +0;
          abiMod.professione = true;
          dispatch(saveOrUpdateAbilita(abiMod));
        } else {
          abilitaStor = AbilitaDb.find((t) => t.id === element.id);
          let abiMod = { ...abilitaStor };
          abiMod.grado = +0;
          abiMod.professione = true;
          dispatch(saveOrUpdateAbilita(abiMod));
        }
      });
    }
  };

  const handleResetProfessione = () => {
    dispatch(resetProfessione());
    dispatch(resetAllAbilita());
    dispatch(setAbilita(abilitaStoricoTarocco));
  };

  const handleCloseAlertDialog = () => setOpenAlertDialog(false);

  const handleDismissAlertDialog = () => {
    handleCloseAlertDialog();
    setProfSovietAppoggio({});
  };

  return (
    <Card headerText="Professione">
      <DialogGeneric
        openDialog={openAlertDialog}
        handleCloseDialog={handleDismissAlertDialog}
        handleConfirmDialog={handleConfirmProfSoviet}
        dialogTitleText="Utilizzo Macchina Educatrice"
        dialogDescriptionText={getAmbSovietProfAlertDialogDesc()}
      />
      <Button
        sx={{ marginBottom: "8px" }}
        size="small"
        variant="contained"
        onClick={handleResetProfessione}
      >
        Reset
      </Button>
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
                  value={professionePrecedente}
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
            professionePrecedente={professionePrecedente}
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
