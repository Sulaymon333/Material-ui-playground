import React from "react";
import { AppBar, Toolbar, Typography } from "material-ui";

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Restaurants
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;