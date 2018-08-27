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
  it("should update favourite uploaded when favourite sent to firebase", () => {
    expect(
      reducer(
        {
          favourites: [],
          error: false,
          favouriteUploaded: false,
          popularRecipes: []
        },
        {
          type: actionTypes.POST_FAVOURITES_SUCCESS
        }
      )
    ).toEqual({
      favourites: [],
      error: false,
      favouriteUploaded: true,
      popularRecipes: []
    });
  });
});
