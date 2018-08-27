import React from "react";

import { configure, shallow } from "enzyme";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";

import MenuBar from "./Menu";

configure({ adapter: new Adapter() });

describe("<Menu />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MenuBar />);
  });
  it("should not show myOrders if not authenticated", () => {
    wrapper.setProps({ token: null });
    expect(wrapper.find(Menu.Item)).toHaveLength(4);
  });
  it("should show myOrders if authenticated", () => {
    wrapper.setProps({ token: true });
    expect(wrapper.find(Menu.Item)).toHaveLength(5);
  });
});
