import React from "react";

import { configure, shallow } from "enzyme";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";

import MenuBar from "./Menu";

configure({ adapter: new Adapter() });

describe("<Menu />", () => {
  it("should not show myOrders if not authenticated", () => {
    const wrapper = shallow(<MenuBar />);
    expect(wrapper.find(NavLink)).toHaveLength(4);
  });
});
