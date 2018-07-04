import * as actionTypes from '../actions/index';

const initialState = {
  deliveryInfo: []
};

const deliveryReducer = (state = initialState, action) => {
   switch (action.type) {
       case actionTypes.STORE_DELIVERY:
          return {
            ...state,
            deliveryInfo: action.deliveryInfo
          }


      default: return state;
   }
};

export default deliveryReducer
