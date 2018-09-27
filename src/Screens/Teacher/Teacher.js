import React from 'react';

// material ui 
import LiveHelp from "@material-ui/icons/LiveHelp";
import { Button } from "@material-ui/core";
// material ui 

export default class Teacher extends React.Component {
  constructor(props) {
    super(props)
    this.sendDataToKid = this.sendDataToKid.bind(this)
  }
  sendDataToKid() {
    const furtherSteps = ["step3", "step4", "step5"]
    //Send this data to Kid.js
    this.props.myCallBack(furtherSteps)
  }

  render() {
    return (
      <Button variant="contained" color="secondary" onClick={this.sendDataToKid}>Get Help From Teacher <LiveHelp /></Button>
    );
  }
}
