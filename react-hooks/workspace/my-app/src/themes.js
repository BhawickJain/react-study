import React from "react";

export const themes = {
  light: {
    background: "#FFFFFF",
    fontColor: "#000000",
    buttonColor: "#E2E2E2",
    buttonHover: "cecece",
  },
  dark: {
    background: "#1d3557",
    fontColor: "#f1faee",
    buttonColor: "#457b9d",
    buttonHover: "#396683",
  },
};
export const ThemeContext = React.createContext(themes.dark);
