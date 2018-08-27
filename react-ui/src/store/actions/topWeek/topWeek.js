import * as actionTypes from '../actionTypes';

export const initTopWeek = data => {
  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/topWeek.json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        if (data != null) {
          dispatch(setTopWeek(data))
        } else {
          dispatch(setTopWeekFailed())
        }        
      })
      .catch(response => dispatch(setTopWeekFailed()));
  };
};

const setTopWeek = data => {
  return {
    type: actionTypes.SET_TOP_WEEK,
    data
  }
}
const setTopWeekFailed = () => {
  return {
    type: actionTypes.SET_TOP_WEEK_FAIL,
  };
};