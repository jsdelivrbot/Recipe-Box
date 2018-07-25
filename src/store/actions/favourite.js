import * as actionTypes from "./actionTypes";
import axios from "../../components/axios-orders";

export const addRemoveFavourite = (e, id, favourites, popularRecipes) => {
  const popularRecipesSafe = [...popularRecipes];
  let favouritesSafe = [...favourites];
  const recipe = popularRecipesSafe.find(el => el.id === id);
  const alreadyThere = favouritesSafe.indexOf(recipe);

  if (alreadyThere === -1) {
    favouritesSafe.push(recipe);
  } else {
    const index = favouritesSafe.findIndex(el => el.id === id);
    favouritesSafe.splice(index, 1);
  }

  return dispatch => {
    dispatch(updateFavouritesLocal(favouritesSafe));
    dispatch(postFavouritesStart(favouritesSafe));
  };
};

const updateFavouritesLocal = favourites => {
  return {
    type: actionTypes.UPDATE_FAVOURITES_LOCAL,
    favourites
  };
};

const postFavouritesStart = favourites => {
  return dispatch => {
    axios
      .post("favourites.json", favourites)
      .then(response => {
        if (response !== undefined) {
          dispatch(postFavouritesSuccess(response));
        }
      })
      .catch(error => {
        dispatch(postFavouritesFail(error));
      });
  };
};

const postFavouritesSuccess = () => {
  return {
    type: actionTypes.SET_FAVOURITES_SUCCESS
  };
};

const postFavouritesFail = error => {
  return {
    type: actionTypes.SET_FAVOURITES_FAILED,
    error
  };
};

export const initFavourites = () => {
  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/favourites.json")
      .then(data => {
        return data.json();
      })
      .then(ingredients => {
        dispatch(updateFavouritesLocal(favourites));
      })
      .catch(error => dispatch(postFavouritesFail(error)));
  };
};
