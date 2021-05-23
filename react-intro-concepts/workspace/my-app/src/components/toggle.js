// Example of a custom component

import React from "react";
import "./toggle.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("this: " + this);
    // Why do you have to setState in this specific syntax?
    // This is an advanced arrow func syntax for returning objects
    // (params) => ({object: "literal"})
    // object returned must be wrapped in ()
    // This is not required as
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }

  // This is valid too
  // handleClick() {
  //   console.log("this: " + this);
  //   // Why do you have to setState in this specific syntax?
  //   this.setState({ isToggleOn: !this.state.isToggleOn });
  // }

  // render() {
  //   return (
  //     <button onClick={this.handleClick}>
  //       {this.state.isToggleOn ? "ON" : "OFF"}
  //     </button>
  //   );

  // Alternative to having to bind in constructor
  // not sure why this is not recommended
  render() {
    return (
      <button className="toggle" onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
