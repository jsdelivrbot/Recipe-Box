import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import GridLayout from './layout/GridLayout';
import Menu from './components/Menu';
class App extends React.Component {

  render () {
     return (
    <div className="App">
    <Menu />
    <GridLayout />
    </div>
  );
  }
 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
