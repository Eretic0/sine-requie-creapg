import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AbilitaDb from "../db/Abilita";
import List from "@mui/material/List";
import { generateRandomId } from "../utils/random";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";

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

  const displayUsoArma = (numeroUsoArma) => {
    let randomIdList = new Array(numeroUsoArma);
    let numero = 0;
    const numeroTotale = numeroUsoArma;
    while (numero < numeroTotale) {
      randomIdList[numero] = generateRandomId();
      numero++;
    }

    return (
      <>
        <Typography gutterBottom variant="h6" component="div">
          Uso -arma- da scegliere
        </Typography>
        <List>
          {randomIdList.map((ids) => (
            <ListItem key={ids}>
              <ListItemText primary={`Uso -arma- ${ids}`} />
              <TextField label="Specifico" variant="outlined" />
            </ListItem>
          ))}
        </List>
      </>
    );
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
                Abilit?? a scelta
              </Typography>
            )}
            {professione.abilitaSceltaRef &&
              professione.abilitaSceltaRef.map((abs) => getAbilita(abs))}
            {professione.numeroUsoArma &&
              displayUsoArma(professione.numeroUsoArma)}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ProfessionePaper;
