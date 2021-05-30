import React, { useState, useEffect } from "react";
import { Title, useDocumentTitle } from "./Title";
import CounterControls from "./CounterControls";
import Canvas from "./Canvas";
import Help from "./Help";
import "../index.css";

const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return [darkMode, setDarkMode];
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
