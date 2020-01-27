import React from "react";
import AddImg from "../images/add.png";
import "../styles/AddButton.scss";
import { Link } from "react-router-dom";

const AddButton = () => (
  <Link to="/exercise/new">
    <img src={AddImg} alt="add" />
  </Link>
);

export default AddButton;
