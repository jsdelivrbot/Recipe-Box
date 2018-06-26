import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import Recipe from "./containers/recipeBox/Recipe";
import ReviewInitial from "./containers/order/ReviewInitial";
import Menu from "./components/Menu";
import WhoWeAre from "./containers/whoWeAre/WhoWeAreGrid";
import axios from "./components/axios-orders";
import R from 'ramda';
import DeliveryPage from './components/mainView/orders/DeliveryPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRecipeHandler = this.deleteRecipeHandler.bind(this);
    this.editRecipeHandler = this.editRecipeHandler.bind(this);
    this.addFavHandler = this.addFavHandler.bind(this);
    this.orderRecipeHandler = this.orderRecipeHandler.bind(this);
    this.deliveryInfoHandler = this.deliveryInfoHandler.bind(this);
    this.addSearchHandler = this.addSearchHandler.bind(this);
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
      directions: ""
    },
    popularRecipes: [],
    favourites: [],
    editMode: false,
    orderAccepted: false,
    orderLoaded: false,
    deliveryInfo: {},
    error: null
  };

  componentDidMount() {
    this.reqInterceptor = axios.interceptors.request.use(req => {
      this.setState({ error: null });
    });
    this.resInterceptor = axios.interceptors.response.use(null, error => {
      this.setState({ error: error });
    });

    fetch("https://recipe-box-15453.firebaseio.com/ingredients.json")
      .then(data => {
        return data.json();
      })
      .then(ingredients => {
        const mainRecipe = {...this.state.mainRecipe};
        mainRecipe.ingredients = ingredients;
        this.setState({
          mainRecipe
        })
      } 
      )
      .catch(response => console.log(response));

    fetch("https://recipe-box-15453.firebaseio.com/directions/main.json")
      .then(data => {
        return data.json();
      })
      .then(directions => {
         const mainRecipe ={...this.state.mainRecipe};
         mainRecipe.directions = directions;
         this.setState({
          mainRecipe
        })
      }
       
      )
      .catch(response => console.log(response));

    fetch('https://recipe-box-15453.firebaseio.com/popular.json').then(data => {
      return data.json()
    }).then(popularRecipes => this.setState({ popularRecipes }))
      .catch(response => console.log(response))  

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
      
        this.setState({
          orderLoaded: true,
          orderAccepted: true
        });
      })
      .catch(error => {
        console.log(error);
 
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
    const ingredientsString = JSON.stringify(ingredients, undefined , 2)

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
    console.log(recipeToReplace)
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
    console.log(recipe)
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

  addSearchHandler(searchData) {
    const mainRecipe = searchData.data.recipe;
     this.setState({ mainRecipe })  
  }

  render() {
    const state = { ...this.state };
    const mainRecipe = { ...this.state.mainRecipe };

    return (
      <div className="App">
        <Menu />
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
                addFav={this.addFavHandler}
                addSearch={this.addSearchHandler}
                deleteRecipe={this.deleteRecipeHandler}
                editRecipe={this.editRecipeHandler}
              />
            )}
          />
          <Route path="/team" exact component={WhoWeAre} />
          <Route path="/order" exact render={props =>
            <ReviewInitial  
              {...props}            
              mainRecipe={mainRecipe}
           />} />
           <Route path="/delivery" exact render={props =>
           <DeliveryPage
              {...props} 
                 deliveryInfo={this.state.deliveryInfo}
                 updateDelivery={this.deliveryInfoHandler}
           />
           } />
           {/*<Route path="/confirmation" exact render={props =>
             <ConfirmationOrder
               orderRecipe={this.orderRecipeHandler}
               orderAccepted={this.state.orderAccepted}
               orderLoaded={this.state.orderLoaded}
             />
           } />*/}

          <Route render={() => <h1> 404 Error </h1>} />
        </Switch>
      </div>
    );
  }
}
