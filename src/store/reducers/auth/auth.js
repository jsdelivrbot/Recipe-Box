import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  idToken: null,
  localId: [],
  error: null,
  loading: false,
  redirectUrl: "/"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      const { idToken, localId } = action.authData;
      return {
        ...state,
        idToken,
        localId,
        error: null,
        loading: false
      };
    case actionTypes.AUTH_FAIL:
      const error = action.error;
      return {
        ...state,
        error,
        loading: false
      };

    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        idToken: null,
        localId: null
      };

    case actionTypes.AUTH_REDIRECT:
      return {
        ...state,
        redirectUrl: action.url
      };
    default:
      return state;
  }
};

export default authReducer;
