import * as actionTypes from './actionTypes';

const addRemoveFavourite = (id) => {
  return {
    type: actionTypes.ADD_REMOVE_FAVOURITE,
    id
  }
}; 

export default addRemoveFavourite;