import React from "react";
import ReactDOM from "react-dom";
import RecipeBox from './containers/RecipeBox';
import "./styles.css";
class App extends React.Component {


  render() {
    return (
      <div className='App'>
        <RecipeBox />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);