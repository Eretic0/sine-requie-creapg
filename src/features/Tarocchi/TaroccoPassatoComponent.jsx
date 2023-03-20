import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import IconTooltip from "../../components/IconTooltip";
import AbilitaDb from "../../db/Abilita";
import TarocchiDb from "../../db/Tarocchi";
import {
  resetAbilitaScelteTaroccoPassato,
  resetAllAbilita,
  saveOrUpdateAbilita,
  setAbilitaScelteTaroccoPassato,
  setAbilitaStoricoTarocco,
} from "../../redux/slices/abilitaSlice";
import { resetProfessione } from "../../redux/slices/professioneSlice";
import { setTaroccoPassato } from "../../redux/slices/taroccoSlice";
import { generateRandomNumer } from "../../utils/random";
import TaroccoPaper from "./TaroccoPaper";

function TaroccoPassato() {
  const { taroccoPassato } = useSelector((state) => state.tarocco);
  const { numeroAbilitaTaroccoPassato } = useSelector((state) => state.eta);
  const { abilitaScelteTaroccoPassato } = useSelector((state) => state.abilita);
  const dispatch = useDispatch();

  const handleSelectAbilitaTaroccoPassato = (event) => {
    const idAbilita = event.target.value;
    if (idAbilita) {
      dispatch(resetAllAbilita());
      dispatch(resetProfessione());
      const ability = AbilitaDb.find((ab) => ab.id === idAbilita);
      let abi = { ...ability };
      abi.grado = +0;
      abi.passato = true;
      dispatch(saveOrUpdateAbilita(abi));
      dispatch(setAbilitaScelteTaroccoPassato(idAbilita));
      dispatch(setAbilitaStoricoTarocco());
    }
  };

  const handleRandomTaroccoPassato = () => {
    const number = generateRandomNumer(21, 0);
    const tarocco = TarocchiDb.find((t) => t.numero === number);
    if (tarocco) {
      dispatch(resetAbilitaScelteTaroccoPassato());
      dispatch(setTaroccoPassato(tarocco));
      const listAbilitaByTarocco = tarocco.abilitaRef;
      dispatch(resetAllAbilita());
      dispatch(resetProfessione());
      if (numeroAbilitaTaroccoPassato === 2) {
        listAbilitaByTarocco.forEach((element) => {
          const ability = AbilitaDb.find((ab) => ab.id === element.id);
          let abi = { ...ability };
          abi.grado = +0;
          abi.passato = true;
          dispatch(saveOrUpdateAbilita(abi));
        });
      }
      dispatch(setAbilitaStoricoTarocco());
    }
  };

  return (
    <Card headerText="Tarocco Passato">
      <Stack spacing={2} direction="row">
        <>
          <Button
            size="small"
            variant="contained"
            onClick={handleRandomTaroccoPassato}
          >
            Estrai
          </Button>
          <IconTooltip
            type={"info"}
            message={
              "La modifica comporta il reset dei seguenti campi: Professione, Abilità"
            }
          />
        </>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs>
          <TaroccoPaper
            tarocco={taroccoPassato}
            passato={true}
            numeroAbilitaTaroccoPassato={numeroAbilitaTaroccoPassato}
            abilitaScelteTaroccoPassato={abilitaScelteTaroccoPassato}
            handleSelectAbilitaTaroccoPassato={
              handleSelectAbilitaTaroccoPassato
            }
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TaroccoPassato;
