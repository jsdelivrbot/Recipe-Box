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
    case actionTypes.UPDATE_FAVOURITES_LOCAL:
      const favourites = action.favourites;
      console.log(favourites);
      return {
        ...state,
        favourites
      };
    default:
      return state;
  }
};

export default setFavouritesReducer;
