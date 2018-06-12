import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import GridLayout from './layout/GridLayout';
import Menu from './components/Menu';
class App extends React.Component {

 state = {
   mainRecipe: {
    title: 'Chicken Curry',
    image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=980:*',
    ingredients: `2 tbsp. extra-virgin olive oil
                  1 medium yellow onion, chopped
                  2 lb. boneless skinless chicken breasts
                  3 cloves garlic, minced
                  1 tbsp. freshly grated ginger
                  1 tsp. paprika
                  1 tsp. turmeric
                  1 tsp. coriander
                  1/2 tsp. cumin`,
      direction: `In a large pot over medium-high heat, heat oil. Add onion and cook until softened and lightly golden, 5 to 7 minutes. Add chicken and sear until golden on all sides, 5 minutes more. Stir in garlic and ginger and cook until fragrant, 2 minutes more.
                  Coat aromatics in spices and cook until very fragrant, less than a minute more. Pour in tomatoes and chicken broth and bring to a simmer.
                  Stir in heavy cream, then season with salt and pepper. Simmer until chicken pieces are cooked through and tender, about 10 minutes.
                   Garnish with cilantro and serve over rice or with naan, with lemon wedges for squeezing.`,
   },
   popularRecipes: [],
   favourites: [],
   searchResults: []
 }

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
0.5/ Add pseudoSelectors to icons and to buttons - Done
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