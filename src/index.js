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



/*
0. Add hearts to recipes -Done
0.5/ Add pseudoSelectors to icons and to buttons
1. Main recipe comes from a list from state.
2. Popular recipes come from a list from state.
3. Main recipe can be deleted and edited.
4. Can add a custom order
5. Responsive design -search bar and favourites text
6. Re-design main look with bullet points
7. Create favourite Modal
8. Add favourites to modal

9. Implement search from forkify
10. Add search results to main when clicked

11. Use firebase to store favourites





*/