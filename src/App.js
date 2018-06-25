import React from "react";
import ReactDOM from "react-dom";
import { Route, } from "react-router-dom";
import "./styles.css";
import Recipe from './containers/recipeBox/Recipe';
import RecipeBox from "./containers/recipeBox/RecipeBox";
import Menu from "./components/Menu";
import WhoWeAre from "./containers/whoWeAre/WhoWeAreGrid";

export default class App extends React.Component {
  render() {
    return (
     
        <div className="App">
          <Menu />
          <WhoWeAre />
          
        </div>
    );
  }
}

