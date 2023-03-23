import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import IconTooltip from "../../components/IconTooltip";
import TarocchiDb from "../../db/Tarocchi";
import CaratteristicheDb from "../../db/Caratteristiche";
import {
  resetCaratteristiche,
  setCaratteristicheStorico,
  updateCaratteristica,
} from "../../redux/slices/caratteristicheSlice";
import { setTaroccoDominante } from "../../redux/slices/taroccoSlice";

import { handleAssignMalusByEta } from "../../utils/etaMethods";

import { generateRandomNumer } from "../../utils/random";
import TaroccoPaper from "./TaroccoPaper";

function TarocchiDominante() {
  const { taroccoDominante } = useSelector((state) => state.tarocco);
  const { eta } = useSelector((state) => state.eta);

  const dispatch = useDispatch();

  const handleUpdateCaratteristica = (value) =>
    dispatch(updateCaratteristica(value));

  const handleRandomTaroccoDominante = () => {
    const number = generateRandomNumer(21, 0);
    const tarocco = TarocchiDb.find((t) => t.numero === number);
    if (tarocco) {
      dispatch(setTaroccoDominante(tarocco));
      const listCaratteristicheByTarocco = tarocco.caratteristicaRef;
      dispatch(resetCaratteristiche());
      if (eta) {
        handleAssignMalusByEta(eta, handleUpdateCaratteristica);
      }
      listCaratteristicheByTarocco.forEach((element) => {
        const carat = CaratteristicheDb.find((ca) => ca.id === element.id);
        let caratMod = { ...carat };
        if (Math.sign(element.valore)) {
          caratMod.valore = caratMod.valore + element.valore;
        } else {
          caratMod.valore = caratMod.valore - element.valore;
        }
        dispatch(updateCaratteristica(caratMod));
      });
      dispatch(setCaratteristicheStorico());
    }
  };

  return (
    <Card headerText="Tarocco Dominante">
      <Stack spacing={2} direction="row">
        <>
          <Button
            size="small"
            variant="contained"
            onClick={handleRandomTaroccoDominante}
          >
            Estrai
          </Button>
          <IconTooltip
            type={"info"}
            message={
              "La modifica comporta il reset dei seguenti campi: Caratteristiche"
            }
          />
        </>
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
