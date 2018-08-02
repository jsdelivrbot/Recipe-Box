import reducer from "./delivery";
import * as actionTypes from "../../actions/actionTypes";

describe("delivery reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      deliveryInfo: {}
    });
  });

  it("should show delivery information object", () => {
    expect(
      reducer(
        {
          deliveryInfo: {}
        },
        {
          type: actionTypes.STORE_DELIVERY,
          deliveryInfo: {
            name: "Oli",
            town: "Barcelona",
            street: "Escudellers"
          }
        }
      )
    ).toEqual({
      deliveryInfo: {
        name: "Oli",
        town: "Barcelona",
        street: "Escudellers"
      }
    });
  });
});
