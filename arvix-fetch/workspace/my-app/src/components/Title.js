import React, { useEffect } from "react";

export const useDocumentTitle = (value) => {
  useEffect(() => {
    document.title = value;
  }, [value]);
};

export const Title = (props) => {
  return <p className="Title">{props.value}</p>;
};
