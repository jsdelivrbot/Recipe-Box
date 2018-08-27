import * as actionTypes from './actionTypes';

export const addDelivery = deliveryInfo => {
  return {
    type: actionTypes.STORE_DELIVERY,
    deliveryInfo,
  }
};