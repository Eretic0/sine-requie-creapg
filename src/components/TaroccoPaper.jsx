import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function TaroccoPaper(props) {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { abilita } = useSelector((state) => state.abilita);
  const { tarocco, passato } = props;

  const populateCaratteristica = (tarocco) => {
    if (tarocco.caratteristicaRef) {
      return (
        <>{tarocco.caratteristicaRef.map((car) => getCaratteristica(car))}</>
      );
    }
  };

  const getAbilita = (ab) => {
    const ability = abilita.find((a) => a.id === ab.id);
    if (ability != null) {
      return (
        <Typography key={ab.id} variant="body2" color="text.secondary">
          {ab.valore} {ability.nome}
        </Typography>
      );
    }
  };

  const getCaratteristica = (car) => {
    const caratter = caratteristiche.find((c) => c.id === car.id);
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
            {passato
              ? populateAbilita(tarocco)
              : populateCaratteristica(tarocco)}
          </>
        )}
      </Paper>
    </Box>
  );
}
