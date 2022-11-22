import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function TaroccoPaper(props) {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const { tarocco } = props;

  const populateAbilita = (car) => {
    if (caratteristiche.length > 0) {
      const caratter = caratteristiche.find((c) => c.id === car.id);
      if (caratter != null) {
        return (
          <Typography key={car.id} variant="body2" color="text.secondary">
            {car.valore} {caratter.nome}
          </Typography>
        );
      }
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
              {tarocco.descDominante}
            </Typography>
            {tarocco.caratteristicaRef &&
              tarocco.caratteristicaRef.map((car) => populateAbilita(car))}
          </>
        )}
      </Paper>
    </Box>
  );
}
