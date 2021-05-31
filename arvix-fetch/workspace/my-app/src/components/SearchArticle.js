import React, { useContext, useEffect, useState } from "react";
import ShowResults from "./ShowResults";
import Form from "./Form";
import SearchProvider, { SearchContext } from "./../searchContext";
import Button from "./button";
import { AppContext } from "./../appContext";

const SearchArticle = () => {
  const [searchState, setSearchState] = useContext(SearchContext);
  const [appState, setAppState] = useContext(AppContext);

  useEffect(() => {
    console.log(searchState);
  }, [searchState]);

  useEffect(() => {
    console.log("appstate: " + appState.darkMode);
  }, [appState]);

  const toggleDarkMode = () => {
    console.log("toggling darkmode");
    console.log(appState.darkMode);
    return appState.darkMode === true ? false : true;
  };

  return (
    <SearchProvider>
      <section className={appState.darkMode ? "dark" : ""}>
        <Form
          className={searchState.searchResults !== null ? "hasResults" : ""}
        />
        <Button
          id="darkMode"
          name={appState.darkMode ? "🌖" : "🌒"}
          handleClick={() => {
            setAppState({
              ...appState,
              darkMode: toggleDarkMode(),
            });
          }}
        />
        <ShowResults searchState={{ searchState }} />
      </section>
    </SearchProvider>
  );
};

export default SearchArticle;
