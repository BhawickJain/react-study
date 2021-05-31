import React, { useContext } from "react";
import Textfield from "./Textfield";
import searchArvix from "../functions/searchArvix";
import extractXMLResults from "../functions/extractXmlResults";
import { SearchContext } from "./../searchContext";

const Form = (props) => {
  const [searchState, setSearchState] = useContext(SearchContext);

  const handleSubmit = async (e) => {
    // prevents refresh of page
    // must be first to prevent page reloading and interfering with request
    e.preventDefault();
    console.log("You have submitted!");
    console.log(searchState);
    const xmlSearchResults = await searchArvix(searchState.searchValue);
    const jsonData = await extractXMLResults(xmlSearchResults.data);
    const entry = jsonData.feed.entry;
    setSearchState({
      ...searchState,
      searchResults: entry,
    });
    // console.log(jsonData.feed.entry);
    // console.log(props.searchState.searchResults);
  };

  const handleSearchBar = (e) => {
    // console.log("value: " + value);
    // const setSearchState = props.setSearchState;
    const value = e.target.value;
    console.log(searchState);
    setSearchState({ ...searchState, searchValue: value });
    // console.log(props.searchState);
  };
  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <Textfield
        className="searchBar"
        focus="true"
        type="text:"
        label="🔎"
        value={searchState.searchValue}
        onChange={(e) => {
          handleSearchBar(e);
        }}
      />
    </form>
  );
};

export default Form;
