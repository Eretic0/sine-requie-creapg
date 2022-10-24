import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import Chip from "@mui/material/Chip";
import ListSubheader from "@mui/material/ListSubheader";

export default function MinoriPaper(props) {
  const { minoriEstratti } = props;

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
      {minoriEstratti.map((min) => (
        <ListItemCustom key={min.id}>
          <Chip
            color="info"
            icon={<CheckIcon />}
            label={`${min.descNumeroCarta} ${min.descSemeCarta}`}
          />
        </ListItemCustom>
      ))}
    </Paper>
  );
}
