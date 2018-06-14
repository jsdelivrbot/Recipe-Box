import React from "react";
import { Header, Search } from "semantic-ui-react";
import getResults from "./getResults";

const recipeTitleStyle = {
  color: "#FF5252"
};

export default class SearchRecipes extends React.Component {
     state = {

     }
   
 
  render() {
    return (
      <div>
        <Header as="h2" style={recipeTitleStyle}>
          Search Recipes!{" "}
        </Header>
        <Search />
      </div>
    );
  }
}


