import React from "react";
import "../styles/ExerciseForm.scss";

class ExerciseForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { onChange, form } = this.props;
    return (
      <div className="ExerciseForm-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              onChange={onChange}
              value={form.title}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              onChange={onChange}
              value={form.description}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="img"
              name="img"
              onChange={onChange}
              value={form.img}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="leftColor"
              name="leftColor"
              onChange={onChange}
              value={form.leftColor}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="rightColor"
              name="rightColor"
              onChange={onChange}
              value={form.rightColor}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ExerciseForm;
