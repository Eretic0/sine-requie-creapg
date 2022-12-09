import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AbilitaDb from "../db/Abilita";

const ProfessionePaper = ({ professione }) => {
  const getAbilita = (ab) => {
    const ability = AbilitaDb.find((a) => a.id === ab.id);
    if (ability != null) {
      return (
        <Typography key={ab.id} variant="body2" color="text.secondary">
          {ability.nome}
        </Typography>
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
        {professione && (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {professione.eta
                ? professione.nome - professione.eta
                : professione.nome}
            </Typography>
            {professione.abilitaRef &&
              professione.abilitaRef.map((ab) => getAbilita(ab))}
            {professione.abilitaSceltaRef && (
              <Typography gutterBottom variant="h6" component="div">
                Abilità a scelta
              </Typography>
            )}
            {professione.abilitaSceltaRef &&
              professione.abilitaSceltaRef.map((abs) => getAbilita(abs))}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ProfessionePaper;
