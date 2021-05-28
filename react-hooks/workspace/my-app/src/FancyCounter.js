import React, { useState, useEffect, useContext } from "react";
import { themes, ThemeContext } from "./themes";
import { Button } from "./button";
import CounterControls from "./CounterControls";
import Help from "./Help";

const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

const useDocumentTitle = (value) => {
  useEffect(() => {
    document.title = value;
  }, [value]);
};

const Canvas = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <body style={{ background: theme.background, color: theme.fontColor }}>
      {props.children}
    </body>
  );
};

const Title = (props) => {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme.fontColor }}>{props.value}</p>;
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
    <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
      <Canvas>
        <div className="middle">
          <Title value={`You clicked ${count} times`} />
          <CounterControls
            countState={{ count, setCount }}
            darkState={{ darkMode, setDarkMode }}
          />
          <Help />
        </div>
      </Canvas>
    </ThemeContext.Provider>
  );
};
export default FancyCounter;

// Example of how two elements are being handled at the same time with shared state.
