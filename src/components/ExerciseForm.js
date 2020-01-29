import React from "react";
import "../styles/ExerciseForm.scss";

class ExerciseForm extends React.Component {
  render() {
    const { onChange, onSubmit, form } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={onSubmit}>
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
          <div className="ExerciseForm-colors">
            <input
              type="text"
              className="form-control"
              placeholder="leftColor"
              name="leftColor"
              onChange={onChange}
              value={form.leftColor}
            />
            <input
              type="text"
              className="form-control"
              placeholder="rightColor"
              name="rightColor"
              onChange={onChange}
              value={form.rightColor}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ExerciseForm;
