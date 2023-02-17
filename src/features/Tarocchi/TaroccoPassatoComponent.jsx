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
  setAbilitaStorico,
} from "../../redux/slices/abilitaSlice";
import AbilitaDb from "../../db/Abilita";
import IconTooltip from "../../components/IconTooltip";
import { resetProfessione } from "../../redux/slices/professioneSlice";

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
      dispatch(resetProfessione());
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
      dispatch(setAbilitaStorico());
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
          <TaroccoPaper tarocco={taroccoPassato} passato={true} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TaroccoPassato;
