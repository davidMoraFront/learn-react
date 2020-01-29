import React from "react";
import CirlesImg from "../images/circles.png";
import emptyImg from "../images/empty.png";
import "../styles/Card.scss";

class Card extends React.Component {
  render() {
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <React.Fragment>
        <div
          className="Fitness-Card"
          style={{
            background: `url(${CirlesImg}), no-repeat, linear-gradient(to right, ${leftColor ||
              "#56CCF2"}, ${rightColor || "#2F80ED"}`
          }}
        >
          <div>
            <div className="Fitness-Card-Image">
              <img src={img || emptyImg} alt="img" />
            </div>
            <div className="Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
