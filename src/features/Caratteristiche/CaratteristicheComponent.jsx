import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import MinoriPaper from "../../components/MinoriPaper";
import {
  addCaratteristicaAggiornata,
  addMinoreEstratto,
  resetCaratteristiche,
  resetCaratteristicheAggiornate,
  resetMinoriEstratti,
  resetSemiBonus,
  resetSemiMalus,
  setBtnBonusPressed,
  setBtnMalusPressed,
  setCaratteristiche,
  setSemiBonus,
  setSemiMalus,
  updateCaratteristica,
  updateSemiBonus,
  updateSemiMalus,
} from "../../redux/slices/caratteristicheSlice";
import { estraiTaroccoMinore } from "../../utils/random";

function CaratteristicheComponent() {
  const {
    caratteristiche,
    caratteristicheStorico,
    minoriEstratti,
    semiBonus,
    semiMalus,
    caratteristicheAggiornate,
    btnBonusPressed,
    btnMalusPressed,
  } = useSelector((state) => state.caratteristiche);
  const dispatch = useDispatch();

  const visibleButtonBonus = (seme) => isPuntiBonus(seme) > 0;

  const visibleButtonMalus = (seme) => isPuntiMalus(seme) > 0;

  const disableButtonBonus = (cara) =>
    caratteristicheAggiornate.some((t) => cara.id === t.id);

  const disableButtonMalus = (cara) =>
    caratteristicheAggiornate.some((t) => cara.id === t.id);

  const handleResetMinoriEstratti = () => {
    dispatch(resetMinoriEstratti());
    dispatch(resetSemiBonus());
    dispatch(resetSemiMalus());
    dispatch(setBtnMalusPressed(false));
    dispatch(setBtnBonusPressed(false));
    dispatch(resetCaratteristiche());
    dispatch(resetCaratteristicheAggiornate());
    dispatch(setCaratteristiche(caratteristicheStorico));
  };

  const addReduceCaratteristica = (caratt, positive) => {
    let car = { ...caratteristiche.find((t) => t.id === caratt.id) };
    if (positive) {
      car.valore += 1;
    } else {
      car.valore -= 1;
    }
    dispatch(updateCaratteristica(car));
    dispatch(addCaratteristicaAggiornata(car));
    if (positive) {
      let sem = { ...semiBonus.find((t) => t.id === caratt.seme) };
      sem.valore -= 1;
      dispatch(updateSemiBonus(sem));
    } else {
      let sem = { ...semiMalus.find((t) => t.id === caratt.seme) };
      sem.valore -= 1;
      dispatch(updateSemiMalus(sem));
    }
  };

  const visualizzaModificare = (car) => {
    let carVisual = car.valore;
    if (car.modificatore != null) {
      const mod = car.modificatore(car.valore);
      carVisual = carVisual + " " + mod;
    }
    return carVisual;
  };

  const handleEstraiBonusMalus = (bonus) => {
    bonus
      ? dispatch(setBtnBonusPressed(true))
      : dispatch(setBtnMalusPressed(true));
    let numeroEstrazioni = 0;
    const numeroTotaleEstrazioni = bonus ? 3 : 4;
    let minoriEstrattiInt = [...minoriEstratti];
    let updatedSemiBonusMalus = [
      { id: "Cuori", valore: 0 },
      { id: "Quadri", valore: 0 },
      { id: "Fiori", valore: 0 },
      { id: "Picche", valore: 0 },
    ];
    while (numeroEstrazioni <= numeroTotaleEstrazioni) {
      const cartaEstratta = estraiTaroccoMinore();
      if (!minoriEstrattiInt.find((e) => e.id === cartaEstratta.id)) {
        minoriEstrattiInt.push(cartaEstratta);
        dispatch(addMinoreEstratto(cartaEstratta));
        const bonusMalus = cartaEstratta.numeroCarta > 10 ? 2 : 1;
        const cartaEstrattaSeme = cartaEstratta.descSemeCarta;
        let seme = {
          ...updatedSemiBonusMalus.find((t) => t.id === cartaEstrattaSeme),
        };
        seme.valore += bonusMalus;
        updatedSemiBonusMalus = updatedSemiBonusMalus.map((ca) =>
          ca.id === seme.id ? seme : ca
        );
        numeroEstrazioni++;
      }
    }
    bonus
      ? dispatch(setSemiBonus(updatedSemiBonusMalus))
      : dispatch(setSemiMalus(updatedSemiBonusMalus));
  };

  const descPuntiBonusMalus = (seme) => {
    let desc = seme;
    if (btnBonusPressed && isPuntiBonus(seme)) {
      desc = `${seme} (Punti da assegnare: ${getPuntiBonus(seme)})`;
    } else if (btnMalusPressed && isPuntiMalus(seme)) {
      desc = `${seme} (Punti da assegnare: ${getPuntiMalus(seme)})`;
    }
    return desc;
  };

  const isPuntiBonus = (seme) => {
    const sem = semiBonus.find((t) => t.id === seme);
    return sem.valore > 0;
  };

  const isPuntiMalus = (seme) => {
    const sem = semiMalus.find((t) => t.id === seme);
    return sem.valore > 0;
  };

  const getPuntiBonus = (seme) => {
    const sem = semiBonus.find((t) => t.id === seme);
    return sem.valore;
  };

  const getPuntiMalus = (seme) => {
    const sem = semiMalus.find((t) => t.id === seme);
    return sem.valore;
  };

  const checkIfBonusPointArePresent = () => semiBonus.some((t) => t.valore > 0);

  const abilitateBtnMalus = () => {
    let test = true;
    if (btnBonusPressed && !checkIfBonusPointArePresent() && !btnMalusPressed) {
      test = false;
    }
    return test;
  };

  return (
    <Card headerText="Caratteristiche">
      <>
        <Grid container spacing={3}>
          <Grid item xs>
            <Stack spacing={3} direction="row">
              <Button
                disabled={btnBonusPressed}
                size="small"
                variant="contained"
                onClick={() => handleEstraiBonusMalus(true)}
              >
                Estrai Bonus
              </Button>
              <Button
                disabled={abilitateBtnMalus()}
                size="small"
                variant="contained"
                onClick={() => handleEstraiBonusMalus(false)}
              >
                Estrai Malus
              </Button>
              <Button
                size="small"
                disabled={abilitateBtnMalus()}
                variant="contained"
                onClick={() => handleResetMinoriEstratti()}
              >
                Reset
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <MinoriPaper minoriEstratti={minoriEstratti} />
          </Grid>
        </Grid>
        <Grid item xs></Grid>
        <Grid container spacing={4}>
          <Grid item xs>
            <Typography variant="h5" component="div">
              {descPuntiBonusMalus("Cuori")}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              {descPuntiBonusMalus("Quadri")}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              {descPuntiBonusMalus("Fiori")}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              {descPuntiBonusMalus("Picche")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs>
            <List>
              {caratteristiche
                .filter((car) => car.seme === "Cuori")
                .map((car) => (
                  <ListItem
                    key={car.id}
                    secondaryAction={
                      <>
                        {visibleButtonBonus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonBonus(car)}
                            onClick={() => addReduceCaratteristica(car, true)}
                          >
                            <AddCircleOutlineIcon />
                          </IconButton>
                        )}
                        {visibleButtonMalus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonMalus(car)}
                            onClick={() => addReduceCaratteristica(car, false)}
                          >
                            <RemoveCircleOutline />
                          </IconButton>
                        )}
                      </>
                    }
                  >
                    <ListItemText
                      primary={car.nome}
                      secondary={visualizzaModificare(car)}
                    />
                  </ListItem>
                ))}
            </List>
          </Grid>
          <Grid item xs>
            <List>
              {caratteristiche
                .filter((car) => car.seme === "Quadri")
                .map((car) => (
                  <ListItem
                    key={car.id}
                    secondaryAction={
                      <>
                        {visibleButtonBonus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonBonus(car)}
                            onClick={() => addReduceCaratteristica(car, true)}
                          >
                            <AddCircleOutlineIcon />
                          </IconButton>
                        )}
                        {visibleButtonMalus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonMalus(car)}
                            onClick={() => addReduceCaratteristica(car, false)}
                          >
                            <RemoveCircleOutline />
                          </IconButton>
                        )}
                      </>
                    }
                  >
                    <ListItemText primary={car.nome} secondary={car.valore} />
                  </ListItem>
                ))}
            </List>
          </Grid>
          <Grid item xs>
            <List>
              {caratteristiche
                .filter((car) => car.seme === "Fiori")
                .map((car) => (
                  <ListItem
                    key={car.id}
                    secondaryAction={
                      <>
                        {visibleButtonBonus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonBonus(car)}
                            onClick={() => addReduceCaratteristica(car, true)}
                          >
                            <AddCircleOutlineIcon />
                          </IconButton>
                        )}
                        {visibleButtonMalus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonMalus(car)}
                            onClick={() => addReduceCaratteristica(car, false)}
                          >
                            <RemoveCircleOutline />
                          </IconButton>
                        )}
                      </>
                    }
                  >
                    <ListItemText
                      primary={car.nome}
                      secondary={visualizzaModificare(car)}
                    />
                  </ListItem>
                ))}
            </List>
          </Grid>
          <Grid item xs>
            <List>
              {caratteristiche
                .filter((car) => car.seme === "Picche")
                .map((car) => (
                  <ListItem
                    key={car.id}
                    secondaryAction={
                      <>
                        {visibleButtonBonus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonBonus(car)}
                            onClick={() => addReduceCaratteristica(car, true)}
                          >
                            <AddCircleOutlineIcon />
                          </IconButton>
                        )}
                        {visibleButtonMalus(car.seme) && (
                          <IconButton
                            edge="end"
                            disabled={disableButtonMalus(car)}
                            onClick={() => addReduceCaratteristica(car, false)}
                          >
                            <RemoveCircleOutline />
                          </IconButton>
                        )}
                      </>
                    }
                  >
                    <ListItemText
                      primary={car.nome}
                      secondary={visualizzaModificare(car)}
                    />
                  </ListItem>
                ))}
            </List>
          </Grid>
        </Grid>
      </>
    </Card>
  );
}

export default CaratteristicheComponent;
