import * as actionTypes from "../actionTypes";

export const initDirections = () => {

  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/directions/main.json")
      .then(data => {
        return data.json();
      })
      .then(directions => {
           dispatch(setDirections(directions));
      })
      .catch(response => dispatch(setDirectionsFailed()));
  }
};

export const setDirections = directions => {
  return {
    type: actionTypes.SET_DIRECTIONS,
    directions
  };
};

export const setDirectionsFailed = () => {
  return {
    type: actionTypes.SET_DIRECTIONS_FAIL
  };
};