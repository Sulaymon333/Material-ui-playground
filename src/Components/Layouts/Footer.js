import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

const Footer = () => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" centered textColor="primary">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
};

export default Footer;
