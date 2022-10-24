import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#000000",
      contrastText: "rgba(255,255,255,0.87)",
    },
    divider: "#ffffff",
  },
});
