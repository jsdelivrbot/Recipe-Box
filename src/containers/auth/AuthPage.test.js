import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthPage from "./AuthPage";
import { Image } from "semantic-ui-react";
import Auth from "./Auth";
configure({ adapter: new Adapter() });

describe("<AuthPage /> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AuthPage />);
  });

  const image = (
    <Image
      className="icon"
      src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png"
      size="large"
    />
  );
  it("should render the buisness logo", () => {
    expect(wrapper.contains(image)).toEqual(true);
  });
});
