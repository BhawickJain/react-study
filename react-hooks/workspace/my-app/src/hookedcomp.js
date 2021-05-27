import React, { useState, useEffect } from "react";

// Must capitalise Example to ensure react sees them as components
const Example = () => {
  //useState(0) sets default value of count.
  const [count, setCount] = useCount();
  useDocumentTitle(`You clicked ${count} times`);
  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
};

// this is an example of shared state
// two buttons can mutate the count
const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

// This is an example of a custom hook!
// You can import the function as well
const useDocumentTitle = (value) => {
  useEffect(() => {
    //Update the document title using the browser API
    // Must use tilda ` to enable inline args not quotes
    document.title = value;
  });
  // Use effect is similar to componentDidMount and ComponentDidUpdate
  // use keywords is also recognised as a custom hook.
  // Effect is run after changes to the DOM are made.
  // Runs after every render, including first render.
};

export default Example;

// Example of how two elements are being handled at the same time with shared state.
