import * as actionTypes from "../actionTypes";

export const initFavourites = () => {

  return dispatch => {
    fetch("https://recipe-box-15453.firebaseio.com/favourites.json")
      .then(data => {
        return data.json();
      })
      .then(favourites => {
       
        let favArray;
        if (favourites == null) {
          favArray = [];
        } else {
          favArray = favourites;
        }
        dispatch(setFavourites(favArray))
      })
      .catch(response => dispatch(setFavouritesFailed));
     };
}
const setFavourites = favourites => {
  return {
    type: actionTypes.SET_FAVOURITES,
    favourites
  };
};

 const setFavouritesFailed = () => {
  return {
    type: actionTypes.SET_FAVOURITES_FAIL
  };
};
