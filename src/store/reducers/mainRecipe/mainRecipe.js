import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  mainRecipe: {
    title: "Chicken Curry",
    image_url:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=980:*",
    ingredients: {},
    directions: "",
    description: ""
  },
  error: false
};

const mainRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INGREDIENTS: {
      const mainRecipe = { ...state.mainRecipe };
      return {
        ...state,
        mainRecipe: {
          ...mainRecipe,
          ingredients: action.ingredients
        },
        error: false
      };
    }
    case actionTypes.SET_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };

    case actionTypes.SET_DIRECTIONS: {
      const mainRecipe = { ...state.mainRecipe };
      return {
        ...state,
        mainRecipe: {
          ...mainRecipe,
          directions: action.directions
        },
        error: false
      };
    }
    case actionTypes.SET_DIRECTIONS_FAILED:
      return {
        ...state,
        error: true
      };

    case actionTypes.EDIT_MAIN: {
      let { header, ingredients, directions } = action.editedInfo;
      return {
        mainRecipe: {
          title: header,
          ingredients,
          directions
        }
      };
    }
    case actionTypes.REPLACE_MAIN: {
      const {
        header,
        directions,
        ingredients,
        image_url
      } = action.replacedMain;
      return {
        mainRecipe: {
          title: header,
          directions,
          ingredients,
          image_url
        }
      };
    }
    default:
      return state;
  }
};

export default mainRecipeReducer;
