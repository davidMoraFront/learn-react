import React from "react";
import "../styles/Welcome.scss";

const Welcome = ({ username }) => (
  <div className="welcome">
    <div>
      <h1>Hello {username}</h1>
      <p>Let's workout to get someone gains!</p>
    </div>
  </div>
);

export default Welcome;
