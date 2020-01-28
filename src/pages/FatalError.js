import React from "react";
import FatalErrorImg from "../images/500.png";
import "../styles/Error.scss";

const FatalError = () => (
  <div className="error">
    <h1>Error: 500 Unexpected Error</h1>
    <img src={FatalErrorImg} alt="500 Unexpected Error" />
  </div>
);

export default FatalError;
