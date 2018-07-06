import * as actionTypes from '../actions/actionTypes';

const initialState = {
  weekTop: [],
  error: false
}

const weekTopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WEEK_TOP:
      return {
        ...state,
        weekTop: action.data,
        error: false
      };
    case actionTypes.SET_WEEK_TOP_FAILED:
      return {
        ...state,
        error: true
      };

    default: return state;
  }
};

export default weekTopReducer