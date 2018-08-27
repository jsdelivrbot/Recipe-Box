import reducer from "./myOrders";
import * as actionTypes from "../../actions/actionTypes";

describe("myOrder reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      myOrders: {},
      error: undefined
    });
  });

  it("should show order objects", () => {
    expect(
      reducer(
        {
          myOrders: {},
          error: undefined
        },
        {
          type: actionTypes.SET_MYORDERS_SUCCESS,
          myOrders: [{}, {}, {}]
        }
      )
    ).toEqual({
      myOrders: [{}, {}, {}]
    });
  });
});
