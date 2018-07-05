import * as actionTypes from '../../actions/index';

const initialState = {
  mainOrder: {}
};

const editMainReducer = (state = initialState, action) => {
  switch (action.type) {
     case actionTypes.EDIT_MAIN: 
      const { header, ingredients, directions } = action.editedInfo;
      const ingredientsString = JSON.stringify(ingredients, undefined, 2);
      return {
        mainRecipe: {
          header,
          ingredients,
          directions
        }
      }
 
    default: return state;
  }
};

export default editMainReducer