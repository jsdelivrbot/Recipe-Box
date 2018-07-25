import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  favourites: [],
  error: false,
  popularRecipes: []
};

const setFavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVOURITES:
      return {
        ...state,
        favourites: action.favArray,
        error: false
      };
    case actionTypes.SET_FAVOURITES_FAILED:
      return {
        ...state,
        error: true
      };
    case actionTypes.ADD_REMOVE_FAVOURITE:
      const popularRecipes = [...this.state.popularRecipes];
      let favourites = [...this.state.favourites];
      const recipe = popularRecipes.find(el => el.id === action.id);
      const alreadyThere = favourites.indexOf(recipe);

      if (alreadyThere === -1) {
        favourites.push(recipe);
      } else {
        const index = favourites.findIndex(el => el.id === action.id);
        favourites.splice(index, 1);
      }
      return {
        ...state,
        favourites
      };

    default:
      return state;
  }
};

export default setFavouritesReducer;
