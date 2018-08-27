import reducer from "./mainRecipe";
import * as actionTypes from "../../actions/actionTypes";

describe("mainRecipe reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      mainRecipe: {
        title: "Chicken Curry",
        image_url:
          "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=980:*",
        ingredients: {},
        directions: "",
        description: ""
      },
      error: false
    });
  });
  it("should replace main Recipe ", () => {
    expect(
      reducer(
        {
          mainRecipe: {
            title: "Chicken Curry",
            image_url:
              "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/2048x1365/gallery-1501791674-delish-chicken-curry-horizontal.jpg?resize=980:*",
            ingredients: {},
            directions: "",
            description: ""
          },
          error: false
        },
        {
          type: actionTypes.REPLACE_MAIN,
          replacedMain: {
            header: "Rice",
            image_url: "www.google.com",
            directions: "Well done",
            ingredients: ["carrots"]
          }
        }
      )
    ).toEqual({
      mainRecipe: {
        title: "Rice",
        image_url: "www.google.com",
        directions: "Well done",
        ingredients: ["carrots"]
      }
    });
  });
});
