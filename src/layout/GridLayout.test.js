import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Image } from "semantic-ui-react";
import GridLayout from "./GridLayout";
import SearchRecipes from "../components/search/Search";
import Favourites from "../components/favourites/Favourites";
import WeekTop from "../components/weekTop/WeekTop";
import RecipeList from "../components/popularRecipes/RecipeList";
import MainView from "../components/mainView/MainView";
configure({ adapter: new Adapter() });

describe("<GridLayout /> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GridLayout />);
  });

  const image = (
    <Image
      className="icon"
      src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png"
      size="large"
    />
  );
  it("should render the search bar", () => {
    expect(wrapper.contains(<SearchRecipes />)).toEqual(true);
  });
  it("should render the favourites", () => {
    expect(wrapper.contains(<Favourites />)).toEqual(true);
  });
  it("should render the Week Top recipes", () => {
    expect(wrapper.contains(<WeekTop />)).toEqual(true);
  });
  it("should render the popular recipes", () => {
    expect(wrapper.contains(<RecipeList />)).toEqual(true);
  });
  it("should render the main recipe", () => {
    expect(wrapper.contains(<MainView />)).toEqual(true);
  });
});
