import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

class Index extends React.Component {

render() {
 return  (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>

  );
}

}
     

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

/*
0. Add hearts to recipes -Done
0.5/ Add pseudoSelectors to icons and to buttons - Done
1. Main recipe comes from a list from state. - Done
2. Popular recipes come from a list from state. - Done
3. Main recipe can be deleted and edited. - Done
4. Can add a custom order -Done
4.5. Display Add custom order message when form is sent -Done
5. Responsive design -search bar and favourites text - Done
6. Re-design main look with bullet points - Done
7. Create favourite Modal - Done
8. Add favourites to modal - Done
9. Implement search from forkify - Done
10. Add search results to main when clicked - Done

9.5 Reduce lsit of results
11. Use firebase to store favourites
12. Fix axios get request - Done
13. Instead of showing main recipe- use routing to show and use body to 
    display extra info etc - Use routing parameters
    e.g a group of 10 recipes with thumbnail images


Checkout 

1. Fix mainView routing problem
2. Transfer order form to own container and state
3. Delivery form can still be a modal which can be used in two places

*/
