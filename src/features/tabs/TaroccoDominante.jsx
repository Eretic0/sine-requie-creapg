import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { getAllTarocchi } from "../../api";
import Card from "../../components/Card";
import TaroccoPaper from "../../components/TaroccoPaper";
import { generateRandomNumer } from "../../utils/random";

function TaroccoDominante() {
  const [taroccoDominante, setTaroccoDominante] = useState(null);
  const [tarocchi, setTarocchi] = useState([]);

  const handleRandomTaroccoDominante = () => {
    const number = generateRandomNumer(21, 0);
    let tarocco = [];
    if (tarocchi.length > 0) {
      tarocco = tarocchi.filter((tar) => tar.data.numero === number);
      if (tarocco.length > 0) {
        setTaroccoDominante(tarocco[0]);
      }
    }
  };

  useEffect(() => {
    getAllTarocchi.then((res) => {
      setTarocchi(res);
    });
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
