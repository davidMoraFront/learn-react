import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import "../styles/ExerciseNew.scss";
import FatalError from "./FatalError";

class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: ""
    },
    loading: false,
    error: null
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state.form)
      };
      let res = await fetch("http://localhost:8000/api/exercises", config);
      let json = await res.json();
      this.setState({
        loading: false
      });
      console.log(json);
      this.props.history.push("/exercise");
    } catch (error) {
      this.setState({
        loading: false,
        error
      });
    }
  };

  render() {
    if (this.state.error) return <FatalError />;
    return (
      <div className="ExerciseNew-container">
        <Card {...this.state.form} />
        <ExerciseForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          form={this.state.form}
        />
      </div>
    );
  }
}

export default ExerciseNew;
