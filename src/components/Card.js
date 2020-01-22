import React from "react";
import ExerciseImg from "../images/exercise.png";
// import CirlesImg from "../images/circles.png";
import "../styles/Card.scss";

class Card extends React.Component {
  render() {
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <div className="card">
        <div
          className="Fitness-Card"
          style={{
            background: `url(${img}), no-repeat, linear-gradient(to right, ${leftColor}, ${rightColor}`
          }}
        >
          <div>
            <div className="Fitness-Card-Image">
              <img src={ExerciseImg} alt="img" />
            </div>
            <div className="Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
