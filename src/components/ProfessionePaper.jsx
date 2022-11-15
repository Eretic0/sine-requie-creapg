import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ProfessionePaper = ({ professione }) => {
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
              {professione.descrizione} - {professione.eta}
            </Typography>
            {professione.abilitaRef &&
              professione.abilitaRef.map((ab) => (
                <Typography key={ab} variant="body2" color="text.secondary">
                  {ab}
                </Typography>
              ))}

            {professione.abilitaSceltaListRef &&
              professione.abilitaSceltaListRef.map((abs) => (
                <Typography key={abs} variant="body2" color="text.secondary">
                  {abs}
                </Typography>
              ))}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ProfessionePaper;
