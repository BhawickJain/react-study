import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchArticle from "./components/SearchArticle";
import AppProvider from "./appContext";

const App = () => {
  return (
    <AppProvider>
      <SearchArticle />
    </AppProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
