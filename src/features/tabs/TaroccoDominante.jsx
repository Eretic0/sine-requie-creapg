import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import TaroccoPaper from "../../components/TaroccoPaper";
import { generateRandomNumer } from "../../utils/random";
import TarocchiDb from "../../db/Tarocchi";
import { useSelector, useDispatch } from "react-redux";
import { setTaroccoDominante } from "../../redux/slices/taroccoSlice";
import { setCaratteristiche } from "../../redux/slices/caratteristicheSlice";
import CaratteristicheDb from "../../db/Caratteristiche";

function TaroccoDominante() {
  const { taroccoDominante } = useSelector((state) => state.tarocco);
  const dispatch = useDispatch();
  const [tarocchi, setTarocchi] = useState([]);

  const handleRandomTaroccoDominante = () => {
    const number = generateRandomNumer(21, 0);
    let tarocco = [];
    if (tarocchi.length > 0) {
      tarocco = tarocchi.filter((tar) => tar.numero === number);
      if (tarocco.length > 0) {
        dispatch(setTaroccoDominante(tarocco[0]));
        let listCaratteristiche = CaratteristicheDb;
        const listCaratteristicheByTarocco = tarocco[0].caratteristicaRef;
        listCaratteristicheByTarocco.forEach((element) => {
          listCaratteristiche = listCaratteristiche.map((el) =>
            el.id === element.id
              ? { ...el, valore: el.valore + element.valore }
              : el
          );
        });
        dispatch(setCaratteristiche(listCaratteristiche));
      }
    }
  };

  useEffect(() => {
    setTarocchi(TarocchiDb);
  }, []);

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

export default TaroccoDominante;
