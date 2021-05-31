import React, { useState } from "react";

export const AppContext = React.createContext([{}, () => {}]);

const initialAppState = {
  darkMode: false,
};

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialAppState);
  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
