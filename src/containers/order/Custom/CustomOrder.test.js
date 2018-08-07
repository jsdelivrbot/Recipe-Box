import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header, Button, Image } from "semantic-ui-react";
import { CustomOrder } from "./CustomOrder";
import { DisplayCustomOrder } from "../../../components/mainView/orders/DisplayCustomOrder";
import { CustomOrderForm } from "./CustomOrderForm";
configure({ adapter: new Adapter() });
describe("<CustomOrder /> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CustomOrder />);
  });
  const img = (
    <Image
      src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png"
      size="large"
    />
  );
  const header = (
    <Header>Tell us exactly what you want and how you want it! </Header>
  );

  it("should display logo", () => {
    expect(wrapper.contains(img)).toEqual(true);
  });
  it("should display header", () => {
    expect(wrapper.contains(header)).toEqual(true);
  });
  it("should render your order box", () => {
    expect(wrapper.contains(<DisplayCustomOrder />)).toEqual(true);
  });

  it("should render your order form", () => {
    expect(wrapper.contains(<CustomOrderForm />)).toEqual(true);
  });
});
