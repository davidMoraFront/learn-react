import React from "react";
import NotFoundImg from "../images/404.png";
import "../styles/Error.scss";

const NotFound = () => (
  <div className="error">
    <h1>Error: 404 Page Not Found</h1>
    <img src={NotFoundImg} alt="404 NotFound" />
  </div>
);

export default NotFound;
