import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  topWeek: [],
  topWeekIndiv: {},
  error: false
}

const topWeekReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_WEEK:
      return {
        ...state,
        topWeek: action.data,
        error: false
      };
    case actionTypes.SET_TOP_WEEK_FAILED:
    {
      const error = action.error;
      return {
        ...state,
        error
      };
    }
    case actionTypes.SET_TOP_WEEK_INDIV_SUCCESS:
      return {
        ...state,
        topWeekIndiv: action.mealInfo,
        error: false
      };
    case actionTypes.SET_TOP_WEEK_INDIV_FAILED:
     {
      const error = action.error;
      return {
        ...state,
        error
      };
     }
    default: return state;
  }
};

export default topWeekReducer