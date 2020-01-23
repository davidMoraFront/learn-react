import React from "react";
import "../styles/Welcome.scss";

function Welcome(props) {
  return (
    <div className="welcome">
      <div>
        <h1>Hello {props.username}</h1>
        <p>Let's workout to get someone gains!</p>
      </div>
    </div>
  );
}

export default Welcome;
