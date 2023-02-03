import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import AbilitaDb from "../db/Abilita";

import AbilitaTable from "./AbilitaTable";

const ProfessionePaper = ({
  professione,
  handleChangeAbilitaScelta,
  puntiAbilita,
  gradoMassimo,
  abilita,
}) => {
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

  const getAbilitaScelta = (listAbilitaScelta) => {
    return (
      <FormControl fullWidth>
        <FormLabel id="abilitascelta-radio-buttons-group-label">
          Abilità a scelta
        </FormLabel>
        <RadioGroup
          name="abilitascelta-radio-buttons-group"
          value={
            abilita.find((t) => t.scelta === true)
              ? abilita.find((t) => t.scelta === true).id
              : ""
          }
          onChange={handleChangeAbilitaScelta}
        >
          {listAbilitaScelta.map((abi) => (
            <FormControlLabel
              key={abi.id}
              value={abi.id}
              control={<Radio />}
              label={AbilitaDb.find((a) => a.id === abi.id).nome}
            />
          ))}
        </RadioGroup>
      </FormControl>
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
              {professione.eta !== "N"
                ? `${professione.nome} - ${professione.eta}`
                : professione.nome}
            </Typography>
            {professione.abilitaRef &&
              professione.abilitaRef.map((ab) => getAbilita(ab))}
            <br />
            {professione.abilitaSceltaRef && (
              <Typography gutterBottom variant="h6" component="div">
                Seleziona un'abilità a scelta
              </Typography>
            )}
            {professione.abilitaSceltaRef &&
              getAbilitaScelta(professione.abilitaSceltaRef)}
            <br />
            <Typography gutterBottom variant="h6" component="div">
              {`Punti da distribuire per abilità di Professione: ${puntiAbilita} e Grado massimo per Abilità: ${gradoMassimo}`}
            </Typography>
            <AbilitaTable abilita={abilita.filter((ab) => ab.professione)} />
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ProfessionePaper;
