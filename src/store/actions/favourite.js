import * as actionTypes from './actionTypes';
import axios from "../../components/axios-orders";


export const addRemoveFavourite = (id, favourites, popularRecipes) => {
  
  const popularRecipesSafe = [...this.state.popularRecipes];
  let favouritesSafe = [...this.state.favourites];
  const recipe = popularRecipesSafe.find(el => el.id === action.id);
  const alreadyThere = favouritesSafe.indexOf(recipe);

  if (alreadyThere === -1) {
    favouritesSafe.push(recipe);
  } else {
    const index = favouritesSafe.findIndex(el => el.id === action.id);
    favouritesSafe.splice(index, 1);
  }

  return dispatch => {
     dispatch(updateFavouritesLocal(favouritesSafe))
     dispatch(postFavouritesStart)
  };
};

const updateFavouritesLocal = favourites => {
  return {
    type: actionTypes.UPDATE_FAVOURITES_LOCAL,
    favourites
  }
}


 const postFavouritesStart = favourites => {
  return dispatch => {
    axios
      .post('favourites.json', favourites)
      .then(response => {
        if (response !== undefined) {
          dispatch(postFavouritesSuccess(response))
        }
      })
      .catch(error => {
        dispatch(postFavouritesFail(error))
      });
  };
};

const postFavouritesSuccess = (favourites, id) => {
  return {
    type: actionTypes.POST_FAVOURITES_SUCCESS,
    favourites,
  };
};

 const postFavouritesFail = error => {
  return {
    type: actionTypes.POST_FAVOURITES_FAILED,
    error
  };
};

