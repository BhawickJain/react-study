import React, { useState, useEffect } from "react";
import CounterControls from "./CounterControls";
import Help from "./Help";
import "./index.css";

const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return [darkMode, setDarkMode];
};

const useDocumentTitle = (value) => {
  useEffect(() => {
    document.title = value;
  }, [value]);
};

const Canvas = (props) => {
  return <body className={props.className}>{props.children}</body>;
};

const Title = (props) => {
  return <p>{props.value}</p>;
};

const FancyCounter = () => {
  const [count, setCount] = useCount();
  const [darkMode, setDarkMode] = useDarkMode();
  useDocumentTitle(`You clicked ${count} times`);

  return (
    <Canvas className={darkMode ? "dark" : ""}>
      <div className="middle">
        <Title value={`You clicked ${count} times`} />
        <CounterControls
          countState={{ count, setCount }}
          darkState={{ darkMode, setDarkMode }}
        />
        <Help />
      </div>
    </Canvas>
  );
};
export default FancyCounter;
