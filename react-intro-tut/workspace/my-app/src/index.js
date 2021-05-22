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
//         <Greet name="Nirbhey" />
//         <Greet name="Bhawick" />
//         <Greet name="Dom" />
//         <Greet name="Fran" />
//       </div>
//     );
//   }
// }

// A component with no real state of its own or props can
// be a pure function
function App() {
  return (
    <div>
      <Greet name="Nirbhey" surname="Jain" />
      <Greet name="Fran" />
      <Greet name="Bhawick" />
      <Greet name="Dom" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// EXPLANATION
// ============
// ReactDom.render triggers the App component which is a pure function and calls multiple Greet components. Each instance needs its constructor run. There, it passes the name property from the element. Note how this is a pure function. This triggers its constructor which takes the date property from Greet. Each Greet component manages its own time. Upon ceation, componentDidMount() is triggered, which runs a timeID holding an instance of the setInterval(). That triggers the tick() function which tells ReactDOM to watch out for the date property to be changing using .setState. The tick instantiates a new Date object which holds the fresh time. When rendering Greet is finds that it needs a the FormattedDate component. This is a pure function which takes sent in state.date and returns a span with a local time format.
// This is an example of how data flows down from the Greet component and down to the FormattedDate component.
