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
          <span className="label">Name:</span>
          <input
            type="text"
            // displayed value taken from form state
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM Element.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert("An essay was submitted " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <div className="EssayFormSubmit">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

ReactDOM.render(
  <div>
    <NameForm />
    <EssayForm />
  </div>,
  document.getElementById("root")
);
