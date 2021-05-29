import React from "react";
import Button from "./button";

const CounterControls = (props) => {
  const { darkMode, setDarkMode } = props.darkState;
  const { count, setCount } = props.countState;

  return (
    <>
      <Button
        name="reset"
        keyCode="r"
        handleClick={() => {
          setCount(0);
        }}
      />
      <Button
        name="more"
        keyCode="k"
        handleClick={() => {
          setCount(count + 1);
        }}
      />
      <Button
        name="less"
        keyCode="j"
        handleClick={() => {
          setCount(count - 1);
        }}
      />
      <Button
        name={darkMode ? "🌖" : "🌒"}
        keyCode=" "
        handleClick={() => {
          setDarkMode(darkMode === true ? false : true);
        }}
      />
    </>
  );
};

export default CounterControls;
