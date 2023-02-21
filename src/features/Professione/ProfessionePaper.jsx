import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import AbilitaDb from "../../db/Abilita";
import AbilitaTable from "../Abilita/AbilitaTable";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";

const ProfessionePaper = ({
  professione,
  professioneAbilitaScelte,
  handleChangeAbilitaScelta,
  handleChangeAbilitaSceltaLibera,
  puntiAbilita,
  gradoMassimo,
  abilita,
  professioneAbilitaScelteLibere,
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

  const isAbilitaSceltaLiberaPresent = (idAbilita) => {
    let test = false;
    const ability = professioneAbilitaScelteLibere.find((t) => t === idAbilita);
    if (ability) {
      test = true;
    }
    return test;
  };

  const isAbilitaSceltaPresent = (idList) => {
    let test = false;
    const select = professioneAbilitaScelte.find((t) => t.idList === idList);
    if (select) {
      test = true;
    }
    return test;
  };

  const isMaxAbilitaSceltaLibera = () =>
    professioneAbilitaScelteLibere.length === professione.numeroAbilitaLibera;

  const getAbilitaSceltaLibera = (listAbilitaSceltaLibera) => {
    return (
      <FormControl fullWidth>
        <FormLabel id="abilitascelta-radio-buttons-group-label">
          Abilità a scelta
        </FormLabel>
        <Select
          labelId="abilitasceltalibera-select-label"
          id="select-abilitasceltalibera"
          label="Abilità a scelta"
          defaultValue=""
          multiple
          renderValue={(selected) =>
            selected
              .map((t) => AbilitaDb.find((a) => a.id === t).nome)
              .join(", ")
          }
          input={<OutlinedInput label="Abilità a scelta" />}
          value={professioneAbilitaScelteLibere}
          onChange={handleChangeAbilitaSceltaLibera}
        >
          {listAbilitaSceltaLibera.map((ar) => (
            <MenuItem
              key={ar.id}
              value={ar.id}
              disabled={
                isAbilitaSceltaLiberaPresent(ar.id) ||
                isMaxAbilitaSceltaLibera()
              }
            >
              <Checkbox checked={isAbilitaSceltaLiberaPresent(ar.id)} />
              <ListItemText
                primary={AbilitaDb.find((a) => a.id === ar.id).nome}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const getAbilitaScelta = (listAbilitaScelta) => {
    return (
      <>
        {listAbilitaScelta.map((abi) => (
          <FormControl fullWidth key={abi.idList}>
            <FormLabel id="abilitascelta-select-label">
              Abilità da selezionare
            </FormLabel>
            <Select
              labelId="abilitascelta-select-label"
              id="select-abilitascelta"
              label="Abilità da selezionare"
              defaultValue=""
              value={
                professioneAbilitaScelte.find((t) => t.idList === abi.idList)
                  ? professioneAbilitaScelte.find(
                      (t) => t.idList === abi.idList
                    ).idAbilita
                  : ""
              }
              onChange={(event) => handleChangeAbilitaScelta(abi.idList, event)}
            >
              {abi.listAbilita.map((ar) => (
                <MenuItem
                  key={ar.id}
                  value={ar.id}
                  disabled={isAbilitaSceltaPresent(abi.idList)}
                >
                  {AbilitaDb.find((a) => a.id === ar.id).nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </>
    );
  };

  const AbilitaSceltaComponent = () => {
    return (
      <>
        <Typography gutterBottom variant="h6" component="div">
          Seleziona un'abilità fra le opzioni
        </Typography>
        {getAbilitaScelta(professione.abilitaSceltaRef)}
      </>
    );
  };

  const AbilitaSceltaLiberaComponent = () => {
    return (
      <>
        <Typography gutterBottom variant="h6" component="div">
          {`Abilità a scelta: ${professione.numeroAbilitaLibera} da selezionare`}
        </Typography>
        {getAbilitaSceltaLibera(professione.abilitaLiberaListRef)}
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
              {professione.eta !== "N"
                ? `${professione.nome} - ${professione.eta}`
                : professione.nome}
            </Typography>
            {professione.abilitaRef &&
              professione.abilitaRef.map((ab) => getAbilita(ab))}
            <br />
            <Grid container spacing={2}>
              <Grid item xs>
                {professione.abilitaSceltaRef && AbilitaSceltaComponent()}
              </Grid>
              <Grid item xs>
                {professione.abilitaLiberaListRef &&
                  AbilitaSceltaLiberaComponent()}
              </Grid>
            </Grid>
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
