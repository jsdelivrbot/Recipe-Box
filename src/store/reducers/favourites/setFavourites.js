import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  favourites: [],
  error: false
}

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

    default: return state;
  }
};

export default setFavouritesReducer