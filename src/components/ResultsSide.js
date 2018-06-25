import React from "react";
import { Header } from "semantic-ui-react";

const RecipeResults = props => {

  const computer = {
    height: "600px",
    background: "#b7d2ff"
  };

  const mobile = {
    height: "250px",
    background: "#b7d2ff"
  };
  let resultsStyle;
 
  props.responsive !== true ? resultsStyle = computer : resultsStyle = mobile;

  return  (
  <div style={resultsStyle}>
    <Header as="h4"> Search Results </Header>
  </div>
);
}

export default RecipeResults;
