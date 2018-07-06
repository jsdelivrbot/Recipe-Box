import * as actionTypes from '../actions/actionTypes';

const initialState = {
  topWeek: [],
  error: false
}

const topWeekReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_WEEK:
      return {
        ...state,
        TopWeek: action.data,
        error: false
      };
    case actionTypes.SET_TOP_WEEK_FAILED:
      return {
        ...state,
        error: true
      };

    default: return state;
  }
};

export default topWeekReducer