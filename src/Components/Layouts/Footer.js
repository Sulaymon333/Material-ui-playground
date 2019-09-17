import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

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