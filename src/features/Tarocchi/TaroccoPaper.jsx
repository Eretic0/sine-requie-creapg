import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import AbilitaDb from "../../db/Abilita";
import CaratteristicheDb from "../../db/Caratteristiche";

export default function TaroccoPaper(props) {
  const {
    tarocco,
    passato,
    handleSelectAbilitaTaroccoPassato,
    numeroAbilitaTaroccoPassato,
    abilitaScelteTaroccoPassato,
  } = props;

  const populateCaratteristica = (tarocco) => {
    if (tarocco.caratteristicaRef) {
      return (
        <>{tarocco.caratteristicaRef.map((car) => getCaratteristica(car))}</>
      );
    }
  };

  const getAbilita = (ab) => {
    const ability = AbilitaDb.find((a) => a.id === ab.id);
    if (ability != null) {
      return (
        <Typography key={ab.id} variant="body2" color="text.secondary">
          {ability.nome} +0
        </Typography>
      );
    }
  };

  const getCaratteristica = (car) => {
    const caratter = CaratteristicheDb.find((c) => c.id === car.id);
    if (caratter != null) {
      return (
        <Typography key={car.id} variant="body2" color="text.secondary">
          {car.valore} {caratter.nome}
        </Typography>
      );
    }
  };

  const populateAbilita = (tarocco) => {
    if (tarocco.abilitaRef) {
      return <>{tarocco.abilitaRef.map((ab) => getAbilita(ab))}</>;
    }
  };

  const populateSelectAbilita = () => {
    if (tarocco.abilitaRef) {
      return (
        <FormControl fullWidth>
          <InputLabel id="abilita-select-label">Abilita</InputLabel>
          <Select
            labelId="abilita-select-label"
            id="abilita-select"
            value={abilitaScelteTaroccoPassato}
            label="Abilita"
            onChange={handleSelectAbilitaTaroccoPassato}
          >
            {tarocco.abilitaRef.map((ab) => (
              <MenuItem key={ab.id} value={ab.id}>
                {getAbilita(ab)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={0}>
        {tarocco && (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {tarocco.numero} - {tarocco.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {passato ? tarocco.descPassato : tarocco.descDominante}
            </Typography>
            <br />
            {!passato && populateCaratteristica(tarocco)}
            {passato &&
              numeroAbilitaTaroccoPassato === 2 &&
              populateAbilita(tarocco)}
            {passato &&
              numeroAbilitaTaroccoPassato < 2 &&
              populateSelectAbilita(tarocco)}
          </>
        )}
      </Paper>
    </Box>
  );
}
