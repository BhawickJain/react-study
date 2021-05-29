import React from "react";

const state = {
  count: 0,
};

const stateContext = React.createContext(state);

export default stateContext;
