import * as actionTypes from '../../actions/index';

const initialState = {
  mainOrder: {}
};

const replaceMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REPLACE_MAIN:
      const { header, directions, ingredients } = action.newMain;
      return {
        mainOrder: {
          header,
          directions,
          ingredients
        }
      }
     
    default: return state;
  }
};

export default replaceMainReducer