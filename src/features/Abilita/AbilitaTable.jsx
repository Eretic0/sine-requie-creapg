import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import ArmiDb from "../../db/Armi";
import ProfiloAbilitaDb from "../../db/ProfiloAbilita";
import {
  removeBonusFromListBonusAbilita,
  setAbilitaStoricoProfessione,
  updateAbilita,
} from "../../redux/slices/abilitaSlice";
import { setPuntiAbilitaEta } from "../../redux/slices/etaSlice";
import {
  calcolaCaratUsata,
  calcolaVS,
  getDescIfPregioOrDifetto,
  getValoreIfPregioOrDifetto,
} from "../../utils/abilitaMethods";

const AbilitaTable = ({
  abilita,
  listBonusAbilita = null,
  profiloAbilitaSelezionato = null,
}) => {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { ambientazione } = useSelector((state) => state.generalita);
  const { pregi, difetti } = useSelector((state) => state.pregiDifetti);
  const arrayCounterFallimento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useDispatch();
  const { puntiAbilitaEta, gradoMassimoEta } = useSelector(
    (state) => state.eta
  );

  const getVS = (ab) => {
    if (ab.caratteristicaRef != null) {
      const car = caratteristiche.find(
        (car) => car.id === ab.caratteristicaRef
      );
      let sommaGradoCaratt = calcolaCaratUsata(ab.grado, car.valore);
      sommaGradoCaratt = getValoreIfPregioOrDifetto(
        ab.id,
        sommaGradoCaratt,
        pregi,
        difetti
      );
      return calcolaVS(sommaGradoCaratt);
    }
  };

  const getCaratteristica = (ab) => {
    if (ab.caratteristicaRef != null) {
      const car = caratteristiche.find(
        (car) => car.id === ab.caratteristicaRef
      );
      let sommaGradoCaratt = calcolaCaratUsata(ab.grado, car.valore);
      sommaGradoCaratt = getValoreIfPregioOrDifetto(
        ab.id,
        sommaGradoCaratt,
        pregi,
        difetti
      );
      return `${car.nome} ${sommaGradoCaratt}`;
    }
  };

  const filterListSpecifico = (listSpecifico) =>
    listSpecifico.filter(
      (t) => !t.ambientazioneRef || t.ambientazioneRef === ambientazione
    );

  const visualizzaSpecifico = (ab) => {
    if (ab.specifico) {
      if (ab.specifico.length > 0) {
        return (
          <>
            {ab.nome}
            <br />
            <InputLabel id={`label-select-specifico-${ab.id}`}>
              specifico
            </InputLabel>
            <Select
              labelId={`label-select-specifico-${ab.id}`}
              id={`select-specifico-${ab.id}`}
              defaultValue=""
              label="specifico"
              value={ab.specificoSelezionato}
              onChange={(event) => handleChangeSpecifico(event, ab.id)}
            >
              {filterListSpecifico(ab.specifico).map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.id}
                </MenuItem>
              ))}
            </Select>
          </>
        );
      } else {
        return (
          <>
            {ab.nome}
            <br />
            <TextField
              id={`outlined-textfield-${ab.id}`}
              label="specifico"
              variant="outlined"
              value={ab.specificoSelezionato}
              onChange={(event) => handleChangeSpecifico(event, ab.id)}
            />
          </>
        );
      }
    }

    return ab.nome;
  };

  const handleUpdateGradoAbilita = (ability) => {
    let abilityNew = null;
    const abilitySto = abilita.find((ab) => ab.id === ability.id);
    if (abilitySto.grado < gradoMassimoEta && puntiAbilitaEta > 0) {
      abilityNew = { ...abilitySto };
      abilityNew.grado += 1;
      dispatch(updateAbilita(abilityNew));
      let puntiAbilita = puntiAbilitaEta - 1;
      dispatch(setPuntiAbilitaEta(puntiAbilita));
      dispatch(setAbilitaStoricoProfessione());
    }
  };

  const handleChangeSpecifico = (event, id) => {
    let abilityNew = null;
    const abilitySto = abilita.find((ab) => ab.id === id);
    abilityNew = { ...abilitySto };
    abilityNew.specificoSelezionato = event.target.value;
    if (abilityNew.nome === "Uso") {
      const arma = ArmiDb.find((a) => a.id === abilityNew.specificoSelezionato);
      abilityNew.caratteristicaRef = arma.caratteristicaRef;
    }
    dispatch(updateAbilita(abilityNew));
  };

  const handleOnChangeGradoAbilita = (event, ability) => {
    const idBonusAbilitaSel = event.target.value;
    const profSel = profiloAbilitaSelezionato
      ? ProfiloAbilitaDb.find((t) => t.id === profiloAbilitaSelezionato)
      : null;
    if (profSel) {
      const objValore = profSel.arrayBonus.find(
        (t) => t.id === idBonusAbilitaSel
      );
      let abilityNew = null;
      const abilitySto = abilita.find((ab) => ab.id === ability.id);
      abilityNew = { ...abilitySto };
      abilityNew.grado = objValore.valore;
      dispatch(updateAbilita(abilityNew));
      dispatch(removeBonusFromListBonusAbilita({ id: idBonusAbilitaSel }));
    }
  };

  const editGrado = (ability) => {
    if (!listBonusAbilita) {
      return (
        <>
          {ability.grado}&nbsp;
          {getDescIfPregioOrDifetto(ability.id, pregi, difetti)}
          <IconButton
            edge="end"
            onClick={() => handleUpdateGradoAbilita(ability)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </>
      );
    } else if (
      ability.prestampata &&
      "1/2" === ability.grado &&
      !ability.professione &&
      !ability.passato &&
      listBonusAbilita.length > 0
    ) {
      return (
        <>
          {ability.grado}
          &nbsp;
          {getDescIfPregioOrDifetto(ability.id, pregi, difetti)}
          <br />
          <Select
            labelId={`label-select-arraybonus-${ability.id}`}
            id={`select-arrayBonus-${ability.id}`}
            defaultValue=""
            label="specifico"
            value={""}
            onChange={(event) => handleOnChangeGradoAbilita(event, ability)}
          >
            {listBonusAbilita.map((ar) => (
              <MenuItem key={ar.id} value={ar.id}>
                {ar.valore}
              </MenuItem>
            ))}
          </Select>
        </>
      );
    }
    return (
      <>
        {ability.grado}&nbsp;
        {getDescIfPregioOrDifetto(ability.id, pregi, difetti)}
      </>
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">V/S</TableCell>
          <TableCell align="center">Nome</TableCell>
          <TableCell align="center">Grado</TableCell>
          <TableCell align="center">Caratteristica</TableCell>
          <TableCell align="center">Counter Fallimenti</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {abilita.map((ab) => (
          <TableRow key={ab.id}>
            <TableCell align="center" component="th" scope="row">
              {getVS(ab)}
            </TableCell>
            <TableCell align="center">{visualizzaSpecifico(ab)}</TableCell>
            <TableCell align="center">{editGrado(ab)}</TableCell>
            <TableCell align="center">{getCaratteristica(ab)}</TableCell>
            <TableCell align="center">
              {arrayCounterFallimento.map((c) => (
                <Checkbox
                  key={c}
                  disabled
                  checked={c <= ab.counterFallimento}
                />
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AbilitaTable;
