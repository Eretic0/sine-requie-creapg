import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
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
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, handleChangeButton, handleRestart } = props;

  return (
    <>
      {value === index && (
        <>
          {children}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} justifyContent="space-between">
              {value !== 0 && (
                <Grid item xs="auto">
                  <Fab
                    color="primary"
                    variant="extended"
                    onClick={() => handleChangeButton(false)}
                  >
                    <NavigateBeforeIcon sx={{ mr: 1 }} />
                    Precedente
                  </Fab>
                </Grid>
              )}
              <Grid item xs="auto">
                <Fab
                  color="primary"
                  variant="extended"
                  onClick={() => handleRestart()}
                >
                  <RestartAltIcon sx={{ mr: 1 }} />
                  Crea un nuovo PG
                </Fab>
              </Grid>
              {value !== 5 && (
                <Grid item xs="auto">
                  <Fab
                    color="primary"
                    variant="extended"
                    onClick={() => handleChangeButton(true)}
                  >
                    <NavigateNextIcon sx={{ mr: 1 }} />
                    Prossimo
                  </Fab>
                </Grid>
              )}
              {value === 5 && (
                <Grid item xs="auto">
                  <StampaSchedaButton />
                </Grid>
              )}
            </Grid>
          </Box>
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

  const handleRestart = () => {
    window.location.reload(true);
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
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        handleChangeButton={handleChangeButton}
        handleRestart={handleRestart}
      >
        <GeneralitaTabContainer />
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        handleChangeButton={handleChangeButton}
        handleRestart={handleRestart}
      >
        <TarocchiTabContainer />
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        handleChangeButton={handleChangeButton}
        handleRestart={handleRestart}
      >
        <CaratteristicheTabContainer />
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
        handleChangeButton={handleChangeButton}
        handleRestart={handleRestart}
      >
        <PregiDifettiTabContainer />
      </TabPanel>
      <TabPanel
        value={value}
        index={4}
        handleChangeButton={handleChangeButton}
        handleRestart={handleRestart}
      >
        <ProfessioneTabContainer />
      </TabPanel>
      <TabPanel
        value={value}
        index={5}
        handleChangeButton={handleChangeButton}
        handleRestart={handleRestart}
      >
        <AbilitaTabContainer />
      </TabPanel>
    </>
  );
}

export default Home;
