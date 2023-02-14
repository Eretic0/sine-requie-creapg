import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "../../components/Card";
import TaroccoPaper from "./TaroccoPaper";
import { generateRandomNumer } from "../../utils/random";
import TarocchiDb from "../../db/Tarocchi";
import { useSelector, useDispatch } from "react-redux";
import { setTaroccoPassato } from "../../redux/slices/taroccoSlice";
import {
  resetAllAbilita,
  updateAbilita,
  addAbilita,
} from "../../redux/slices/abilitaSlice";
import AbilitaDb from "../../db/Abilita";

function TaroccoPassato() {
  const { taroccoPassato } = useSelector((state) => state.tarocco);
  const dispatch = useDispatch();

  const handleRandomTaroccoPassato = () => {
    const number = generateRandomNumer(21, 0);
    const tarocco = TarocchiDb.find((t) => t.numero === number);
    if (tarocco) {
      dispatch(setTaroccoPassato(tarocco));
      const listAbilitaByTarocco = tarocco.abilitaRef;
      dispatch(resetAllAbilita());
      listAbilitaByTarocco.forEach((element) => {
        const ability = AbilitaDb.find((ab) => ab.id === element.id);
        let abi = { ...ability };
        abi.grado = +0;
        abi.passato = true;
        if (abi.prestampata) {
          abi.counterFallimento += 5;
          dispatch(updateAbilita(abi));
        } else {
          dispatch(addAbilita(abi));
        }
      });
    }
  };

  return (
    <Card headerText="Tarocco Passato">
      <Stack spacing={2} direction="row">
        <Button
          size="small"
          variant="contained"
          onClick={handleRandomTaroccoPassato}
        >
          Estrai
        </Button>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs>
          <TaroccoPaper tarocco={taroccoPassato} passato={true} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TaroccoPassato;