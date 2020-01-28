import React from "react";

class ExerciseNew extends React.Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    console.log(`${e.target.name}: ${e.target.value}`);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="img"
              name="img"
              onChange={this.handleChange}
              value={this.state.img}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="leftColor"
              name="leftColor"
              onChange={this.handleChange}
              value={this.state.leftColor}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="rightColor"
              name="rightColor"
              onChange={this.handleChange}
              value={this.state.rightColor}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ExerciseNew;
