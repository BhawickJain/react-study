import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  // convert is a function
  const output = convert(input);
  // isn't there a round function?
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const BoilingVerdict = (props) => {
  if (props.celsius === "") {
    return <p>Please enter a temperature</p>;
  }
  if (props.celsius > 100) {
    return <p className="hot">The water would boil</p>;
  }
  return <p>The water would not boil</p>;
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend> Enter temperature in {scaleNames[scale]}: </legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFarhenheitChange = this.handleFarhenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  // inside a class you don't need to say it is a function
  // as it is classified as a method in Js
  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }
  handleFarhenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFarhenheitChange}
        />
        <BoilingVerdict celsius={celsius} className="" />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));

// The state of the Calculator component holds the user's last input.
// This means that when the user changes the temperature scale, the
// state of the calculator changes too. Depending on the current scale
// we're in, the appropriate conversion is made.
// Why not keep the calculator state to one unit? Potentially to limit
// confusion when the user input in fahrenheit and the calculator
// overwrites the input with a slight rounding error. E.g. 100.004F is
// overwritten to 100F.
