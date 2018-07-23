import * as actionTypes from "../actionTypes";
import axios from "../../../components/axios-orders";

export const purchaseOrderSuccess = (orderStatus, id) => {
  return {
    type: actionTypes.PURCHASE_ORDER_SUCCESS,
    orderStatus,
    id
  };
};

export const purchaseOrderFail = orderStatus => {
  return {
    type: actionTypes.PURCHASE_ORDER_FAIL,
    orderStatus
  };
};

export const purchaseOrderStart = (instructions, deliveryInfo, token) => {
  const price = "$20";
  const order = {
    instructions,
    price,
    deliveryInfo
  };

  return dispatch => {
    axios
      .post("orders.json?auth=" + token, order)
      .then(response => {
        if (response !== undefined) {
          const orderStatus = {
            orderLoaded: true,
            orderAccepted: true
          };
          dispatch(purchaseOrderSuccess(orderStatus));
        } else {
          const orderStatus = {
            orderLoaded: true,
            orderAccepted: false
          };
          dispatch(purchaseOrderFail(orderStatus));
        }
      })
      .catch(error => {
        const orderStatus = {
          orderLoaded: true,
          orderAccepted: false
        };
        dispatch(purchaseOrderFail(orderStatus));
      });
  };
};
