import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
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
import DifettiDb from "../../db/Difetti";
import PregiDb from "../../db/Pregi";
import {
  addDifetto,
  addPregio,
  resetDifetti,
  resetMinoriEstratti,
  resetPregi,
  addMinoreEstratto,
  setNumDifetti,
  setNumPregi,
} from "../../redux/slices/pregiDifettiSlice";
import { estraiTaroccoMinore } from "../../utils/random";

import MinoriPaper from "../../components/MinoriPaper";

export default function PregiDifettiComponent() {
  const { pregi, difetti, minoriEstratti, numDifetti, numPregi } = useSelector(
    (state) => state.pregiDifetti
  );
  const dispatch = useDispatch();

  const handleSelectPregi = (pregio) => {
    dispatch(addPregio(pregio));
    let numPregiLocal = numPregi;
    numPregiLocal += 1;
    dispatch(setNumPregi(numPregiLocal));
    let numDifettiLocal = numDifetti;
    numDifettiLocal += pregio.numeroDifetti;
    dispatch(setNumDifetti(numDifettiLocal));
  };

  const disableButtonPregi = (pregio) =>
    pregi.some((pr) => pr.id === pregio.id);

  const estraiDifetti = () => {
    let numeroEstrazioni = 0;
    let minoriEstrattiInt = [...minoriEstratti];
    while (numeroEstrazioni < numDifetti) {
      const cartaEstratta = estraiTaroccoMinore();
      if (!minoriEstrattiInt.find((e) => e.id === cartaEstratta.id)) {
        minoriEstrattiInt.push(cartaEstratta);
        dispatch(addMinoreEstratto(cartaEstratta));
        const difettoEstratto = DifettiDb.find(
          (dif) =>
            dif.carta === cartaEstratta.numeroCarta &&
            dif.seme === cartaEstratta.semeCarta
        );
        dispatch(addDifetto(difettoEstratto));
        numeroEstrazioni++;
      }
    }
    dispatch(setNumDifetti(0));
  };

  const resetPregiDifetti = () => {
    dispatch(resetMinoriEstratti());
    dispatch(setNumPregi(0));
    dispatch(setNumDifetti(0));
    dispatch(resetPregi());
    dispatch(resetDifetti());
  };

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
              {PregiDb.map((pr) => (
                <ListItem
                  key={pr.id}
                  secondaryAction={
                    <>
                      {disableButtonPregi(pr) ? (
                        <IconButton
                          edge="end"
                          disabled={disableButtonPregi(pr)}
                          onClick={() => handleSelectPregi(pr)}
                        >
                          <CheckCircleOutlineOutlinedIcon />
                        </IconButton>
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
                  <ListItemText
                    primary={pr.nome}
                    secondary={`Numero difetti: ${pr.numeroDifetti}`}
                  />
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
                onClick={() => resetPregiDifetti()}
              >
                Reset
              </Button>
            </Stack>
            <List>
              {difetti.length > 0 &&
                difetti.map((diff) => (
                  <ListItem key={diff.id}>
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
