import React from "react";
import ExerciseImg from "../images/exercise.png";
// import CirlesImg from "../images/circles.png";
import GafasSolImg from "../images/gafasSol.png";
import "../styles/Card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: GafasSolImg
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        image: ExerciseImg
      });
    }, 5000);
  }

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
              <img src={this.state.image} alt="img" />
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
