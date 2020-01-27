import React from "react";
import Card from "../components/Card";
import AddButton from "../components/AddButton";

const ExerciseList = ({ exercises }) => (
  <div>
    {exercises.map(exercise => {
      return (
        <Card
          title={exercise.title}
          description={exercise.description}
          img={exercise.img}
          leftColor={exercise.leftColor}
          rightColor={exercise.rightColor}
          key={exercise.id}
        />
      );
    })}
    <AddButton />
  </div>
);

export default ExerciseList;
