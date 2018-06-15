import React from "react";
import axios from "axios";
import _ from "lodash";
import { Header, Search } from "semantic-ui-react";
import getResults from "./getResults";
import { proxy, key } from "./searchConfig";

const recipeTitleStyle = {
  color: "#FF5252"
};

export default class SearchRecipes extends React.Component {
  state = {
    value: "",
    results: [],
    isLoading: false, 
    id: ''
  };
   onClickHandler() {
     setTimeout(() => {
       const recipeName = this.state.value;
       const recipes = [...this.state.results];
       console.log(recipes)
       console.log(recipeName)
       const recipeObj = recipes.find(el => el.title === recipeName);
       console.log(recipeObj)
       if (recipeObj != undefined) {
         const id = recipeObj.recipe_id
         console.log(id)
       }
     }, 300)

      
     

   }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      
      const source = getResults(value);
    
      source.then(data => {
        this.setState({
          isLoading: false,
          results: data
        });
      });
    }, 300);
  };

  render() {
    console.log(this.state);
    const { isLoading, value, results } = this.state;
    return (
      <div>
        <Header as="h2" style={recipeTitleStyle}>
          Search Recipes!{" "}
        </Header>
        <Search
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          onClick={this.onClickHandler.bind(this)}
          {...this.props}
        />
      </div>
    );
  }
}
