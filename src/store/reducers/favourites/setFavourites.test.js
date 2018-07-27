import reducer from "./setFavourites";
import * as actionTypes from "../../actions/actionTypes";

describe("setFavourites reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      favourites: [],
      error: false,
      favouriteUploaded: true,
      popularRecipes: []
    });
  });
});
