import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ButtonAppBar(props) {
  const { appName } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {appName}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.serpentarium.net"
            startIcon={<WebIcon />}
          >
            Sine Requie
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Eretic0/sine-requie-creapg"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
