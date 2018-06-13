import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import GridLayout from './layout/GridLayout';
import Menu from './components/Menu';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.deleteRecipeHandler = this.deleteRecipeHandler.bind(this);
    this.editRecipeHandler = this.editRecipeHandler.bind(this);
  }
  

 state = {
   mainRecipe: {
    header: 'Chicken Curry',
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
      directions: `In a large pot over medium-high heat, heat oil. Add onion and cook until softened and lightly golden, 5 to 7 minutes. Add chicken and sear until golden on all sides, 5 minutes more. Stir in garlic and ginger and cook until fragrant, 2 minutes more.
                  Coat aromatics in spices and cook until very fragrant, less than a minute more. Pour in tomatoes and chicken broth and bring to a simmer.
                  Stir in heavy cream, then season with salt and pepper. Simmer until chicken pieces are cooked through and tender, about 10 minutes.
                   Garnish with cilantro and serve over rice or with naan, with lemon wedges for squeezing.`,
   },
   popularRecipes: [{
     header: 'Chicken Curry',
     description: 'Making Indian at home doesnt have to be intimidating.'
   }, {
     header: 'Cloud Bread',
     description: '>Light and fluffy, this bread substitute lives up to its name.'
   },
   {
     header: 'Fish Pie',
     description: 'Generous chunks of fish in a creamy sauce made with a few secret ingredients, topped with buttery mash and a crispy garnish'
   }
   
   ],
   favourites: [],
   searchResults: [],
   editMode: false,
 }

   addRecipeHandler(recipe) {
     let popularRecipes = [...this.state.popularRecipes];
     popularRecipes.push(recipe);
     this.setState({ popularRecipes: popularRecipes })
   }

   editRecipeHandler(editedRecipe) {
      const { header, ingredients, directions } = editedRecipe;
      this.setState({
        mainRecipe: {
          header,
          ingredients,
          directions
        }
      });
   }

   deleteRecipeHandler(id) {

   }

  render () {
     return (
    <div className="App">
    <Menu />
   
    <GridLayout
    mainRecipe={this.state.mainRecipe}
    popularRecipes={this.state.popularRecipes}
    favourites={this.state.favourites}
    searchResults={this.state.searchResults}
    addRecipe={(data) => this.addRecipeHandler(data)}
    deleteOnClick={this.deleteRecipeHandler}
    editOnClick={this.editRecipeHandler}
    recipe={this.state.mainRecipe}
     />
    </div>
  );
  }
 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



/*
0. Add hearts to recipes -Done
0.5/ Add pseudoSelectors to icons and to buttons - Done
1. Main recipe comes from a list from state. - Done
2. Popular recipes come from a list from state. - Done
3. Main recipe can be deleted and edited.
4. Can add a custom order -Done
4.5. Display Add custom roder message when form is sent
5. Responsive design -search bar and favourites text
6. Re-design main look with bullet points
7. Create favourite Modal
8. Add favourites to modal

9. Implement search from forkify
10. Add search results to main when clicked

11. Use firebase to store favourites





*/