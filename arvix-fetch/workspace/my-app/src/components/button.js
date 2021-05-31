import React, { useEffect } from "react";
import "./button.css";

const Button = (props) => {
  const handleClick = props.handleClick;
  const handleKeydown = (e) => {
    if (e.key === props.keyCode) {
      console.log(props.keyCode);
      handleClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [props]);

  return (
    <button id={props.id} className={props.className} onClick={handleClick}>
      {props.name}
    </button>
  );
};

export default Button;
