import React from "react";
import Welcome from "../components/Welcome";
import Card from "../components/Card";
import CirclesImg from "../images/circles.png";

class Exercises extends React.Component {
  render() {
    return (
      <div>
        <Welcome username="David" />
        <Card
          title="Technique Guides"
          description="Learn amazing street workout and calisthenics"
          img={CirclesImg}
          leftColor="#a74cf2"
          rightColor="#617bfb"
        />
      </div>
    );
  }
}

export default Exercises;
