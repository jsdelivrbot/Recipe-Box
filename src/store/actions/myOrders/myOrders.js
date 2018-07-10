import * as actionTypes from '../actionTypes';

export const myOrdersSuccess = (myOrders) => {

  return {
    type: actionTypes.SET_MYORDERS_SUCCESS,
    myOrders,  
  };
};

export const myOrdersFail = error => {
  return {
    type: actionTypes.SET_MYORDERS_FAIL,
     error
  };
};

export const initMyOrders = () => {
 
  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/orders.json")
    .then(data => {
      return data.json();
    })
    .then(orders => {
        dispatch(myOrdersSuccess(orders))
    })
    .catch(response => myOrdersFail(response));
  };
};