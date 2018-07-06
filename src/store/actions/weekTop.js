import * as actionTypes from './actionTypes';

export const initWeekTop = data => {
  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/weekTop.json")
      .then(data => {
        return data.json();
      })
      .then(weekTop => dispatch(setWeekTop(weekTop)))
      .catch(response => dispatch(setWeekTopFailed()));
  };
};

const setWeekTop = data => {
  return {
    type: actionTypes.SET_WEEK_TOP,
    data
  }
}
const setWeekTopFailed = () => {
  return {
    type: actionTypes.SET_WEEK_TOP_FAILED,
  };
};