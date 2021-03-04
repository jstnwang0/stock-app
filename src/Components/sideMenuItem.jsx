import React from "react";

import { Menu } from "semantic-ui-react";

import { Typography, Grid } from "@material-ui/core";

const SideMenuObj = (props) => {
  return (
    <>
      <Menu.Item onClick={() => {}}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={2}>
            {props.icon}
          </Grid>
          <Grid item>
            <Typography variant="h6" children={props.name}></Typography>
          </Grid>
        </Grid>
      </Menu.Item>
    </>
  );
};

export default SideMenuObj;
