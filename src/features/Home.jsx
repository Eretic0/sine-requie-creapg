import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import Header from "../components/Header";
import AbilitaTabContainer from "./ViewTabs/AbilitaTabContainer";
import CaratteristicheTabContainer from "./ViewTabs/CaratteristicheTabContainer";
import GeneralitaTabContainer from "./ViewTabs/GeneralitaTabContainer";
import PregiDifettiTabContainer from "./ViewTabs/PregiDifettiTabContainer";
import ProfessioneTabContainer from "./ViewTabs/ProfessioneTabContainer";
import StampaSchedaTabContainer from "./ViewTabs/StampaSchedaTabContainer";
import TarocchiTabContainer from "./ViewTabs/TarocchiTabContainer";
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
          {value !== 6 && (
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
        <Tab label="Tarocchi" />
        <Tab label="Caratteristiche" />
        <Tab label="Pregi e Difetti" />
        <Tab label="Professione" />
        <Tab label="Abilità" />
        <Tab label="Stampa Scheda" />
      </Tabs>
      <TabPanel value={value} index={0} handleChangeButton={handleChangeButton}>
        <GeneralitaTabContainer />
      </TabPanel>
      <TabPanel value={value} index={1} handleChangeButton={handleChangeButton}>
        <TarocchiTabContainer />
      </TabPanel>
      <TabPanel value={value} index={2} handleChangeButton={handleChangeButton}>
        <CaratteristicheTabContainer />
      </TabPanel>
      <TabPanel value={value} index={3} handleChangeButton={handleChangeButton}>
        <PregiDifettiTabContainer />
      </TabPanel>
      <TabPanel value={value} index={4} handleChangeButton={handleChangeButton}>
        <ProfessioneTabContainer />
      </TabPanel>
      <TabPanel value={value} index={5} handleChangeButton={handleChangeButton}>
        <AbilitaTabContainer />
      </TabPanel>
      <TabPanel value={value} index={6} handleChangeButton={handleChangeButton}>
        <StampaSchedaTabContainer />
      </TabPanel>
    </>
  );
}

export default Home;
