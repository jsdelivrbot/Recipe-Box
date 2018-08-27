import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WhoWeAre from "./WhoWeAreGrid";
import { Image, Message } from "semantic-ui-react";

configure({ adapter: new Adapter() });

describe("<WhoWeAre /> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WhoWeAre />);
  });

  it("should not render additional items from other containers", () => {
    expect(wrapper.find(<Image />)).toHaveLength(0);
    expect(wrapper.find(<Message />)).toHaveLength(0);
  });
});
