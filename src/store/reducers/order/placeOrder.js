import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  customOrder: {},
  chosenOrder: {},
  orderLoaded: false,
  orderAccepted: false
};

const placeOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_CUSTOM_ORDER:
      return {
        ...state,
        customOrder: action.order
      };

    case actionTypes.PURCHASE_ORDER_SUCCESS: {
      const { orderLoaded, orderAccepted } = action.orderStatus;

      return {
        ...state,
        orderLoaded,
        orderAccepted
      };
    }
    case actionTypes.PURCHASE_ORDER_FAILURE: {
      const { orderLoaded, orderAccepted } = action.orderStatus;
      return {
        ...state,
        orderLoaded,
        orderAccepted
      };
    }
    default:
      return state;
  }
};

export default placeOrderReducer;
