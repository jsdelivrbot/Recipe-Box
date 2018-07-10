import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  myOrders: {},
  error: null
};

const myOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case actionTypes.SET_MYORDERS_SUCCESS:
     
        const myOrders = action.myOrders;
        return {
          ...state,
          myOrders
        };
      
    case actionTypes.SET_MYORDERS_FAILURE:
      {
        const error = action.error;
        return {
          ...state,
          error
        };
      }

    default:
      return state;
  }
};

export default myOrdersReducer;