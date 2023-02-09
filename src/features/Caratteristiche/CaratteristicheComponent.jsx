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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import MinoriPaper from "../../components/MinoriPaper";
import CaratteristicheDb from "../../db/Caratteristiche";
import { setCaratteristiche } from "../../redux/slices/caratteristicheSlice";
import { estraiTaroccoMinore } from "../../utils/random";

function CaratteristicheComponent() {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { taroccoDominante } = useSelector((state) => state.tarocco);
  const dispatch = useDispatch();
  const [caratteristica, setCaratteristica] = useState([]);
  const [minoriEstratti, setMinoriEstratti] = useState([]);
  const [semiStore, setSemiStore] = useState({
    Cuori: 0,
    Quadri: 0,
    Fiori: 0,
    Picche: 0,
  });

  const visibleButton = (seme) => semiStore[seme] !== 0;

  const visibleBonus = (seme) => semiStore[seme] > -1;
  const visibleMalus = (seme) => semiStore[seme] < 0;

  const disableButton = (cara) => caratteristica.includes(cara);

  const resetPunti = () => {
    setSemiStore((prevState) => ({
      ...prevState,
      Cuori: 0,
      Quadri: 0,
      Fiori: 0,
      Picche: 0,
    }));
  };

  const resetMinoriEstratti = () => {
    resetPunti();
    setMinoriEstratti([]);
    let listCaratteristiche = CaratteristicheDb;

    if (
      taroccoDominante != null &&
      taroccoDominante.caratteristicaRef != null
    ) {
      const listCaratteristicheByTarocco = taroccoDominante.caratteristicaRef;
      listCaratteristicheByTarocco.forEach((element) => {
        listCaratteristiche = listCaratteristiche.map((el) =>
          el.id === element.id
            ? { ...el, valore: el.valore + element.valore }
            : el
        );
      });
      dispatch(setCaratteristiche(listCaratteristiche));
    }
  };

  const addReduceCaratteristica = (caratt, positive) => {
    const carattSeme = caratt.seme;
    if (positive) {
      setSemiStore((prevState) => ({
        ...prevState,
        [carattSeme]: prevState[carattSeme] - 1,
      }));
      dispatch(
        setCaratteristiche(
          caratteristiche.map((obj) => {
            if (obj.id === caratt.id) {
              return { ...obj, valore: caratt.valore + 1 };
            } else {
              return obj;
            }
          })
        )
      );
      setCaratteristica((state) => [...state, caratt.nome]);
    } else {
      setSemiStore((prevState) => ({
        ...prevState,
        [carattSeme]: prevState[carattSeme] + 1,
      }));
      dispatch(
        setCaratteristiche(
          caratteristiche.map((obj) => {
            if (obj.id === caratt.id) {
              return { ...obj, valore: caratt.valore - 1 };
            } else {
              return obj;
            }
          })
        )
      );
      setCaratteristica((state) => [...state, caratt.nome]);
    }
  };

  const setBonusMalus = (operand1, positive, operand2) => {
    if (positive) {
      return operand1 + operand2;
    } else {
      return operand1 - operand2;
    }
  };

  const setAttrBonusMalus = (numeroCarta, semeCarta, positive) => {
    let bonusMalus = 0;

    bonusMalus = numeroCarta > 10 ? 2 : 1;

    switch (semeCarta) {
      case 1:
        setSemiStore((prevState) => ({
          ...prevState,
          Cuori: setBonusMalus(prevState.Cuori, positive, bonusMalus),
        }));
        break;
      case 2:
        setSemiStore((prevState) => ({
          ...prevState,
          Quadri: setBonusMalus(prevState.Quadri, positive, bonusMalus),
        }));
        break;
      case 3:
        setSemiStore((prevState) => ({
          ...prevState,
          Fiori: setBonusMalus(prevState.Fiori, positive, bonusMalus),
        }));
        break;
      case 4:
        setSemiStore((prevState) => ({
          ...prevState,
          Picche: setBonusMalus(prevState.Picche, positive, bonusMalus),
        }));
        break;
      default:
        break;
    }
  };

  const bonusMalusMinori = (bonus) => {
    resetPunti();
    let numeroEstrazioni = 0;
    let numeroTotaleEstrazioni = bonus ? 3 : 4;
    let minoriEstrattiInt = [...minoriEstratti];
    while (numeroEstrazioni <= numeroTotaleEstrazioni) {
      const cartaEstratta = estraiTaroccoMinore();
      if (minoriEstrattiInt.length > 0) {
        if (!minoriEstrattiInt.some((e) => e.id === cartaEstratta.id)) {
          minoriEstrattiInt.push(cartaEstratta);
          setMinoriEstratti((state) => [...state, cartaEstratta]);
          setAttrBonusMalus(
            cartaEstratta.numeroCarta,
            cartaEstratta.semeCarta,
            bonus
          );
          numeroEstrazioni++;
        }
      } else {
        minoriEstrattiInt.push(cartaEstratta);
        setMinoriEstratti((state) => [...state, cartaEstratta]);
        setAttrBonusMalus(
          cartaEstratta.numeroCarta,
          cartaEstratta.semeCarta,
          bonus
        );
        numeroEstrazioni++;
      }
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

  return (
    <Card headerText="Caratteristiche">
      <>
        <Grid container spacing={3}>
          <Grid item xs>
            <Stack spacing={3} direction="row">
              <Button
                size="small"
                variant="contained"
                onClick={() => bonusMalusMinori(true)}
              >
                Estrai Bonus
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => bonusMalusMinori(false)}
              >
                Estrai Malus
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => resetMinoriEstratti()}
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
              Cuori ({semiStore.Cuori} punti)
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              Quadri ({semiStore.Quadri} punti)
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              Fiori ({semiStore.Fiori} punti)
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              Picche ({semiStore.Picche} punti)
            </Typography>
          </Grid>
        </Grid>
        {caratteristiche.length > 0 && (
          <>
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
                            {visibleButton(car.seme) &&
                              visibleBonus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.seme) &&
                              visibleMalus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, false)
                                  }
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
                            {visibleButton(car.seme) &&
                              visibleBonus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.seme) &&
                              visibleMalus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, false)
                                  }
                                >
                                  <RemoveCircleOutline />
                                </IconButton>
                              )}
                          </>
                        }
                      >
                        <ListItemText
                          primary={car.nome}
                          secondary={car.valore}
                        />
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
                            {visibleButton(car.seme) &&
                              visibleBonus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.seme) &&
                              visibleMalus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, false)
                                  }
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
                            {visibleButton(car.seme) &&
                              visibleBonus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.seme) &&
                              visibleMalus(car.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, false)
                                  }
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
        )}
      </>
    </Card>
  );
}

export default CaratteristicheComponent;
