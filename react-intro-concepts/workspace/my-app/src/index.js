import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // allows the state of the form to be tracked as field changes are made.
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  }

  handleSubmit(e) {
    alert.apply("A name was submitted: " + this.state.value);
    // since nothing is being done with event.
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            // displayed value taken from form state
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <div>
    <NameForm />
  </div>,
  document.getElementById("root")
);
