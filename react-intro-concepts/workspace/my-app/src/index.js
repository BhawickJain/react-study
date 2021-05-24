import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // Uses the computed property name syntax
    // Also as setState is used only partial change is made
    // state would replace the entire object.
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    console.log(
      "\n Is Going: " +
        this.state.isGoing +
        "\n Number of Guests: " +
        this.state.numberOfGuests
    );
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is Going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of Guests
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <input name="submit" type="submit" onSubmit={this.handleSubmit} />
      </form>
    );
  }
}
ReactDOM.render(<Reservation />, document.getElementById("root"));
