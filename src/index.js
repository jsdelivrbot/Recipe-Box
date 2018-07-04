import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducers/reducer";
import favourite from "./store/reducers/favourite";
import delivery from "./store/reducers/delivery";
import placeOrder from "./store/reducers/placeOrder";

import App from "./App";

const rootReducer = combineReducers({
  reducer,
  delivery,
  favourite,
  placeOrder
})

const store = createStore(rootReducer);



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


*/
