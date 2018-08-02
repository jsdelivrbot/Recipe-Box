import reducer from "./popular";
import * as actionTypes from "../../actions/actionTypes";

describe("popular reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      popularRecipes: [],
      error: false
    });
  });

  it("should show an error if popular cannot be fetched", () => {
    expect(
      reducer(
        {
          popularRecipes: []
        },
        {
          type: actionTypes.SET_POPULAR_FAILED
        }
      )
    ).toEqual({
      popularRecipes: [],
      error: true
    });
  });
});
