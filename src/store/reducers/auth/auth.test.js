import reducer from "./auth";
import * as actionTypes from "../../actions/actionTypes";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      idToken: null,
      localId: [],
      error: null,
      loading: false,
      redirectUrl: "/"
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          idToken: null,
          localId: [],
          error: null,
          loading: false,
          redirectUrl: "/"
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          authData: {
            idToken: "token",
            localId: "id"
          }
        }
      )
    ).toEqual({
      idToken: "token",
      localId: "id",
      error: null,
      loading: false,
      redirectUrl: "/"
    });
  });
});
