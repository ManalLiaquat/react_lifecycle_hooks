import React from "react";

// material ui
import NavigateNext from "@material-ui/icons/NavigateNext";
import { Button, Typography } from "@material-ui/core";
// material ui

export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "nervous",
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false
    };
    // this.qualified = this.qualified.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    // const { furtherSteps, sendApplaudStatus } = props
    // const oldSteps = state.danceSteps;
    // const newSteps = props.furtherSteps;
    // const newArr = oldSteps.concat(newSteps)
    // return { danceSteps: newArr, emotion: sendApplaudStatus ? 'Happy' : 'nervous' }
    let newDanceSteps = [...state.danceSteps, ...props.furtherSteps];
    return {
      danceSteps:
        state.danceSteps.length < 5 ? newDanceSteps : state.danceSteps,
      emotion: props.sendApplaudStatus ? "Happy" : "nervous",
      startedPerforming:
        newDanceSteps.length >= 5
          ? props.sendStars !== 5
            ? true
            : false
          : false
    };
  }

  componentDidMount() {
    const { danceSteps } = this.state;
    danceSteps.push("step1");
    danceSteps.push("step2");
    this.setState({ danceSteps });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.sendStars === 4) {
  //     this.qualified()
  //     prevState.startedPerforming = false
  //     // console.log(prevProps.sendStars);
  //     // console.log(prevState.startedPerforming);
  //   }
  // }

  // qualified() {
  //   console.log('qualified***')
  //   this.setState({ startedPerforming: false })
  // }

  componentWillUnmount() {
    this.props.renderJudgesComp(false);
  }

  render() {
    const { dressColor, sendStars } = this.props;
    const {
      danceSteps,
      emotion,
      startedPerforming,
      currentStepIndex
    } = this.state;
    console.log("===>", sendStars, startedPerforming);
    // currentStepIndex, danceSteps[currentStepIndex], "***");
    return (
      <div>
        <center>
          <div style={{ backgroundColor: dressColor, width: 50, height: 50 }} />
        </center>
        <Typography variant="headline">Dress Color: {dressColor}</Typography>
        <Typography variant="title">
          Performing: {startedPerforming ? "yes" : "no"}
        </Typography>
        <Typography variant="title">Emotion: {emotion}</Typography>
        {startedPerforming && (
          <Typography variant="display2">
            Current Step: {danceSteps[currentStepIndex]}
            <br />
            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                this.setState({ currentStepIndex: currentStepIndex + 1 })
              }
            >
              Perform Next Step <NavigateNext />
            </Button>
          </Typography>
        )}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: "red", applaud: false, furtherSteps: [] };
