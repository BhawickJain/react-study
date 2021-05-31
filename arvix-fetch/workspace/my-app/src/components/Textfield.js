import React, { useEffect, useRef } from "react";
import "./Textfield.css";

const Textfield = (props) => {
  const searchBarRef = useRef(null);

  useEffect(() => {
    if (props.focus === "true") {
      searchBarRef.current.focus();
    }
  }, []);

  return (
    <label className={props.className}>
      <span>{props.label}</span>
      <input
        focus={props.focus}
        ref={searchBarRef}
        type={props.type}
        value={props.value}
        onChange={(e) => {
          props.onChange(e);
        }}
      />
    </label>
  );
};

export default Textfield;
