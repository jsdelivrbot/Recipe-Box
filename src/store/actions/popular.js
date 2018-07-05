import * as actionTypes from './actionTypes';

export const fetchPopular = data => {
  return dispatch => {
    dispatch(storePopular(data))
  }
}

const storePopular = data => {
  return {
    type: actionTypes.FETCH_POPULAR,
    data
  }
}