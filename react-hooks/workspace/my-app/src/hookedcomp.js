import React, { useState, useEffect } from "react";

const ButtonOne = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
};

const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

const useDocumentTitle = (value) => {
  useEffect(() => {
    document.title = value;
  });
};

const Example = () => {
  const [count, setCount] = useCount();
  useDocumentTitle(`You clicked ${count} times`);
  return (
    <div>
      <p>You clicked {count} times</p>
      <ButtonOne
        name="add"
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <ButtonOne
        name="minus"
        onClick={() => {
          setCount(count - 1);
        }}
      />
    </div>
  );
};
export default Example;

// Example of how two elements are being handled at the same time with shared state.
