import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Adds additional state to props
    // You can use .state only in the constructor
    // Everywhere else you setState to trigger ReactDOM
    this.state = { date: new Date() };
  }

  // When alive run this function
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  // When destroyed run this function
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  // tick forward in time
  tick() {
    // Set State allows React DOM to respond
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <span>{this.state.date.toLocaleTimeString()}</span>;
  }
}

class Greet extends React.Component {
  constructor(props) {
    // Super allows the properties in the element to be accessible
    // and manipulated.
    super(props);
    // declare to expect name property in attribute
    this.state = { name: props.name };
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <h2>
          It is <Clock></Clock>.
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<Greet name="Nirbhey" />, document.getElementById("root"));

// EXPLANATION
// ReactDom.render triggers the Greet component which runs its constructor. This passes
// the name property from the element. When rendering Greet is finds that it need a the
// Clock component. This triggers its constructor which initializes the new Date object.
// Upon creation, componentDidMount() is triggered, which runs a timeID function with
// setInterval. That triggers the tick() function which tells ReactDOM to watch out for
// the date property to be changing. The tick instantiates a new Date object which holds
// the fresh time.
