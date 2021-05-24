import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

function Form(props) {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

ReactDOM.render(
  <div>
    <Form />
  </div>,
  document.getElementById("root")
);
