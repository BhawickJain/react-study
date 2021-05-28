import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "./themes";
import "./button.css";

const Button = (props) => {
  const theme = useContext(ThemeContext);

  const handleKeydown = (e) => {
    if (e.key === props.keyCode) {
      console.log(props.keyCode);
      props.handleClick();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <button
      className={props.className}
      onClick={props.handleClick}
      style={{ background: theme.buttonColor, color: theme.fontColor }}
    >
      {props.name}
    </button>
  );
};

export default Button;
