import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import Recipe from './containers/recipeBox/Recipe';
import Confirm from './containers/order/Confirm';
import Menu from "./components/Menu";
import WhoWeAre from "./containers/whoWeAre/WhoWeAreGrid";

export default class App extends React.Component {
  render() {
    return (
  
        <div className="App">
          <Menu />
          <Switch>
          <Route path="/" exact component={Recipe} />
          <Route path="/team" exact component={WhoWeAre} />
          <Route path="/order" exact component={Confirm} />
          <Route render={() => <h1> 404 Error </h1>} />
          </Switch>
        </div>
    );
  }
}

