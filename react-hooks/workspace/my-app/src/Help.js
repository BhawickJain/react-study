import React, { useContext } from "react";
import { ThemeContext } from "./themes";

const Help = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="helper" style={{ color: theme.fontColor }}>
      keyboard shortcuts: more (K), less (J), darkmode (Space)
    </div>
  );
};

export default Help;
