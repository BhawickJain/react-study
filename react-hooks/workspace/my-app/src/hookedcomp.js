import React, { useState, useEffect } from "react";

// Must capitalise Example to ensure react sees them as components
const Example = () => {
  const [count, setCount] = useState(0);
  //useState(0) sets default value of count.

  //Similar to componentDidMount and ComponentDidUpdate
  // use keywords is also recognised as a custom hook.
  // Effect is run after changes to the DOM are made.
  // Runs after every render, including first render.
  useEffect(() => {
    //Update the document title using the browser API
    // Must use tilda ` to enable inline args not quotes
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example;

// Example of how two elements are being handled at the same time with shared state.
