import React, { useState, useLayoutEffect } from "react";
import { Title, useDocumentTitle } from "./Title";
import CounterControls from "./CounterControls";
import Canvas from "./Canvas";
import Help from "./Help";
import "../index.css";

const useCount = () => {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );
  return [count, setCount];
};

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);
  return [darkMode, setDarkMode];
};

const FancyCounter = () => {
  const [count, setCount] = useCount();
  const [darkMode, setDarkMode] = useDarkMode();
  useDocumentTitle(`Counter ${count}`);

  useLayoutEffect(() => {
    setDarkMode(localStorage.getItem("dark") === "true" ? true : false);
  }, []);

  const handleCount = (value) => {
    setCount(value);
    localStorage.setItem("count", value);
  };
  const handleDarkMode = (value) => {
    setDarkMode(value);
    localStorage.setItem("dark", value);
  };

  return (
    <Canvas className={darkMode ? "dark" : ""}>
      <div className="middle">
        <Title value={`${count}`} />
        <CounterControls
          countState={{ count, handleCount }}
          darkState={{ darkMode, handleDarkMode }}
        />
        <Help />
      </div>
    </Canvas>
  );
};
export default FancyCounter;
