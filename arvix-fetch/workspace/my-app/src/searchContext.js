import React, { useState } from "react";

export const SearchContext = React.createContext([{}, () => {}]);

const initialSearchState = {
  searchValue: "",
  searchResults: null,
};

const SearchProvider = ({ children }) => {
  const [searchState, setSearchState] = useState(initialSearchState);
  return (
    <SearchContext.Provider value={[searchState, setSearchState]}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
