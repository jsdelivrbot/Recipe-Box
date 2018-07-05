import * as actionTypes from "../actions/index";

const initialState = {
  mainOrder: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        mainOrder: {
          ingredients: action.ingredients
        }
      };

    case actionTypes.SET_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
