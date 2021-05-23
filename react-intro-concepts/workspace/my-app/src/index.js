import React from "react";
import ReactDOM from "react-dom";
import Toggle from "./components/toggle.js";
import "./index.css";

// TODO move into components

// Arrow pure function as a component
const FormattedDate = (props) => {
  return <span className="time">{props.date.toLocaleTimeString()}</span>;
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
          ! It is <FormattedDate date={this.state.date} />
        </h1>
      </div>
    );
  }
}

// Example of using .preventDefault() and events
function ActionLink() {
  function handleClick(e) {
    // If nothing is done, this prevents the event
    // from propagating
    // What exactly does .preventDefault() do?
    e.preventDefault();
    console.log("The link was clicked.");
  }

  // normal link behaviour example
  // return <a href="https://www.google.com">Click Me</a>;

  return (
    <a href="www.google.com" onClick={handleClick}>
      Click Me
    </a>
  );
}

// non-functional examples of passing args to Event Handlers
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// A component with no real state of its own or props can
// be a pure function

function ManyHello(props) {
  const Names = props.names;
  const namesRender = Names.map(({ name, surname, id }) => (
    // key allows efficient updates in React, useful in frequent updates
    // can also in a last resort use the Array's index, but is can be fooled.
    <lu key={id}>
      <Greet name={name} surname={surname} />
    </lu>
  ));

  return (
    <div>
      <div>
        <Toggle />
      </div>
      {namesRender}
      <div>
        <ActionLink />
      </div>
    </div>
  );
}

// Component version
// class ManyHello extends React.Component {
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

const Names = [
  { id: 1, name: "Frank", surname: "" },
  { id: 2, name: "James", surname: "" },
  { id: 3, name: "Dom", surname: "Yu" },
  { id: 4, name: "Tom", surname: "Hanks" },
  { id: 5, name: "Kanu", surname: "Reeves" },
];

ReactDOM.render(<ManyHello names={Names} />, document.getElementById("root"));

// EXPLANATION
// ============
// ReactDom.render triggers the ManyHello component and calls multiple Greet components. Each instance needs its own constructor run. There, it passes the Name object from the Names Array of Objects. Note how ManyHello is a pure function.
// ManyHello takes a names property which is an array of Names Objects (name and surname), those are listed line by line. This isn't a list each name does not have key / id to help react identify them to be unique.
// Each Greet component, triggers its own constructor which makes a the date state. Each Greet component manages its own time. Upon ceation, componentDidMount() is triggered, which runs a timeID holding an instance of the setInterval(). That triggers the tick() function which tells ReactDOM to watch out for the date property to be changing using .setState. The tick instantiates a new Date object which holds the fresh time.
// When rendering Greet, React finds that it needs the FormattedDate component. This is a pure function which takes sent in state.date and returns a span with a local time format.
// This is an example of how data flows down from the Greet component and down to the FormattedDate component.
