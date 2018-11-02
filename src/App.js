import React, { Component } from "react";
import "./App.css";
import Kid from "./Screens/Kid/Kid";
import Teacher from "./Screens/Teacher/Teacher";
import Judge from "./Screens/Judges/Judges";

// material ui
import SimpleAppBar from "./MaterialCompoents/AppBar";
import { Button, Typography, Paper, Grid } from "@material-ui/core";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Face from "@material-ui/icons/Face";
import Group from "@material-ui/icons/Group";
// material ui

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0,
      nextSteps: [],
      applaud: "",
      stars: 0,
      available: false,
      renderJudges: false
    };
    this.furtherSteps = this.furtherSteps.bind(this);
    this.getApplaudStatus = this.getApplaudStatus.bind(this);
    this.recieveStars = this.recieveStars.bind(this);
    this.renderJudgesComp = this.renderJudgesComp.bind(this);
  }

  furtherSteps(nextSteps) {
    this.setState({ nextSteps });
  }

  getApplaudStatus(applaud) {
    this.setState({ applaud });
  }

  recieveStars(stars) {
    this.setState({ stars });
  }

  renderJudgesComp(param) {
    this.setState({ renderJudges: param });
    // console.log(param);
  }

  // static getDerivedStateFromProps() {
  //   // this.setState()
  //   return { volume: 5, available: true, renderJudges: true }
  // }
  componentWillMount() {
    this.setState({ volume: 5, available: true, renderJudges: true });
  }

  render() {
    const { nextSteps, applaud, stars, available, renderJudges } = this.state;
    const paperStyle = { padding: "20px", margin: "20px" };
    return (
      <div className="App">
        <SimpleAppBar />
        <Grid
          container
          spacing={24}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Paper style={paperStyle}>
              <Typography variant="headline">
                KID <Face />
              </Typography>
              <hr />
              {available ? (
                <div>
                  <Kid
                    dressColor="green"
                    furtherSteps={nextSteps}
                    sendApplaudStatus={applaud}
                    sendStars={stars}
                    renderJudgesComp={this.renderJudgesComp}
                  />
                  <hr />
                  <Teacher myCallBack={this.furtherSteps} />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.setState({ available: false });
                    }}
                  >
                    Leave Kid <ExitToApp />
                  </Button>
                </div>
              ) : (
                <Typography variant="headline">Kid is not available</Typography>
              )}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={paperStyle}>
              <Typography variant="headline">
                Judges <Group />
              </Typography>
              <hr />
              {renderJudges ? (
                <Judge
                  getApplaudStatus={this.getApplaudStatus}
                  recieveStars={this.recieveStars}
                  available={available}
                />
              ) : (
                <Typography variant="headline">
                  Judges left the Auditorium
                </Typography>
              )}
            </Paper>
          </Grid>
          {/* <Typography variant="display1">React Life-Cycle Hooks</Typography> */}
        </Grid>
      </div>
    );
  }
}

export default App;
