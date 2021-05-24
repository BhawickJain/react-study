import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log("chosen: " + e.target.value);
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    console.log("Your favorite flavor is: " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your flavorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Subtmit" />
      </form>
    );
  }
}

ReactDOM.render(<FlavorForm />, document.getElementById("root"));
