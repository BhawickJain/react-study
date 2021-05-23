import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const BoilingVerdict = (props) => {
  if (props.celcius > 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      // uses a fragment to group sibling elements
      <>
        <fieldset>
          <legend> Enter temperature in Celcius: </legend>
          <input value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celcius={temperature} />
        </fieldset>
        <></>
        <fieldset>
          <legend> Enter temperature in Celcius: </legend>
          <input value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celcius={temperature} />
        </fieldset>
      </>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
