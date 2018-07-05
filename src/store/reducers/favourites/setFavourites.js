import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  favouriteRecipes: [],
  error: false
}

const setFavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVOURITES:
      return {
        ...state,
        favouriteRecipes: action.favArray,
        error: false
      };
    case actionTypes.SET_FAVOURITES_FAILED:
      return {
        ...state,
        error: true
      };

    default: return state;
  }
};

export default setFavouritesReducer