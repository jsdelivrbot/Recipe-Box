import React from "react";
import "semantic-ui-css/semantic.min.css";
import GridLayout from "../../layout/GridLayout";
import getResults from "../../components/search/getResults";
import getRecipe from "../../components/search/getRecipe";
import ErrorHandler from '../../withErrorHandler/ErrorHandler'

class RecipeBox extends React.Component {

  state = {
    popularRecipes: [],
    searchResults: [],
    searchValue: "",
    searchIsLoading: false,
    searchID: "",
 
  };

 componentDidMount() {
   fetch('https://recipe-box-15453.firebaseio.com/popular.json').then(data => {
     return data.json()
   }).then(popularRecipes => this.setState({ popularRecipes }))
     .catch(response => console.log(response))
 }
  
  searchOnClickHandler() {
    setTimeout(() => {
      const recipeName = this.state.searchValue;
      const recipes = [...this.state.searchResults];
      const recipeObj = recipes.find(el => el.title === recipeName);

      if (recipeObj != undefined) {
        const id = recipeObj.recipe_id;
        const recipe = getRecipe(id);
        recipe.then(recipe => {
          this.setState({
            mainRecipe: recipe.data.recipe
          });
        });
      }
    }, 300);
  }
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({
      seardchIsLoading: false,
      searchResults: [],
      searchValue: ""
    });

  handleResultSelect = (e, { result }) =>
    this.setState({ searchValue: result.title });

  handleSearchChange = e => {
    const searchValue = e.target.value;
    this.setState({
      searchIsLoading: true,
      searchValue
    });

    setTimeout(() => {
      if (this.state.searchValue.length < 1) return this.resetComponent();
      const source = getResults(searchValue);
      source.then(data => {
        this.setState({
          searchIsLoading: false,
          searchResults: data
        });
      });
    }, 300);
  };

  render() {
    return (
      <div className="">

        <ErrorHandler error={this.state.error} />
        <GridLayout
          mainRecipe={this.state.mainRecipe}
          popularRecipes={this.state.popularRecipes}
          favourites={this.state.favourites}
          addRecipe={data => this.addRecipeHandler(data)}
          deleteOnClick={this.deleteRecipeHandler}
          editOnClick={this.editRecipeHandler}
          addFav={this.addFavHandler}

          orderRecipe={this.orderRecipeHandler}
          updateDelivery={this.deliveryInfoHandler}
          deliveryInfo={this.state.deliveryInfo}
          orderAccepted={this.state.orderAccepted}
          orderLoaded={this.state.orderLoaded}

          searchValue={this.state.searchValue}
          searchResults={this.state.searchResults}
          searchID={this.state.searchID}
          searchIsLoading={this.state.searchIsLoading}
          searchHandleResultSelect={this.handleResultSelect.bind(this)}
          searchOnClickHandler={this.searchOnClickHandler.bind(this)}
          handleSearchChange={this.handleSearchChange.bind(this)}
        />
      </div>
    );
  }
}

export default RecipeBox