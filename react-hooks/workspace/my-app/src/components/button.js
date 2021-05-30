import React, { useEffect } from "react";
import "./button.css";

const Button = (props) => {
  const handleKeydown = (e) => {
    if (e.key === props.keyCode) {
      console.log(props.keyCode);
      props.handleClick();
    }
  };

  useEffect(() => {
    console.log("add keydown listener");
    window.addEventListener("keydown", handleKeydown);

    return () => {
      console.log("remove keydown listener");
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [props]);

  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.name}
    </button>
  );
};

export default Button;
