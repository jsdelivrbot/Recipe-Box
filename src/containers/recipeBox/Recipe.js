import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import R from "ramda";
import axios from "../../components/axios-orders";
import GridLayout from "../../layout/GridLayout";

import getResults from "../../components/search/getResults";
import getRecipe from "../../components/search/getRecipe";
import ErrorHandler from '../../withErrorHandler/ErrorHandler'

class RecipeBox extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRecipeHandler = this.deleteRecipeHandler.bind(this);
    this.editRecipeHandler = this.editRecipeHandler.bind(this);
    this.addFavHandler = this.addFavHandler.bind(this);
    this.orderRecipeHandler = this.orderRecipeHandler.bind(this);
    this.deliveryInfoHandler = this.deliveryInfoHandler.bind(this);
  }

  state = {
    mainRecipe: {
      title: "Chicken Curry",
      image_url:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=980:*",
      ingredients: {
        chicken: 1,
        leek: 2,
        onions: 7,
        peppers: 4
      },
      directions: `In a large pot over medium-high heat, heat oil. Add onion and cook until softened and lightly golden, 5 to 7 minutes. Add chicken and sear until golden on all sides, 5 minutes more. Stir in garlic and ginger and cook until fragrant, 2 minutes more.
                  Coat aromatics in spices and cook until very fragrant, less than a minute more. Pour in tomatoes and chicken broth and bring to a simmer.
                  Stir in heavy cream, then season with salt and pepper. Simmer until chicken pieces are cooked through and tender, about 10 minutes.
                   Garnish with cilantro and serve over rice or with naan, with lemon wedges for squeezing.`
    },
    popularRecipes: [],
    favourites: [],
    editMode: false,
    orderAccepted: false,
    orderLoaded: false,
    deliveryInfo: {},
    searchResults: [],
    searchValue: "",
    searchIsLoading: false,
    searchID: "",
    error: null
  };

  componentDidMount() {

    this.reqInterceptor = axios.interceptors.request.use(req => {
      this.setState({ error: null })
    });
    this.resInterceptor = axios.interceptors.response.use(null, error => {
      this.setState({ error: error })
    });

    fetch('https://recipe-box-15453.firebaseio.com/ingredients.json').then(data => {
      return data.json()
    }).then(ingredients => this.setState({ ingredients }))
      .catch(response => console.log(response))
   
    fetch('https://recipe-box-15453.firebaseio.com/popular.json').then(data => {
      return data.json()   
    }).then(popularRecipes => this.setState({ popularRecipes }))
      .catch(response => console.log(response))

    fetch('https://recipe-box-15453.firebaseio.com/favourites.json').then(data => {
      return data.json()
    }).then(favourites => {
      if (favourites == null ||favourites === 1) {
          favourites = [];
      }
      this.setState({ favourites})
    } )
      .catch(response => console.log(response))
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.reqInterceptor);
    axios.interceptors.response.eject(this.resInterceptor);
  }

  deliveryInfoHandler(deliveryInfo) {
    this.setState({
      deliveryInfo
    });
  }

  orderRecipeHandler() {
    const ingredients = { ...this.state.mainRecipe.ingredients };
    const deliveryInfo = { ...this.state.deliveryInfo };
    const price = "$20";
    const order = {
      ingredients,
      price,
      deliveryInfo
    };

    axios
      .post("orders.json", order)
      .then(response => {
        console.log(response);
        this.setState({
          orderLoaded: true,
          orderAccepted: true
        });
      }).catch(error => {
        console.log(error);
        console.log('here')
        this.setState({
          orderLoaded: true,
          orderAccepted: false
        });
      });
  }

  addRecipeHandler(recipe) {
    let popularRecipes = [...this.state.popularRecipes];
    const findID = popularRecipes[popularRecipes];
    popularRecipes.push(recipe);
    this.setState({ popularRecipes: popularRecipes });
  }

  editRecipeHandler(editedRecipe) {
    const { header, ingredients, directions } = editedRecipe;
    this.setState({
      mainRecipe: {
        header,
        ingredients,
        directions
      }
    });
  }

  deleteRecipeHandler() {
    const popularRecipes = [...this.state.popularRecipes];
    const sortById = R.sortBy(R.compose(R.prop("id")));
    const sorted = sortById(popularRecipes);
    const recipeToReplace = sorted[sorted.length - 1];

    const { header, directions, ingredients } = recipeToReplace;
    this.setState({
      mainRecipe: {
        header,
        directions,
        ingredients
      }
    });
  }

  addFavHandler(e, id) {
    const popularRecipes = [...this.state.popularRecipes];
    let favourites = [...this.state.favourites];
    const recipe = popularRecipes.find(el => el.id === id);
    const alreadyThere = favourites.indexOf(recipe);

    if (alreadyThere === -1) {
      favourites.push(recipe);
    } else {
      const index = favourites.findIndex(el => el.id === id);
      favourites.splice(index, 1);
    }

    this.setState({
      favourites
    });
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