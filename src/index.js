import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import R from "ramda";
import axios from './components/axios-orders'
import "./styles.css";
import GridLayout from "./layout/GridLayout";
import Menu from "./components/Menu";
import getResults from "./components/search/getResults";
import getRecipe from './components/search/getRecipe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRecipeHandler = this.deleteRecipeHandler.bind(this);
    this.editRecipeHandler = this.editRecipeHandler.bind(this);
    this.addFavHandler = this.addFavHandler.bind(this);
    this.orderRecipeHandler = this.orderRecipeHandler.bind(this);
    this.deliveryInfoHandler = this.deliveryInfoHandler.bind(this)
  }

  state = {
    mainRecipe: {
      title: "Chicken Curry",
      image_url:
        "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=980:*",
      ingredients: `2 tbsp. extra-virgin olive oil,
                  1 medium yellow onion, chopped,
                  2 lb. boneless skinless chicken breasts,
                  3 cloves garlic, minced,
                  1 tbsp. freshly grated ginger,
                  1 tsp. paprika,
                  1 tsp. turmeric,
                  1 tsp. coriander,
                  1/2 tsp. cumin`,
      directions: `In a large pot over medium-high heat, heat oil. Add onion and cook until softened and lightly golden, 5 to 7 minutes. Add chicken and sear until golden on all sides, 5 minutes more. Stir in garlic and ginger and cook until fragrant, 2 minutes more.
                  Coat aromatics in spices and cook until very fragrant, less than a minute more. Pour in tomatoes and chicken broth and bring to a simmer.
                  Stir in heavy cream, then season with salt and pepper. Simmer until chicken pieces are cooked through and tender, about 10 minutes.
                   Garnish with cilantro and serve over rice or with naan, with lemon wedges for squeezing.`
    },
    popularRecipes: [
      {
        id: 0,
        header: "Chicken Curry",
        description: "Making Indian at home doesnt have to be intimidating.",
        ingredients: "",
        directions: ""
      },
      {
        id: 1,
        header: "Cloud Bread",
        description:
          "Light and fluffy, this bread substitute lives up to its name.",
        ingredients: `oil or butter for greasing,
4 eggs

, separated
50g cream cheese,
¼ tsp cream of tartar,
½ tsp nigella seeds`,
        directions: `Heat oven to 150C/130C fan/gas 2 and line 2 large baking sheets with baking paper, then grease well with butter or oil.

In a large bowl and using electric beaters, whisk the egg whites together until stiff peaks form. You should be able to carefully turn the bowl upside down without it falling out.

In another bowl, put the egg yolks, cream cheese and cream of tartar 
then whisk together (no need to wash the beaters first) until smooth, 
pale and frothy. Next, fold the egg whites, a spoonful at a time into 
the yolk mixture, be as gentle as you can with this so you don’t knock out too much of the air and finally fold in the nigella seeds and season with salt and pepper.`
      },
      {
        id: 2,
        header: "Fish Pie",
        description:
          "Generous chunks of fish in a creamy sauce made with a few secret ingredients, topped with buttery mash and a crispy garnish",
        ingredients: `150g butter

1 shallot finely chopped,
400g shell-on raw prawns- peeled= heads and shells kept for stock,
400g smoked haddock,

 skinned and trimmed (reserve these), flesh diced into large chunks,
1 bay leaf,
1 star anise,

small splash Pernod (optional),
150ml white wine,
1.2l whole milk`,
        directions: `Heat oven to 220C/200C fan/gas 8. 
        Bring the potatoes to the boil in a large pan of water,
         add the eggs and simmer for 8 mins. Scoop out the eggs, 
         put in a bowl of cold water to cool, then peel, halve and push 
         into the sauce.`
      }
    ],
    favourites: [],
    editMode: false,
    orderLoading: false,
    deliveryInfo: {},
    searchResults: [],
    searchValue: "",
    searchIsLoading: false,
    searchID: "",

  };

  deliveryInfoHandler(deliveryInfo) {
      this.setState({
        deliveryInfo
      })
  }

  orderRecipeHandler() {
    const ingredients = {...this.state.mainRecipe.ingredients};
    const price = '$20';
    const order = {
      ingredients,
      price,
      customer: {
        name: 'Max',
        address: {
          street: '2 Anshaw Close',
          town: 'bolton',
          postcode: 'BL7'
        },
        email: 'test@test.com',
        deliverMethod: 'fastest'
      }
    }
    console.log('ordering')
    axios.post('orders.json', order)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  addRecipeHandler(recipe) {
    let popularRecipes = [...this.state.popularRecipes];
    const findID = popularRecipes[popularRecipes];
    popularRecipes.push(recipe);
    this.setState({ popularRecipes: popularRecipes });
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

  deleteRecipeHandler() {
    const popularRecipes = [...this.state.popularRecipes];
    const sortById = R.sortBy(R.compose(R.prop("id")));
    const sorted = sortById(popularRecipes);
    const recipeToReplace = sorted[sorted.length - 1];
 
    const { header, directions, ingredients } = recipeToReplace;
    this.setState({
      mainRecipe: {
        header,
        directions,
        ingredients
      }
    });
  }

  addFavHandler(e, id) {
    const popularRecipes = [...this.state.popularRecipes];
    let favourites = [...this.state.favourites];
    const recipe = popularRecipes.find(el => el.id === id);
    const alreadyThere = favourites.indexOf(recipe);

    if (alreadyThere === -1) {
      favourites.push(recipe);
    } else {
      const index = favourites.findIndex(el => el.id === id);
      favourites.splice(index, 1);
    }

    this.setState({
      favourites
    });
  }

  searchOnClickHandler() {
    setTimeout(() => {
      const recipeName = this.state.searchValue;
      const recipes = [...this.state.searchResults];
      const recipeObj = recipes.find(el => el.title === recipeName);
     
      if (recipeObj != undefined) {
        const id = recipeObj.recipe_id;      
        const recipe = getRecipe(id);    
        recipe.then(recipe => {      
          this.setState({
            mainRecipe: recipe.data.recipe
          });
        });
      }
    }, 300);
  }
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ seardchIsLoading: false, searchResults: [], searchValue: "" });

  handleResultSelect = (e, { result }) => this.setState({ searchValue: result.title });

  handleSearchChange = (e) => {
    const searchValue = e.target.value;
    this.setState({ 
      searchIsLoading: true, 
      searchValue 
      });
  
    setTimeout(() => {
      if (this.state.searchValue.length < 1) return this.resetComponent();
      const source = getResults(searchValue);
      source.then(data => {
        this.setState({
          searchIsLoading: false,
          searchResults: data
        });
      });
    }, 300);
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <GridLayout
          mainRecipe={this.state.mainRecipe}
          popularRecipes={this.state.popularRecipes}
          favourites={this.state.favourites}
       
          addRecipe={data => this.addRecipeHandler(data)}
          deleteOnClick={this.deleteRecipeHandler}
          editOnClick={this.editRecipeHandler}
          addFav={this.addFavHandler}

          orderRecipe={this.orderRecipeHandler}
          updateDelivery={this.deliveryInfoHandler}
          deliveryInfo={this.state.deliveryInfo}

          searchValue={this.state.searchValue}
          searchResults={this.state.searchResults}
          searchID={this.state.searchID}
          searchIsLoading={this.state.searchIsLoading}
          searchHandleResultSelect={this.handleResultSelect.bind(this)}
          searchOnClickHandler={this.searchOnClickHandler.bind(this)}
          handleSearchChange={this.handleSearchChange.bind(this)}
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
3. Main recipe can be deleted and edited. - Done
4. Can add a custom order -Done
4.5. Display Add custom order message when form is sent -Done
5. Responsive design -search bar and favourites text - Done
6. Re-design main look with bullet points - Done
7. Create favourite Modal - Done
8. Add favourites to modal - Done

9. Implement search from forkify - Done
9.5 Reduce lsit of results
10. Add search results to main when clicked - Done

11. Use firebase to store favourites





*/
