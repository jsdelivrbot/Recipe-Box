import * as actionTypes from "../actions/actionTypes";

const initialState = {
  customOrder: {},
  chosenOrder: {}
};

const placeOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_CUSTOM_ORDER:
      return {
        ...state,
        customOrder: action.order
      };

    default:
      return state;
  }
};

export default placeOrderReducer;
