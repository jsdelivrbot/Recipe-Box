import React from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import R from "ramda";
import axios from "./components/axios-orders";
import "./styles.css";

import getResults from "./components/search/getResults";
import getRecipe from "./components/search/getRecipe";
import Recipe from "./containers/recipeBox/Recipe";
import ReviewInitial from "./containers/order/ReviewInitial";
import CustomOrder from "./containers/order/Custom/CustomOrder";
import Menu from "./components/Menu";
import WhoWeAre from "./containers/whoWeAre/WhoWeAreGrid";

import DeliveryPage from "./containers/order/Delivery/DeliveryPage";
import ConfirmationOrder from "./containers/order/Confirmation/ConfirmationOrder";
import MyOrders from "./containers/myOrders/MyOrders";
import WeekTopPage from "./components/weekTop/WeekTopPage";
import AuthPage from "./containers/auth/AuthPage";
import Logout from "./containers/auth/logout/Logout";

import * as actionCreators from "./store/actions/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRecipeHandler = this.deleteRecipeHandler.bind(this);
    this.addSearchHandler = this.addSearchHandler.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.searchOnClickHandler = this.searchOnClickHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  state = {
    editMode: false,
    orderAccepted: false,
    orderLoaded: false,
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
    this.props.onInitIngredients();
    this.props.onInitDirections();
    this.props.onInitPopular();
    this.props.onInitTopWeek();
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

        recipe.then(data => {
          const recipe = data.data.recipe;
          this.setState({ mainRecipe: recipe });
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

  addSearchHandler(searchData) {
    const mainRecipe = searchData.data.recipe;
    this.setState({ mainRecipe });
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ searchValue: result.title });
  };

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

  deleteRecipeHandler() {
    const popularRecipes = [...this.props.popularRecipes];

    // Use Ramda to sort popular recipes by id
    const sortById = R.sortBy(R.compose(R.prop("id")));
    const sorted = sortById(popularRecipes);
    const recipeToReplace = sorted[sorted.length - 1];

    // Update redux with the new main recipe
    this.props.onReplaceMain(recipeToReplace);
  }

  render() {
    return (
      <div className="App">
        <Route render={props => <Menu token={this.props.token} {...props} />} />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Recipe
                {...props}
                popularRecipes={this.props.popularRecipes}
                mainRecipe={this.props.mainRecipe}
                addRecipe={data => this.addRecipeHandler(data)}
                addFav={id =>
                  this.props.onAddFavourite(
                    id,
                    this.props.favourites,
                    this.props.popularRecipes
                  )
                }
                addSearch={this.addSearchHandler}
                deleteRecipe={this.deleteRecipeHandler}
                editRecipe={this.editRecipeHandler}
                topWeek={this.props.topWeek}
                handleWeekTopClick={this.handleWeekTopClick}
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
              <ReviewInitial
                {...props}
                mainRecipe={this.props.mainRecipe}
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
            path="/custom-order"
            exact
            render={props => (
              <CustomOrder
                {...props}
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
          <Route
            path="/confirmation"
            exact
            render={props => (
              <ConfirmationOrder
                {...props}
                orderAccepted={this.state.orderAccepted}
                orderLoaded={this.state.orderLoaded}
              />
            )}
          />
          <Route
            path="/my-orders"
            exact
            render={props => <MyOrders {...props} />}
          />
          <Route path="/top:id" exact component={WeekTopPage} />
          <Route path="/auth" exact component={AuthPage} />
          <Route path="/logout" exact component={Logout} />
          <Route render={() => <h1> 404 Error </h1>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainRecipe: state.mainRecipe.mainRecipe,
    popularRecipes: state.popular.popularRecipes,
    favourites: state.setFavourites.favourites,
    topWeek: state.topWeek.topWeek,
    token: state.auth.idToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddFavourite: (id, favourites, popularRecipes) =>
      dispatch(
        actionCreators.addRemoveFavourite(id, favourites, popularRecipes)
      ),
    onFetchPopular: data => dispatch(actionCreators.fetchPopular(data)),
    onEditMain: data => dispatch(actionCreators.editMain(data)),
    onReplaceMain: newMain => dispatch(actionCreators.replaceMain(newMain)),
    onInitIngredients: () => dispatch(actionCreators.initIngredients()),
    onInitPopular: () => dispatch(actionCreators.initPopular()),
    onInitDirections: () => dispatch(actionCreators.initDirections()),
    onInitTopWeek: () => dispatch(actionCreators.initTopWeek())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
