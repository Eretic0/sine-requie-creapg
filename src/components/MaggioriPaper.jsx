import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import Chip from "@mui/material/Chip";
import ListSubheader from "@mui/material/ListSubheader";

export default function MaggioriPaper(props) {
  const { maggioriEstratti } = props;

  const ListItemCustom = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      <ListSubheader component="div">Ho estratto: </ListSubheader>
      {maggioriEstratti.map((magg) => (
        <ListItemCustom key={magg.id}>
          <Chip color="info" icon={<CheckIcon />} label={`${magg.nome}`} />
        </ListItemCustom>
      ))}
    </Paper>
  );
}
