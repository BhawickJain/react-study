import React, { useState, useEffect, useContext } from "react";

const themes = {
  light: {
    background: "#f5f9e9",
    fontColor: "#000000",
    buttonColor: "#E6EBE0",
  },
  dark: {
    background: "#1d3557",
    fontColor: "#f1faee",
    buttonColor: "#457b9d",
  },
};
const ThemeContext = React.createContext(themes.dark);

const ButtonOne = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={props.onClick}
        style={{ background: theme.buttonColor, color: theme.fontColor }}
      >
        {props.name}
      </button>
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

const Example = () => {
  const [count, setCount] = useCount();
  const [darkMode, setDarkMode] = useDarkMode();
  useDocumentTitle(`You clicked ${count} times`);
  return (
    <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
      <Canvas>
        <Title value={`You clicked ${count} times`} />
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
        <ButtonOne
          name={darkMode ? "🌖" : "🌒"}
          onClick={() => {
            setDarkMode(darkMode === true ? false : true);
          }}
        />
      </Canvas>
    </ThemeContext.Provider>
  );
};
export default Example;

// Example of how two elements are being handled at the same time with shared state.
