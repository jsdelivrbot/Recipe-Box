import * as actionTypes from './actionTypes';

export const addRemoveFavourite = (id) => {
  return {
    type: actionTypes.ADD_REMOVE_FAVOURITE,
    id
  }
}; 

