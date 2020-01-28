import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import "../styles/ExerciseNew.scss";

class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="ExerciseNew-container">
        <Card {...this.state.form} />
        <ExerciseForm onChange={this.handleChange} form={this.state.form} />
      </div>
    );
  }
}

export default ExerciseNew;
