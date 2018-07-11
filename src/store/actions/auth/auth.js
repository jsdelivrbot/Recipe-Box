import * as actionTypes from "../actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };

    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCM2xRuEw-SGGIaLRdEhFxKBOY6XUSteEY",
        authData
      )
      .then(response => {
        dispatch(authSuccess(response));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
