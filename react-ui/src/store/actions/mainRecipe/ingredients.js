import * as actionTypes from "../actionTypes";

export const initIngredients = () => {


  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/ingredients.json")
      .then(data => {
        return data.json();
      })
      .then(ingredients => {  
           
        dispatch(setIngredients(ingredients));
      })
      .catch(error => dispatch(setIngredientsFailed()))
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  };
};

export const setIngredientsFailed = () => {
  return {
    type: actionTypes.SET_INGREDIENTS_FAIL
  };
};
