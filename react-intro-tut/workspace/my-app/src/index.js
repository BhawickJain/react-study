import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Arrow pure function as a component
const FormattedDate = (props) => {
  return <span>{props.date.toLocaleTimeString()}</span>;
};

class Greet extends React.Component {
  constructor(props) {
    // Super allows the properties in the element to be accessible
    // and manipulated.
    // What exactly is super () doing? Without it this.state is uninitialized
    super(props);
    // .state instantiates a state object replacing any prior state.
    // .props isn't overwritten.
    // .setState only updates or adds new state key,values.
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

  writeName(name, surname) {
    if (surname) {
      return name + " " + surname;
    } else {
      return name;
    }
  }

  render() {
    // renders surname prop is available otherwise (||) give ""
    return (
      <div>
        <h1>
          Hello,{" "}
          {this.props.surname
            ? this.props.name + " " + this.props.surname
            : this.props.name}
          !
        </h1>
        <h2>
          It is <FormattedDate date={this.state.date} />
        </h2>
      </div>
    );
  }
}

// Component version
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Greet name="Tom" />
//         <Greet name="Frank" />
//         <Greet name="James" />
//         <Greet name="Dom" />
//       </div>
//     );
//   }
// }

// Example of using .preventDefault() and events
function ActionLink() {
  function handleClick(e) {
    // If nothing is done, this prevents the event
    // from propagating
    // What exactly does .preventDefault() do?
    e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <a href="#" onClick={handleClick}>
      Click Me
    </a>
  );
}

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
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }

  // // This is valid too
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
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// non-functional examples of passing args to Event Handlers
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// A component with no real state of its own or props can
// be a pure function
function App() {
  return (
    <div>
      <Greet name="Tom" surname="Hanks" />
      <Greet name="Frank" />
      <Greet name="James" />
      <Greet name="Dom" surname="Yu" />
      <div>
        <ActionLink />
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// EXPLANATION
// ============
// ReactDom.render triggers the App component which is a pure function and calls multiple Greet components. Each instance needs its constructor run. There, it passes the name property from the element. Note how this is a pure function. This triggers its constructor which takes the date property from Greet. Each Greet component manages its own time. Upon ceation, componentDidMount() is triggered, which runs a timeID holding an instance of the setInterval(). That triggers the tick() function which tells ReactDOM to watch out for the date property to be changing using .setState. The tick instantiates a new Date object which holds the fresh time. When rendering Greet is finds that it needs a the FormattedDate component. This is a pure function which takes sent in state.date and returns a span with a local time format.
// This is an example of how data flows down from the Greet component and down to the FormattedDate component.
