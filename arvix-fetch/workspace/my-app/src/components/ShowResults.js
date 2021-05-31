import React, { useContext } from "react";
import ArticleOverview from "./ArticleOverview";
import NoResults from "./NoResults";
import "./NoResults.css";
import { SearchContext } from "./../searchContext";

const ShowResults = (props) => {
  const [searchState, setSearchState] = useContext(SearchContext);
  console.log(searchState);
  if (searchState.searchResults !== null) {
    if (searchState.searchResults === undefined) {
      return <NoResults />;
    }
    if (
      searchState.searchResults !== null &&
      searchState.searchResults.length > 0
    ) {
      console.log("results found - " + searchState.searchResults.length);
      return searchState.searchResults.map((r, index) => {
        return (
          <ArticleOverview
            key={index}
            paperTitle={r.title._text || ""}
            paperAbstract={r.summary._text || ""}
          />
        );
      });
    }
    if (searchState.searchResults !== null) {
      console.log("1 result found");
      return (
        <ArticleOverview
          paperTitle={searchState.searchResults.title._text || ""}
          paperAbstract={searchState.searchResults.summary._text || ""}
        />
      );
    }
  }
  return "";
};

export default ShowResults;
