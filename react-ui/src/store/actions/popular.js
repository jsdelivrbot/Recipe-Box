import * as actionTypes from './actionTypes';

export const initPopular = data => {
  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/popular.json")
      .then(data => {
        return data.json();
      })
      .then(popularRecipes => dispatch(setPopular(popularRecipes)))
      .catch(response => dispatch(setPopularFailed()));
  };
};

const setPopular = data => {
  return {
    type: actionTypes.SET_POPULAR,
    data
  }
}
const setPopularFailed = () => {
  return {
    type: actionTypes.SET_POPULAR_FAIL,
  };
};