import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

ReactDOM.render(
  <div>
    Notice how you can edit the values inside after 5 seconds. This is an
    example of a controlled function. The onChange event is ignored to
    demonstrate its enforcement.
    <input
      value="hi"
      onChange={(e) => {
        e.preventDefault();
      }}
    />
  </div>,
  document.getElementById("root")
);

// timeout sets the value of input to be null effectively allowing changes to the input
setTimeout(function () {
  ReactDOM.render(
    <div>
      Notice how you can edit the values inside after 5 seconds. This is an
      example of a controlled function. The onChange event is ignored to
      demonstrate its enforcement.
      <input value={null} />
    </div>,
    document.getElementById("root")
  );
}, 5000);
