import Card from "../../components/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import ListItemText from "@mui/material/ListItemText";
import { carAffinitaOccultaByStore } from "../../utils/caratteristicheMethods";
import { generateRandomNumer } from "../../utils/random";
import TarocchiDb from "../../db/Tarocchi";
import DoniDb from "../../db/Doni";
import { addDoni, addMaggioriEstratti } from "../../redux/slices/doniSlice";
import MaggioriPaper from "../../components/MaggioriPaper";

const DoniComponent = () => {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { doni, maggioriEstratti } = useSelector((state) => state.doni);
  const dispatch = useDispatch();

  const handleRandomDono = () => {
    let numeroEstrazioni = 0;
    let doniEstratti = [...doni];
    const carAffinita = carAffinitaOccultaByStore(caratteristiche);
    const numeroDoni = carAffinita.modificatore(carAffinita.valore);
    while (numeroEstrazioni < numeroDoni) {
      const number = generateRandomNumer(21, 0);
      const tarocco = TarocchiDb.find((t) => t.numero === number);
      if (tarocco) {
        const donoEstratto = DoniDb.find((t) => t.taroccoRef === tarocco.id);
        if (!doniEstratti.some((t) => t.id === donoEstratto.id)) {
          dispatch(addMaggioriEstratti(tarocco));
          dispatch(addDoni(donoEstratto));
          doniEstratti.push(donoEstratto.id);
          numeroEstrazioni++;
        }
      }
    }
  };

  return (
    <Card headerText="Doni">
      <Button size="small" variant="contained" onClick={handleRandomDono}>
        Estrai
      </Button>
      <Grid container spacing={1}>
        <Grid item xs>
          <MaggioriPaper maggioriEstratti={maggioriEstratti} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <List>
            {doni.map((d) => (
              <ListItem key={d.id} disablePadding>
                <ListItemText primary={d.nome} secondary={d.descrizione} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DoniComponent;
