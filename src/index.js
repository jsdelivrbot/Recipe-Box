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
import topWeek from "./store/reducers/topWeek/topWeek";
import myOrders from "./store/reducers/myOrders/myOrders"
import auth from "./store/reducers/auth/auth";


import App from "./App";

const rootReducer = combineReducers({
  delivery,
  addRemoveFavourite,
  setFavourites,
  placeOrder,
  popular,
  topWeek,
  mainRecipe,
  myOrders,
  auth
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


1. myOrders deleteable and click for more info using routing
--aka when order is sent to firebase more info is added
4. Implement form validation eg email field -regex
5. Improve general styling
6. Delte recipe box container
7. Add favourits post and fetch - 
put logic in action creators
8. Ensure consistency

*/
