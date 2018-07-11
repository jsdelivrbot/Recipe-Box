import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  token: null,
  userId: [],
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
    console.log(action)
      const token = action.authData.idToken;
      const userId = action.authData.localId;
      return {
        token,
        userId,
        error: null,
        loading: false
      };
    case actionTypes.AUTH_FAIL:
      const error = action.error;
      return {
        error,
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
