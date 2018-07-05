import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  popularRecipes: []
}

const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR:
      return {
        ...state,
        popualrRecipes: action.data
      }

    default: return state;
  }
};

export default popularReducer