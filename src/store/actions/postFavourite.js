import * as actionTypes from './actionTypes';
import axios from "../../../components/axios-orders";

export const postFavouriteSuccess = (favourite, id) => {
  
  return {
    type: actionTypes.POST_FAVOURITES_SUCCESS,
    favourite,
    id
  };
};

export const postFavouriteFail = error => {
  return {
    type: actionTypes.POST_FAVOURITES_FAILED  ,
    error
  };
};

export const postFavouriteStart = favourite => {
  return dispatch => {
    axios
      .post('favourites.json', favourite)
      .then(response => {     
        if (response !== undefined) {
          dispatch(postFavouriteSuccess(response))
        } 
      })
      .catch(error => {
        dispatch(postFavouriteFail(error))     
      });
    };
  };
