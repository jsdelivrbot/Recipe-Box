import * as actionTypes from '../actionTypes';

export const editMain = (editedInfo) => {
  return {
    type: actionTypes.EDIT_MAIN,
    editedInfo
  }
} 