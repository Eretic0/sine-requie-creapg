import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import TaroccoPaper from "../../components/TaroccoPaper";
import { generateRandomNumer } from "../../utils/random";
import TarocchiDb from "../../db/Tarocchi";
import { useSelector, useDispatch } from "react-redux";
import { setTaroccoPassato } from "../../redux/slices/taroccoSlice";

function TaroccoPassato() {
  const { taroccoPassato } = useSelector((state) => state.tarocco);
  const dispatch = useDispatch();
  const [tarocchi, setTarocchi] = useState([]);

  const handleRandomTaroccoPassato = () => {
    const number = generateRandomNumer(21, 0);
    let tarocco = [];
    if (tarocchi.length > 0) {
      tarocco = tarocchi.filter((tar) => tar.numero === number);
      if (tarocco.length > 0) {
        dispatch(setTaroccoPassato(tarocco[0]));
      }
    }
  };

  useEffect(() => {
    setTarocchi(TarocchiDb);
  }, []);

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
          <TaroccoPaper tarocco={taroccoPassato} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TaroccoPassato;
