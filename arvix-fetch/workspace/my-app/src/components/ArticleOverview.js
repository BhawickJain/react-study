import React, { useContext, useState } from "react";
import "./ArticleOverview.css";

const ArticleOverview = (props) => {
  return (
    <div className="ArticleOverview">
      <h1>{props.paperTitle}</h1>
      <h2 className="abstract">abstract</h2>
      <p>{props.paperAbstract}</p>
    </div>
  );
};

export default ArticleOverview;
