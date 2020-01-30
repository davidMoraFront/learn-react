import React from "react";
import Card from "../components/Card";
import AddButton from "../components/AddButton";

const ExerciseList = ({ exercises }) => (
  <React.Fragment>
    {exercises.map(exercise => {
      return <Card {...exercise} key={exercise.id} />;
    })}
    <AddButton />
  </React.Fragment>
);

export default ExerciseList;
