import React from 'react';
import { Header, Search } from "semantic-ui-react";
const recipeTitleStyle = {
  color: '#FF5252'
}

const SearchRecipes = props => (
   <div>
    <Header as='h2' style={recipeTitleStyle}>Search Recipes! </Header>
    <Search />
   </div>

)

export default SearchRecipes