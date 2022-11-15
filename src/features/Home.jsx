import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import Header from "../components/Header";
import Caratteristiche from "./tabs/Caratteristiche";
import Generalita from "./tabs/Generalita";
import TaroccoDominante from "./tabs/TaroccoDominante";
import Eta from "./tabs/Eta";
import PregiDifetti from "./tabs/PregiDifetti";
import TaroccoPassato from "./tabs/TaroccoPassato";
import Professione from "./tabs/Professione";
import Abilita from "./tabs/Abilita";

function TabPanel(props) {
  const { children, value, index } = props;

  return <>{value === index && children}</>;
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

  return (
    <>
      <Header appName="Sine Requie CreaPG" />
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Generalità" />
        <Tab label="Tarocco Dominante" />
        <Tab label="Caratteristiche" />
        <Tab label="Età" />
        <Tab label="Pregi e Difetti" />
        <Tab label="Tarocco del Passato" />
        <Tab label="Professione" />
        <Tab label="Abilità" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Generalita />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TaroccoDominante />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Caratteristiche />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Eta />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PregiDifetti />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TaroccoPassato />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Professione />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Abilita />
      </TabPanel>
    </>
  );
}

export default Home;
