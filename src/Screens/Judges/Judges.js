import React from "react";

// material ui 
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import StarRate from "@material-ui/icons/StarRate";
import { Button, Typography } from "@material-ui/core";
// material ui 

export default class Judge extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stars: 0, available: props.available }
    this.applaud = this.applaud.bind(this)
    this.provideStars = this.provideStars.bind(this)
  }

  applaud() {
    this.props.getApplaudStatus(true)
  }

  provideStars() {
    const { stars } = this.state;
    this.setState({
      stars: stars + 1
    })
    this.props.recieveStars(stars + 1)
  }

  shouldComponentUpdate() {
    const { stars } = this.state;

    return stars < 5 ? true : false
  }

  render() {
    const { stars, available } = this.state;
    // console.log(stars, "render");

    return (
      <div>
        <br />
        <Typography variant="display1">Kid is available: {available ? "yes" : 'no'}</Typography>
        <br />
        <Typography variant="title">Stars gained: {stars}</Typography>
        <br />
        <Button variant="outlined" color="secondary" type="button" onClick={this.applaud}>Appreciate performance <FavoriteBorder /></Button>
        <Button variant="outlined" color="primary" type="button" onClick={this.provideStars}>Provide stars <StarRate /></Button>
      </div>
    );
  }
}
