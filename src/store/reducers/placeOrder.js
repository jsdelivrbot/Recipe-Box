import * as actionTypes from '../actions/index';

const initialState = {
  customOrder: null,
  chosenOrder: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_CUSTOM_ORDER:
      return {
        ...state,
        customOrder: action.order
      }
    
    default: return state;
  }
};

export default reducer