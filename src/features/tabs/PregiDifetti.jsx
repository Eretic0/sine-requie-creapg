import Card from "../../components/Card";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PregiDb from "../../db/Pregi";
import DifettiDb from "../../db/Difetti";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { estraiTaroccoMinore } from "../../utils/random";
import { useDispatch, useSelector } from "react-redux";
import { setPregi, setDifetti } from "../../redux/slices/pregiDifettiSlice";

import MinoriPaper from "../../components/MinoriPaper";

export default function PregiDifetti() {
  const { pregi, difetti } = useSelector((state) => state.pregiDifetti);
  const dispatch = useDispatch();
  const [listPregi, setListPregi] = useState([]);
  const [listDifetti, setListDifetti] = useState([]);
  const [numDifetti, setNumDifetti] = useState(0);
  const [numPregi, setNumPregi] = useState(0);
  const [pregiSelezionati, setPregiSelezionati] = useState([]);
  const [difettiSelezionati, setDifettiSelezionati] = useState([]);
  const [minoriEstratti, setMinoriEstratti] = useState([]);

  const handleSelectPregi = (pregio) => {
    dispatch(setPregi(pregio));
    setPregiSelezionati((state) => [...state, pregio]);
    setNumPregi((prevState) => prevState + 1);
    setNumDifetti((prevState) => prevState + pregio.numeroDifetti);
  };

  const handleSelectDifetti = (difetto) => {
    dispatch(setDifetti(difetto));
    setDifettiSelezionati((state) => [...state, difetto]);
    setNumDifetti((prevState) => prevState - 1);
  };

  const handleDeselectPregi = (pregio) => {
    const preg = listPregi.filter((el) => el.id === pregio.id);
    setPregiSelezionati(preg);
    setNumPregi((prevState) => prevState - 1);
    setNumDifetti((prevState) => prevState - pregio.numeroDifetti);
  };

  const disableButtonPregi = (pregio) =>
    pregiSelezionati.some((pr) => pr.id === pregio.id);

  const disableButtonDifetti = (difetto) =>
    difettiSelezionati.some((dif) => dif.id === difetto.id);

  const estraiDifetti = () => {
    let numeroEstrazioni = 0;
    while (numeroEstrazioni < numDifetti) {
      const cartaEstratta = estraiTaroccoMinore();

      if (minoriEstratti.length > 0) {
        if (!minoriEstratti.some((e) => e.id === cartaEstratta.id)) {
          setMinoriEstratti((state) => [...state, cartaEstratta]);
          const difettoEstratto = listDifetti.find(
            (dif) =>
              dif.carta === cartaEstratta.numeroCarta &&
              dif.seme === cartaEstratta.semeCarta
          );
          handleSelectDifetti(difettoEstratto);
          numeroEstrazioni++;
        }
      } else {
        setMinoriEstratti((state) => [...state, cartaEstratta]);

        const difettoEstratto = listDifetti.find(
          (dif) =>
            dif.carta === cartaEstratta.numeroCarta &&
            dif.seme === cartaEstratta.semeCarta
        );
        handleSelectDifetti(difettoEstratto);
        numeroEstrazioni++;
      }
    }
  };

  const resetDifetti = () => {
    setPregiSelezionati([]);
    setDifettiSelezionati([]);
    setMinoriEstratti([]);
    setNumPregi(0);
    setNumDifetti(0);
  };

  useEffect(() => {
    setListPregi(PregiDb);
    setListDifetti(DifettiDb);
  }, []);

  return (
    <Card headerText="Pregi e Difetti">
      <Grid container spacing={1}>
        <Grid item xs>
          {minoriEstratti.length > 0 && (
            <MinoriPaper minoriEstratti={minoriEstratti} />
          )}
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs>
          <>
            <Typography variant="body2" color="text.secondary">
              Pregi ({numPregi} selezionati)
            </Typography>
            <List>
              {listPregi.length > 0 &&
                listPregi.map((pr) => (
                  <ListItem
                    key={pr.id}
                    secondaryAction={
                      <>
                        {disableButtonPregi(pr) ? (
                          <>
                            <IconButton
                              edge="end"
                              disabled={disableButtonPregi(pr)}
                              onClick={() => handleSelectPregi(pr)}
                            >
                              <CheckCircleOutlineOutlinedIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              onClick={() => handleDeselectPregi(pr)}
                            >
                              <RemoveCircleOutlineIcon />
                            </IconButton>
                          </>
                        ) : (
                          <IconButton
                            edge="end"
                            disabled={disableButtonPregi(pr)}
                            onClick={() => handleSelectPregi(pr)}
                          >
                            <AddCircleOutlineIcon />
                          </IconButton>
                        )}
                      </>
                    }
                  >
                    <ListItemText primary={pr.nome} />
                  </ListItem>
                ))}
            </List>
          </>
        </Grid>
        <Grid item xs>
          <>
            <Typography variant="body2" color="text.secondary">
              Difetti ({numDifetti} da selezionare)
            </Typography>
            <Stack spacing={2} direction="row">
              <Button
                size="small"
                disabled={numDifetti === 0}
                variant="contained"
                onClick={() => estraiDifetti()}
              >
                Estrai Difetto
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => resetDifetti()}
              >
                Reset
              </Button>
            </Stack>
            <List>
              {difettiSelezionati.length > 0 &&
                difettiSelezionati.map((diff) => (
                  <ListItem
                    key={diff.id}
                    secondaryAction={
                      <IconButton
                        disabled={disableButtonDifetti(diff)}
                        edge="end"
                        onClick={() => handleSelectDifetti(diff)}
                      >
                        <CheckCircleOutlineOutlinedIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={diff.nome} />
                  </ListItem>
                ))}
            </List>
          </>
        </Grid>
      </Grid>
    </Card>
  );
}
