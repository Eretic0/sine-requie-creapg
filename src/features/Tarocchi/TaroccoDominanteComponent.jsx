import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import IconTooltip from "../../components/IconTooltip";
import CaratteristicheDb from "../../db/Caratteristiche";
import TarocchiDb from "../../db/Tarocchi";
import {
  resetCaratteristiche,
  setCaratteristicheStorico,
  updateCaratteristica,
} from "../../redux/slices/caratteristicheSlice";
import { setTaroccoDominante } from "../../redux/slices/taroccoSlice";
import { generateRandomNumer } from "../../utils/random";
import TaroccoPaper from "./TaroccoPaper";

function TarocchiDominante() {
  const { taroccoDominante } = useSelector((state) => state.tarocco);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { eta } = useSelector((state) => state.eta);
  const carMemoria = CaratteristicheDb.find(
    (t) => t.id === "341575873655210189"
  );
  const carAspetto = CaratteristicheDb.find(
    (t) => t.id === "341575948055871693"
  );
  const carFiori = CaratteristicheDb.filter((t) => t.seme === "Fiori");
  const dispatch = useDispatch();

  const assignMalusToCaratteristicheByEta = (valore) => {
    let carMemoriaMod = { ...carMemoria };
    let carAspettoMod = { ...carAspetto };
    carMemoriaMod.valore -= valore;
    carAspettoMod.valore -= valore;
    dispatch(updateCaratteristica(carMemoriaMod));
    dispatch(updateCaratteristica(carAspettoMod));
    carFiori.forEach((element) => {
      let carMod = { ...element };
      carMod.valore -= valore;
      dispatch(updateCaratteristica(carMod));
    });
  };

  const handleRandomTaroccoDominante = () => {
    const number = generateRandomNumer(21, 0);
    const tarocco = TarocchiDb.find((t) => t.numero === number);
    if (tarocco) {
      dispatch(setTaroccoDominante(tarocco));
      const listCaratteristicheByTarocco = tarocco.caratteristicaRef;
      dispatch(resetCaratteristiche());
      if (eta) {
        if (eta >= 40 && eta <= 59) {
          assignMalusToCaratteristicheByEta(1);
        } else if (eta >= 60) {
          assignMalusToCaratteristicheByEta(2);
        }
      }
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
