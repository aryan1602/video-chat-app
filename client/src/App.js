import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notif from "./components/Notif";
import makeStyles from "./styles";

const App = () => {
  const classes = makeStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Connect
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notif />
      </Options>
    </div>
  );
};

export default App;
