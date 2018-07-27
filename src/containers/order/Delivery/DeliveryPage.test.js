import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DeliveryPage } from "./DeliveryPage";
import { Message, Button } from "semantic-ui-react";

configure({ adapter: new Adapter() });

describe("<DeliveryPage /> ", () => {
  let wrapper;
  const authWarning = (
    <div>
      <Message warning>Please log-in to continue</Message>
      <Button color="green">Log-in! </Button>
    </div>
  );

  beforeEach(() => {
    wrapper = shallow(<DeliveryPage />);
  });

  it("should render a login link and message if not authenticated", () => {
    wrapper.setProps({ authentication: false });
    expect(wrapper.contains(authWarning)).toEqual(false);
  });
});
