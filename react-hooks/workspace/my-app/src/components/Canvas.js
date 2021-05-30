import React from "react";

const Canvas = (props) => {
  return <body className={props.className}>{props.children}</body>;
};

export default Canvas;
