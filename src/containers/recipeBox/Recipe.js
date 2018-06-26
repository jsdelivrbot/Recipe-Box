import React from "react";
import "semantic-ui-css/semantic.min.css";
import GridLayout from "../../layout/GridLayout";
import getResults from "../../components/search/getResults";
import getRecipe from "../../components/search/getRecipe";
import ErrorHandler from '../../withErrorHandler/ErrorHandler'

class RecipeBox extends React.Component {

  state = {
   
    searchResults: [],
    searchValue: "",
    searchIsLoading: false,
    searchID: "",
 
  };


  
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
          mainRecipe={this.props.props.mainRecipe}
          popularRecipes={this.props.props.popularRecipes}
          favourites={this.props.props.favourites}
          addRecipe={this.propsaddRecipe}
          deleteOnClick={this.props.deleteRecipe}
          editOnClick={this.props.editRecipe}
          addFav={this.props.addFav}

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