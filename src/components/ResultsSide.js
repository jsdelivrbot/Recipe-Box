import React from "react";
import { Header } from "semantic-ui-react";

const resultsStyle = {
  height: "600px",
  background: "#b7d2ff"
};
const RecipeResults = props => (
  <div style={resultsStyle}>
    <Header as="h4"> Search Results </Header>
  </div>
);

export default RecipeResults;
