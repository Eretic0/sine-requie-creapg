import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
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
import { resetAllAbilita, setAbilita } from "../../redux/slices/abilitaSlice";
import { updateCaratteristica } from "../../redux/slices/caratteristicheSlice";
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
import { resetProfessione } from "../../redux/slices/professioneSlice";
import {
  estraiTaroccoMinore,
  getDescNumeroCarta,
  getDescSemeCarta,
} from "../../utils/random";

export default function PregiDifettiComponent() {
  const [openDesc, setOpenDesc] = React.useState([]);
  const { ambientazione } = useSelector((state) => state.generalita);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { pregi, difetti, minoriEstratti, numDifetti, numPregi } = useSelector(
    (state) => state.pregiDifetti
  );
  const { abilitaStoricoTarocco } = useSelector((state) => state.abilita);
  const dispatch = useDispatch();

  const handleSelectDifetto = (diff) => {
    dispatch(addDifetto(diff));
    const numDifettiMod = numDifetti - 1;
    dispatch(setNumDifetti(numDifettiMod));
  };

  const handleSelectPregi = (pregio) => {
    dispatch(addPregio(pregio));
    let numPregiLocal = numPregi;
    numPregiLocal += 1;
    dispatch(setNumPregi(numPregiLocal));
    let numDifettiLocal = numDifetti;

    if (pregio.difettoRef && !difetti.find((t) => t.id === pregio.difettoRef)) {
      const diff = DifettiDb.find((t) => t.id === pregio.difettoRef);
      numDifettiLocal += pregio.numeroDifetti - 1;
      dispatch(addDifetto(diff));
      const cartaEstratta = {
        id: diff.carta + getDescSemeCarta(diff.seme),
        numeroCarta: diff.carta,
        semeCarta: diff.seme,
        descNumeroCarta: getDescNumeroCarta(diff.carta),
        descSemeCarta: getDescSemeCarta(diff.seme),
      };
      dispatch(addMinoreEstratto(cartaEstratta));
    } else {
      numDifettiLocal += pregio.numeroDifetti;
    }

    dispatch(setNumDifetti(numDifettiLocal));

    if (pregio.caratteristicaRef) {
      pregio.caratteristicaRef.forEach((element) => {
        const caratt = caratteristiche.find((t) => t.id === element.id);
        let caratMod = { ...caratt };
        caratMod.valore += element.valore;
        dispatch(updateCaratteristica(caratMod));
      });
    }
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
        if (difettoEstratto.caratteristicaRef) {
          difettoEstratto.caratteristicaRef.forEach((element) => {
            const carat = caratteristiche.find((t) => t.id === element.id);
            let caratMod = { ...carat };
            caratMod.valore -= element.valore;
            dispatch(updateCaratteristica(caratMod));
          });
        }
        numeroEstrazioni++;
      }
    }
    dispatch(setNumDifetti(0));
  };

  const resetPregiDifetti = () => {
    dispatch(resetProfessione());
    dispatch(resetMinoriEstratti());
    dispatch(setNumPregi(0));
    dispatch(setNumDifetti(0));
    dispatch(resetPregi());
    dispatch(resetDifetti());
    dispatch(resetAllAbilita());
    dispatch(setAbilita(abilitaStoricoTarocco));
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

  const getListPregiFilter = () =>
    PregiDb.filter(
      (t) => !t.ambientazioneRef || t.ambientazioneRef === ambientazione
    );

  const getListDifettiFilterByAmbientazione = () =>
    DifettiDb.filter((t) => t.ambientazioneRef === ambientazione);

  const getListDifettiFilter = () => difetti.filter((t) => !t.ambientazioneRef);

  const isDifettoSelezionato = (dif) => difetti.find((t) => t.id === dif.id);

  const listItemDifetto = (dif, selection = false) => (
    <div key={`div_${dif.id}`}>
      <ListItem
        key={dif.id}
        secondaryAction={
          <>
            {checkIsOpenDesc(dif.id) ? (
              <IconButton
                edge="end"
                onClick={() => handleOpenDescription(dif.id, false)}
              >
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                onClick={() => handleOpenDescription(dif.id, true)}
              >
                <ListItemIcon>
                  <ExpandMoreIcon />
                </ListItemIcon>
              </IconButton>
            )}
            {selection && (
              <IconButton
                edge="end"
                disabled={numDifetti === 0 || isDifettoSelezionato(dif)}
                onClick={() => handleSelectDifetto(dif)}
              >
                {isDifettoSelezionato(dif) ? (
                  <CheckCircleOutlineOutlinedIcon />
                ) : (
                  <AddCircleOutlineIcon />
                )}
              </IconButton>
            )}
          </>
        }
      >
        <ListItemText primary={dif.nome} />
      </ListItem>
      <Collapse
        in={checkIsOpenDesc(dif.id)}
        key={`desc_${dif.id}`}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItemText sx={{ pl: 4 }} primary={dif.descrizione} />
        </List>
      </Collapse>
    </div>
  );

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
              {getListPregiFilter().map((pr) => (
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
              <Tooltip title="La modifica comporta il reset dei seguenti campi: Professione, Abilità">
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => resetPregiDifetti()}
                >
                  Reset
                </Button>
              </Tooltip>
            </Stack>
            {getListDifettiFilterByAmbientazione().length > 0 && (
              <List>
                {getListDifettiFilterByAmbientazione().map((diffTronoCre) =>
                  listItemDifetto(diffTronoCre, true)
                )}
              </List>
            )}
            <List>
              {getListDifettiFilter().length > 0 &&
                getListDifettiFilter().map((diff) => listItemDifetto(diff))}
            </List>
          </>
        </Grid>
      </Grid>
    </Card>
  );
}
