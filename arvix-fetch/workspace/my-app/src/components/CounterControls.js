import React from "react";
import Button from "./button";

const CounterControls = (props) => {
  const { darkMode, handleDarkMode } = props.darkState;
  const { count, handleCount } = props.countState;

  return (
    <>
      <Button
        name="reset"
        keyCode="r"
        handleClick={() => {
          handleCount(0);
        }}
      />
      <Button
        name="less"
        keyCode="j"
        handleClick={() => {
          handleCount(count - 1);
        }}
      />
      <Button
        name="more"
        keyCode="k"
        handleClick={() => {
          handleCount(count + 1);
        }}
      />
      <Button
        name={darkMode ? "🌖" : "🌒"}
        keyCode="d"
        handleClick={() => {
          handleDarkMode(darkMode === true ? false : true);
        }}
      />
    </>
  );
};

export default CounterControls;
