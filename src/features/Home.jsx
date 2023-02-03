import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import Header from "../components/Header";
import Abilita from "./tabs/Abilita";
import Caratteristiche from "./tabs/Caratteristiche";
import Eta from "./tabs/Eta";
import Generalita from "./tabs/Generalita";
import PregiDifetti from "./tabs/PregiDifetti";
import Professione from "./tabs/Professione";
import StampaScheda from "./tabs/StampaScheda";
import TaroccoDominante from "./tabs/TaroccoDominante";
import TaroccoPassato from "./tabs/TaroccoPassato";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Fab from "@mui/material/Fab";

function TabPanel(props) {
  const { children, value, index, handleChangeButton } = props;

  return (
    <>
      {value === index && (
        <>
          {children}
          {value !== 0 && (
            <Fab
              color="primary"
              variant="extended"
              sx={{ position: "absolute", left: 16 }}
              onClick={() => handleChangeButton(false)}
            >
              <NavigateBeforeIcon sx={{ mr: 1 }} />
              Precedente
            </Fab>
          )}
          {value !== 8 && (
            <Fab
              color="primary"
              variant="extended"
              sx={{ position: "absolute", right: 16 }}
              onClick={() => handleChangeButton(true)}
            >
              <NavigateNextIcon sx={{ mr: 1 }} />
              Prossimo
            </Fab>
          )}
        </>
      )}
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeButton = (next) => {
    const valSto = value;
    let newVal = valSto;
    next ? setValue((newVal += 1)) : setValue((newVal -= 1));
  };

  return (
    <>
      <Header appName="Sine Requie CreaPG" />
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab label="Generalità" />
        <Tab label="Tarocco Dominante" />
        <Tab label="Caratteristiche" />
        <Tab label="Età" />
        <Tab label="Pregi e Difetti" />
        <Tab label="Tarocco del Passato" />
        <Tab label="Professione" />
        <Tab label="Abilità" />
        <Tab label="Stampa Scheda" />
      </Tabs>
      <TabPanel value={value} index={0} handleChangeButton={handleChangeButton}>
        <Generalita />
      </TabPanel>
      <TabPanel value={value} index={1} handleChangeButton={handleChangeButton}>
        <TaroccoDominante />
      </TabPanel>
      <TabPanel value={value} index={2} handleChangeButton={handleChangeButton}>
        <Caratteristiche />
      </TabPanel>
      <TabPanel value={value} index={3} handleChangeButton={handleChangeButton}>
        <Eta />
      </TabPanel>
      <TabPanel value={value} index={4} handleChangeButton={handleChangeButton}>
        <PregiDifetti />
      </TabPanel>
      <TabPanel value={value} index={5} handleChangeButton={handleChangeButton}>
        <TaroccoPassato />
      </TabPanel>
      <TabPanel value={value} index={6} handleChangeButton={handleChangeButton}>
        <Professione />
      </TabPanel>
      <TabPanel value={value} index={7} handleChangeButton={handleChangeButton}>
        <Abilita />
      </TabPanel>
      <TabPanel value={value} index={8} handleChangeButton={handleChangeButton}>
        <StampaScheda />
      </TabPanel>
    </>
  );
}

export default Home;
