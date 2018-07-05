import * as actionTypes from './actionTypes';

export const fetchPopular = data => {
  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/popular.json")
      .then(data => {
        return data.json();
      })
      .then(popularRecipes => dispatch(storePopular(popularRecipes)))
      .catch(response => console.log(response));

    dispatch(storePopular(data))
  }
}

const storePopular = data => {
  return {
    type: actionTypes.FETCH_POPULAR,
    data
  }
}