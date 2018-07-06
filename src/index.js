import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import setFavourites from "./store/reducers/favourites/setFavourites";
import addRemoveFavourite from "./store/reducers/favourites/addRemoveFavourite";
import delivery from "./store/reducers/order/delivery";
import placeOrder from "./store/reducers/order/placeOrder";
import mainRecipe from "./store/reducers/mainRecipe/mainRecipe";
import popular from "./store/reducers/popular/popular";

import App from "./App";

const rootReducer = combineReducers({
  delivery,
  addRemoveFavourite,
  setFavourites,
  placeOrder,
  popular,
  mainRecipe
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <App />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

/*

1. Instead of showing main recipe- use routing to show and use body to 
    display extra info etc - Use routing parameters
    e.g a group of 10 recipes with thumbnail images
2. Move things which should go into redux - into redux
3. Get and store favourites on firebase
4. Implement form validation eg email field
5. Improve general styling
6. Delte recipe box container
7. Add favourits post and fetch - 
put logic in action creators
*/
