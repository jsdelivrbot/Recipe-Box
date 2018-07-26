import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import setFavourites from "./store/reducers/favourites/setFavourites";
import delivery from "./store/reducers/order/delivery";
import placeOrder from "./store/reducers/order/placeOrder";
import mainRecipe from "./store/reducers/mainRecipe/mainRecipe";
import popular from "./store/reducers/popular/popular";
import topWeek from "./store/reducers/topWeek/topWeek";
import myOrders from "./store/reducers/myOrders/myOrders";
import auth from "./store/reducers/auth/auth";

import App from "./App";

const rootReducer = combineReducers({
  delivery,
  setFavourites,
  placeOrder,
  popular,
  topWeek,
  mainRecipe,
  myOrders,
  auth
});

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
1. Retreive favourties from firebase
2. Confirmation page - conditional for own order or not
2. Improve general styling - make main page look better
3. Log-in problem - retreive only user order
4. Search throguh code= Ensure consistency

*/
