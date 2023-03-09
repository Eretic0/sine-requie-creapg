import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Fab from "@mui/material/Fab";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import Header from "../components/Header";
import StampaSchedaButton from "./StampaScheda/StampaSchedaButton";
import AbilitaTabContainer from "./ViewTabs/AbilitaTabContainer";
import CaratteristicheTabContainer from "./ViewTabs/CaratteristicheTabContainer";
import GeneralitaTabContainer from "./ViewTabs/GeneralitaTabContainer";
import PregiDifettiTabContainer from "./ViewTabs/PregiDifettiTabContainer";
import ProfessioneTabContainer from "./ViewTabs/ProfessioneTabContainer";
import TarocchiTabContainer from "./ViewTabs/TarocchiTabContainer";

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
              sx={{ position: "absolute", left: "8px" }}
              onClick={() => handleChangeButton(false)}
            >
              <NavigateBeforeIcon sx={{ mr: 1 }} />
              Precedente
            </Fab>
          )}
          {value !== 5 && (
            <Fab
              color="primary"
              variant="extended"
              sx={{ position: "absolute", right: "8px" }}
              onClick={() => handleChangeButton(true)}
            >
              <NavigateNextIcon sx={{ mr: 1 }} />
              Prossimo
            </Fab>
          )}
          {value === 5 && <StampaSchedaButton />}
        </>
      )}
    </>
  );
}

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
        {/* <Tab label="Stampa Scheda" /> */}
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
    </>
  );
}

export default Home;
