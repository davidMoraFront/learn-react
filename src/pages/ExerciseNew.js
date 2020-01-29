import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

const ExerciseNew = ({ form, onChange, onSubmit }) => (
  <div className="ExerciseNew-container">
    <Card {...form} />
    <ExerciseForm onChange={onChange} onSubmit={onSubmit} form={form} />
  </div>
);

export default ExerciseNew;
