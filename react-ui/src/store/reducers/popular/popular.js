import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  popularRecipes: [],
  error: false
}

const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POPULAR:
      return {
        ...state,
        popularRecipes: action.data,
        error: false
      };
    case actionTypes.SET_POPULAR_FAIL:
      return {
        ...state,
        error: true
      };

    default: return state;
  }
};

export default popularReducer