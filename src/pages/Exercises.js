import React from "react";
import Welcome from "../components/Welcome";
import ExerciseList from "../components/ExerciseList";

const Exercises = ({ data }) => (
  <React.Fragment>
    <Welcome username="David" />
    <ExerciseList exercises={data} />
  </React.Fragment>
);

export default Exercises;
