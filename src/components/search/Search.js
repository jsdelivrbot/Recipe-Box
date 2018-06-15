import React from "react";
import _ from "lodash";
import { Header, Search } from "semantic-ui-react";
import getResults from "./getResults";
import getRecipe from './getRecipe';

const recipeTitleStyle = {
  color: "#FF5252"
};

const SearchRecipes = props => {
 
    const isLoading = props.searchIsLoading;
    const value = props.searchValue;
    const results =props.searhResults;
    return (
      <div>
        <Header as="h2" style={recipeTitleStyle}>
          Search Recipes!{" "}
        </Header>
        <Search
          loading={isLoading}
          onResultSelect={props.handleResultSelect}
          onSearchChange={_.debounce(props.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          onClick={props.onClickHandler}
        
        />
      </div>
    );
  }

export default SearchRecipes;