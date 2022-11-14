import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function TaroccoPaper(props) {
  const { tarocco } = props;

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
            <Typography variant="body2" color="text.secondary">
              {tarocco.caratteristicaDominante}
            </Typography>
          </>
        )}
      </Paper>
    </Box>
  );
}
