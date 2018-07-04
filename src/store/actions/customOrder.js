import * as actionTypes from './actionTypes'

export const addCustomOrder = order => {
  return {
    type: actionTypes.STORE_CUSTOM_ORDER,
    order
  }
};