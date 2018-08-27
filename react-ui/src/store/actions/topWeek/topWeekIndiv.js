import * as actionTypes from '../actionTypes';

export const topWeekIndivSuccess = (mealInfo) => {
  return {
    type: actionTypes.SET_TOP_WEEK_INDIV_SUCCESS,
    mealInfo,
  };
};

export const topWeekIndivFail = error => {
  return {
    type: actionTypes.SET_TOP_WEEK_INDIV_FAIL,
    error
  };
};

export const initTopWeekIndiv = (id) => {
  return dispatch => {
    fetch(`https://recipe-box-15453.firebaseio.com/topWeek/${id}.json`)
      .then(data => {
        return data.json();
      })
      .then(mealInfo => {
        dispatch(topWeekIndivSuccess(mealInfo))
      })
      .catch(response => topWeekIndivFail(response));
  };
};