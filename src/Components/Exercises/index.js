import React from "react";
import { Grid } from "material-ui";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};
export default props => (
  <Grid container>
    <Grid item sm>
      <LeftColumn style={styles} />
    </Grid>
    <Grid item sm>
      <RightColumn style={styles} />
    </Grid>
  </Grid>
);
