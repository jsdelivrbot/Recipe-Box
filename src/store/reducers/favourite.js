import * as actionTypes from '../actions/index';

const initialState = {
  favourtes: []
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {

    default: return state;
  } 
};

export default favouriteReducer