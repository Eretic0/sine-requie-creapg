import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import TarocchiDb from "../../db/Tarocchi";
import {
  resetCaratteristiche,
  updateCaratteristica,
} from "../../redux/slices/caratteristicheSlice";
import { setTaroccoDominante } from "../../redux/slices/taroccoSlice";
import { generateRandomNumer } from "../../utils/random";
import TaroccoPaper from "./TaroccoPaper";

function TarocchiDominante() {
  const { taroccoDominante } = useSelector((state) => state.tarocco);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const dispatch = useDispatch();

  const handleRandomTaroccoDominante = () => {
    const number = generateRandomNumer(21, 0);
    let tarocco = TarocchiDb.find((t) => t.numero === number);
    if (tarocco) {
      dispatch(setTaroccoDominante(tarocco));
      const listCaratteristicheByTarocco = tarocco.caratteristicaRef;
      dispatch(resetCaratteristiche());
      listCaratteristicheByTarocco.forEach((element) => {
        const carat = caratteristiche.find((ca) => ca.id === element.id);
        let caratMod = { ...carat };
        if (Math.sign(element.valore)) {
          caratMod.valore = caratMod.valore + element.valore;
        } else {
          caratMod.valore = caratMod.valore - element.valore;
        }

        dispatch(updateCaratteristica(caratMod));
      });
    }
  };

  return (
    <Card headerText="Tarocco Dominante">
      <Stack spacing={2} direction="row">
        <Button
          size="small"
          variant="contained"
          onClick={handleRandomTaroccoDominante}
        >
          Estrai
        </Button>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs>
          <TaroccoPaper tarocco={taroccoDominante} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TarocchiDominante;
