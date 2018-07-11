import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  idToken: null,
  localId: [],
  error: null,
  loading: false
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
        idToken,
        localId,
        error: null,
        loading: false
      };
    case actionTypes.AUTH_FAIL:
      const error = action.error;
      return {
        error,
        loading: false
      };

    case actionTypes.AUTH_LOGOUT: 
    return {
      idToken: null,
      localId: null
    }  
    default:
      return state;
  }
};

export default authReducer;
