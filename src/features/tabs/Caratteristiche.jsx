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
import { useEffect, useState } from "react";
import { getAllCaratteristiche } from "../../api";
import Card from "../../components/Card";
import { estraiTaroccoMinore } from "../../utils/random";
import MinoriPaper from "../../components/MinoriPaper";
import { useSelector, useDispatch } from "react-redux";
import { setCaratteristiche } from "../../redux/slices/caratteristicheSlice";

function Caratteristiche() {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
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
  };

  const addReduceCaratteristica = (caratt, positive) => {
    const carattSeme = caratt.data.seme;
    if (positive) {
      setSemiStore((prevState) => ({
        ...prevState,
        [carattSeme]: prevState[carattSeme] - 1,
      }));
      setCaratteristiche((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.ref.value.id === caratt.ref.value.id) {
            return { ...obj, valore: obj.valore + 1 };
          }
          return obj;
        });
        return newState;
      });
      setCaratteristica((state) => [...state, caratt.data.nome]);
    } else {
      setSemiStore((prevState) => ({
        ...prevState,
        [carattSeme]: prevState[carattSeme] + 1,
      }));
      setCaratteristiche((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.ref.value.id === caratt.ref.value.id) {
            return { ...obj, valore: obj.valore - 1 };
          }
          return obj;
        });
        return newState;
      });
      setCaratteristica((state) => [...state, caratt.data.nome]);
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
    while (numeroEstrazioni <= numeroTotaleEstrazioni) {
      const cartaEstratta = estraiTaroccoMinore();
      if (minoriEstratti.length > 0) {
        if (!minoriEstratti.some((e) => e.id === cartaEstratta.id)) {
          setMinoriEstratti((state) => [...state, cartaEstratta]);
          setAttrBonusMalus(
            cartaEstratta.numeroCarta,
            cartaEstratta.semeCarta,
            bonus
          );
          numeroEstrazioni++;
        }
      } else {
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

  useEffect(() => {
    getAllCaratteristiche.then((res) => {
      let listaCaratteristiche = res.map((obj) => ({ ...obj, valore: 4 }));
      dispatch(setCaratteristiche(listaCaratteristiche));
    });
  }, [dispatch]);

  return (
    <Card headerText="Caratteristiche">
      <>
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
                    .filter((car) => car.data.seme === "Cuori")
                    .map((car) => (
                      <ListItem
                        key={car.ref.value.id}
                        secondaryAction={
                          <>
                            {visibleButton(car.data.seme) &&
                              visibleBonus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.data.seme) &&
                              visibleMalus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
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
                          primary={car.data.nome}
                          secondary={car.valore}
                        />
                      </ListItem>
                    ))}
                </List>
              </Grid>
              <Grid item xs>
                <List>
                  {caratteristiche
                    .filter((car) => car.data.seme === "Quadri")
                    .map((car) => (
                      <ListItem
                        key={car.ref.value.id}
                        secondaryAction={
                          <>
                            {visibleButton(car.data.seme) &&
                              visibleBonus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.data.seme) &&
                              visibleMalus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
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
                          primary={car.data.nome}
                          secondary={car.valore}
                        />
                      </ListItem>
                    ))}
                </List>
              </Grid>
              <Grid item xs>
                <List>
                  {caratteristiche
                    .filter((car) => car.data.seme === "Fiori")
                    .map((car) => (
                      <ListItem
                        key={car.ref.value.id}
                        secondaryAction={
                          <>
                            {visibleButton(car.data.seme) &&
                              visibleBonus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.data.seme) &&
                              visibleMalus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
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
                          primary={car.data.nome}
                          secondary={car.valore}
                        />
                      </ListItem>
                    ))}
                </List>
              </Grid>
              <Grid item xs>
                <List>
                  {caratteristiche
                    .filter((car) => car.data.seme === "Picche")
                    .map((car) => (
                      <ListItem
                        key={car.ref.value.id}
                        secondaryAction={
                          <>
                            {visibleButton(car.data.seme) &&
                              visibleBonus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
                                  onClick={() =>
                                    addReduceCaratteristica(car, true)
                                  }
                                >
                                  <AddCircleOutlineIcon />
                                </IconButton>
                              )}
                            {visibleButton(car.data.seme) &&
                              visibleMalus(car.data.seme) && (
                                <IconButton
                                  edge="end"
                                  disabled={disableButton(car.data.nome)}
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
                          primary={car.data.nome}
                          secondary={car.valore}
                        />
                      </ListItem>
                    ))}
                </List>
              </Grid>
            </Grid>
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
          </>
        )}
      </>
    </Card>
  );
}

export default Caratteristiche;
