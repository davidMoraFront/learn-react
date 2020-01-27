import React from "react";
import Card from "../components/Card";
import AddButton from "../components/AddButton";

function ExerciseList(props) {
  return (
    <div>
      {props.exercises.map((exercise, index) => {
        return (
          <Card
            title={exercise.title}
            description={exercise.description}
            img={exercise.img}
            leftColor={exercise.leftColor}
            rightColor={exercise.rightColor}
            key={index}
          />
        );
      })}
      <AddButton />
    </div>
  );
}

export default ExerciseList;
