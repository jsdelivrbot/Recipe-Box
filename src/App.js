import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.css";
import getResults from "./components/search/getResults";
import getRecipe from "./components/search/getRecipe";
import Recipe from "./containers/recipeBox/Recipe";
import ReviewInitial from "./containers/order/ReviewInitial";
import CustomOrder from "./containers/order/CustomOrder";
import Menu from "./components/Menu";
import WhoWeAre from "./containers/whoWeAre/WhoWeAreGrid";
import axios from "./components/axios-orders";
import R from "ramda";
import DeliveryPage from "./components/mainView/orders/DeliveryPage";
import ConfirmationOrder from "./containers/order/ConfirmationOrder";
import MyOrders from "./containers/myOrders/MyOrders";

import * as actionTypes from './store/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRecipeHandler = this.deleteRecipeHandler.bind(this);
    this.editRecipeHandler = this.editRecipeHandler.bind(this);
    this.addFavHandler = this.addFavHandler.bind(this);
    this.orderRecipeHandler = this.orderRecipeHandler.bind(this);
    this.deliveryInfoHandler = this.deliveryInfoHandler.bind(this);
    this.addSearchHandler = this.addSearchHandler.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.searchOnClickHandler = this.searchOnClickHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  state = {
    mainRecipe: {
      title: "Chicken Curry",
      image_url:
        "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=980:*",
      ingredients: {},
      directions: "",
      description: ""
    },
    customOrder: null,
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
    // this.reqInterceptor = axios.interceptors.request.use(req => {
    //   this.setState({ error: null });
    // });
    // this.resInterceptor = axios.interceptors.response.use(null, error => {
    //   this.setState({ error: error });
    // });

    fetch("https://recipe-box-15453.firebaseio.com/ingredients.json")
      .then(data => {
        return data.json();
      })
      .then(ingredients => {
        const mainRecipe = { ...this.state.mainRecipe };
        mainRecipe.ingredients = ingredients;
        this.setState({
          mainRecipe
        });
      })
      .catch(response => console.log(response));

    fetch("https://recipe-box-15453.firebaseio.com/directions/main.json")
      .then(data => {
        return data.json();
      })
      .then(directions => {
        const mainRecipe = { ...this.state.mainRecipe };
        mainRecipe.directions = directions;
        this.setState({
          mainRecipe
        });
      })
      .catch(response => console.log(response));

    fetch("https://recipe-box-15453.firebaseio.com/popular.json")
      .then(data => {
        return data.json();
      })
      .then(popularRecipes => this.setState({ popularRecipes }))
      .catch(response => console.log(response));

    fetch("https://recipe-box-15453.firebaseio.com/favourites.json")
      .then(data => {
        return data.json();
      })
      .then(favourites => {
        let favArray;
        if (favourites == null) {
          favArray = [];
        } else {
          favArray = favourites;
        }
        this.setState({ favourites: favArray });
      })
      .catch(response => console.log(response));
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.reqInterceptor);
    axios.interceptors.response.eject(this.resInterceptor);
  }

  searchOnClickHandler() {
    setTimeout(() => {
      
      const recipeName = this.state.searchValue;
      const recipes = [...this.state.searchResults];
      const recipeObj = recipes.find(el => el.title === recipeName);
    
      if (recipeObj != undefined) {
        const id = recipeObj.recipe_id;
        const recipe = getRecipe(id);
    
        recipe.then(data=> {
        
         const recipe = data.data.recipe;
          this.setState({ mainRecipe: recipe })
      })
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

  addSearchHandler(searchData) {

    const mainRecipe = searchData.data.recipe;
    this.setState({ mainRecipe });
  }


  handleResultSelect = (e, { result }) => {
     this.setState({ searchValue: result.title });
  }
   

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
      
       const reducedList = data.slice(0, 10);
      
        this.setState({
          searchIsLoading: false,
          searchResults: reducedList
        });
      });
    }, 300);
  };

  deliveryInfoHandler(deliveryInfo) {
    this.setState({
      deliveryInfo
    });
  }

  orderRecipeHandler() {
    const instructions = this.state.customOrder;
    const deliveryInfo = this.state.deliveryInfo;
    const price = "$20";
    const order = {
      instructions,
      price,
      deliveryInfo
    };

    axios
      .post('orders.json', order)
      .then(response => {
        console.log(response)
        if (response !== undefined) {
          this.setState({
          orderLoaded: true,
          orderAccepted: true
        });
        } else {
          this.setState({
            orderLoaded: true,
            orderAccepted: false
          });
        }        
      })
      .catch(error => {
        console.log(error);
        this.setState({
          orderLoaded: true,
          orderAccepted: false
        });
      });
  }

 

  editRecipeHandler(editedRecipe) {
    const { header, ingredients, directions } = editedRecipe;
    const ingredientsString = JSON.stringify(ingredients, undefined, 2);

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
        title: header,
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

 
  render() {
    const state = { ...this.state };
    const mainRecipe = { ...this.state.mainRecipe };

    return (
      <div className="App">
        <Route render={props => (
          <Menu {...props} />
        ) } />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Recipe
                {...props}
                props={state}
                mainRecipe={mainRecipe}
                addRecipe={data => this.addRecipeHandler(data)}
                addFav={(id) => this.props.onAddFavourite(id) }
                addSearch={this.addSearchHandler}
                deleteRecipe={this.deleteRecipeHandler}
                editRecipe={this.editRecipeHandler}

                searchValue={this.state.searchValue}
                searchResults={this.state.searchResults}
                searchID={this.state.searchID}
                searchIsLoading={this.state.searchIsLoading}
                searchHandleResultSelect={this.handleResultSelect}
                searchOnClickHandler={this.searchOnClickHandler}
                handleSearchChange={this.handleSearchChange}

              />
            )}
          />
          <Route path="/team" exact component={WhoWeAre} />
          <Route
            path="/order"
            exact
            render={props => (
              <ReviewInitial {...props}
               mainRecipe={mainRecipe}
               searchValue={this.state.searchValue}
               searchResults={this.state.searchResults}
               searchID={this.state.searchID}
               searchIsLoading={this.state.searchIsLoading}
               searchHandleResultSelect={this.handleResultSelect}
               searchOnClickHandler={this.searchOnClickHandler}
               handleSearchChange={this.handleSearchChange} />
            )}
          />
          <Route 
            path="/custom-order"
            exact
            render={props => (
              <CustomOrder {...props}
             
            addOrder={this.addCustomOrderHandler} 

            addSearch={this.addSearchHandler} 
            searchValue={this.state.searchValue}
            searchResults={this.state.searchResults}
            searchID={this.state.searchID}
            searchIsLoading={this.state.searchIsLoading}
            searchHandleResultSelect={this.handleResultSelect}
            searchOnClickHandler={this.searchOnClickHandler}
            handleSearchChange={this.handleSearchChange}
              />
            )}
            />
          <Route
            path="/delivery"
            exact
            render={props => (
              <DeliveryPage
                {...props}
                deliveryInfo={this.state.deliveryInfo}
                updateDelivery={this.deliveryInfoHandler}
              />
            )}
          />
          <Route path="/confirmation" exact render={props =>
             <ConfirmationOrder
               {...props}
               orderRecipe={this.orderRecipeHandler}
               orderAccepted={this.state.orderAccepted}
               orderLoaded={this.state.orderLoaded}
               mainRecipe={this.state.mainRecipe}
               customOrder={this.state.customOrder}
               deliveryInfo={this.state.deliveryInfo}
             />
           } />
          <Route path="/my-orders" exact render={props =>
            <MyOrders
              {...props}
            
            />
          } />

          <Route render={() => <h1> 404 Error </h1>} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
   return {
     onAddFavourite: (id) => dispatch({ type: actionTypes.ADD_REMOVE_FAVOURITE, id })
   }
};

export default connect(mapDispatchToProps)(App)
