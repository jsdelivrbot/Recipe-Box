import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  favourites: [],
  error: false,
  favouriteUploaded: false,
  popularRecipes: []
};

const setFavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteUploaded: true,
        error: false
      };
    case actionTypes.SET_FAVOURITES_FAIL:
      let error = action.error;
      return {
        ...state,
        favouriteUploaded: false,
        error
      };
    case actionTypes.POST_FAVOURITES_SUCCESS:
      return {
        ...state,
        favouriteUploaded: true,
        error: false
      };
    case actionTypes.POST_FAVOURITES_FAIL:
      error = action.error;
      return {
        ...state,
        favouriteUploaded: false,
        error
      };
    case actionTypes.UPDATE_FAVOURITES_LOCAL:
      const favourites = action.favourites;
      return {
        ...state,
        favourites
      };
    default:
      return state;
  }
};

export default setFavouritesReducer;
