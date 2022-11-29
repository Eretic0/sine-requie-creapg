import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import * as React from "react";

const Footer = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Serpentarium Sito ufficiale"
          icon={<WebIcon />}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.serpentarium.net/"
        />
        <BottomNavigationAction
          label="sine-requie-creapg Github"
          icon={<GitHubIcon />}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Eretic0/sine-requie-creapg"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
