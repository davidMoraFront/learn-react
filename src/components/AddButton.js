import React from "react";
import AddImg from "../images/add.png";
import "../styles/AddButton.scss";
import { Link } from "react-router-dom";

function AddButton(props) {
  return (
    <Link to="/exercise/new">
      <img src={AddImg} alt="add" />
    </Link>
  );
}

export default AddButton;
