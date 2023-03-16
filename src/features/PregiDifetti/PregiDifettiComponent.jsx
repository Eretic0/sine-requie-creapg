import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import MinoriPaper from "../../components/MinoriPaper";
import DifettiDb from "../../db/Difetti";
import PregiDb from "../../db/Pregi";
import {
  addDifetto,
  addMinoreEstratto,
  addPregio,
  resetDifetti,
  resetMinoriEstratti,
  resetPregi,
  setNumDifetti,
  setNumPregi,
} from "../../redux/slices/pregiDifettiSlice";
import { estraiTaroccoMinore } from "../../utils/random";

export default function PregiDifettiComponent() {
  const [openDesc, setOpenDesc] = React.useState([]);
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

  const handleOpenDescription = (id, isOpen) => {
    const openDescObj = openDesc.find((t) => t.id === id);
    if (openDescObj) {
      let openDescList = openDesc.map((opDes) =>
        opDes.id === id ? { ...opDes, open: isOpen } : { ...opDes }
      );
      setOpenDesc(openDescList);
    } else {
      let openDescCopy = [...openDesc];
      openDescCopy.push({ id: id, open: isOpen });
      setOpenDesc(openDescCopy);
    }
  };

  const checkIsOpenDesc = (id) => {
    const openDescObj = openDesc.find((t) => t.id === id);
    return openDescObj ? openDescObj.open : false;
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
            <List component="nav">
              {PregiDb.map((pr) => (
                <div key={`div_${pr.id}`}>
                  <ListItem
                    key={pr.id}
                    secondaryAction={
                      <>
                        {checkIsOpenDesc(pr.id) ? (
                          <IconButton
                            edge="end"
                            onClick={() => handleOpenDescription(pr.id, false)}
                          >
                            <ExpandLessIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            edge="end"
                            onClick={() => handleOpenDescription(pr.id, true)}
                          >
                            <ListItemIcon>
                              <ExpandMoreIcon />
                            </ListItemIcon>
                          </IconButton>
                        )}
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
                  <Collapse
                    in={checkIsOpenDesc(pr.id)}
                    key={`desc_${pr.id}`}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItemText sx={{ pl: 4 }} primary={pr.descrizione} />
                    </List>
                  </Collapse>
                </div>
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
                  <div key={`div_${diff.id}`}>
                    <ListItem
                      key={diff.id}
                      secondaryAction={
                        <>
                          {checkIsOpenDesc(diff.id) ? (
                            <IconButton
                              edge="end"
                              onClick={() =>
                                handleOpenDescription(diff.id, false)
                              }
                            >
                              <ExpandLessIcon />
                            </IconButton>
                          ) : (
                            <IconButton
                              edge="end"
                              onClick={() =>
                                handleOpenDescription(diff.id, true)
                              }
                            >
                              <ListItemIcon>
                                <ExpandMoreIcon />
                              </ListItemIcon>
                            </IconButton>
                          )}
                        </>
                      }
                    >
                      <ListItemText primary={diff.nome} />
                    </ListItem>
                    <Collapse
                      in={checkIsOpenDesc(diff.id)}
                      key={`desc_${diff.id}`}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItemText
                          sx={{ pl: 4 }}
                          primary={diff.descrizione}
                        />
                      </List>
                    </Collapse>
                  </div>
                ))}
            </List>
          </>
        </Grid>
      </Grid>
    </Card>
  );
}
