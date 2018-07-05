import * as actionTypes from '../actionTypes';

export const replaceMain = (replacedMain) => {
  return {
    type: actionTypes.REPLACE_MAIN,
    replacedMain
  }
}; 