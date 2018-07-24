import React from "react";
import { Grid, Image, Divider, Header, Search } from "semantic-ui-react";
import Title from "../components/Title";
import RecipeList from "../components/popularRecipes/RecipeList";
import MainView from "../components/mainView/MainView";

import SearchRecipes from "../components/search/Search";
import Favourites from "../components/favourites/Favourites";
import WeekTop from "../components/weekTop/WeekTop";

const GridLayout = props => {
  return (
    <div>
      <Grid celled stackable>
        <Grid.Row>
          <Grid.Column only="computer" width={2}>
            <Image
              className="icon"
              src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png"
              size="large"
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <Title />
            <Divider />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <SearchRecipes
              searchHandleResultSelect={props.searchHandleResultSelect}
              handleSearchChange={props.handleSearchChange}
              searchValue={props.searchValue}
              searchResults={props.searchResults}
              searchID={props.searchID}
              searchIsLoading={props.searchIsLoading}
              searchOnClickHandler={props.searchOnClickHandler}
            />
          </Grid.Column>
          <Grid.Column only="mobile" width={3} />

          <Grid.Column width={10}>
            <Header as="h2">Popular recipes this week</Header>
            <WeekTop
              handleWeekTopClick={props.handleWeekTopClick}
              weekTop={props.topWeek}
            />
            <RecipeList
              popularRecipes={props.popularRecipes}
              addFav={props.addFav}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Favourites />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column only="computer" width={3} />
          <Grid.Column width={11}>
            <Divider />
            <MainView
              mainRecipe={props.mainRecipe}
              editOnClick={props.editOnClick}
              deleteOnClick={props.deleteOnClick}
              addRecipe={props.addRecipe}
              orderRecipe={props.orderRecipe}
              updateDelivery={props.updateDelivery}
              deliveryInfo={props.deliveryInfo}
              orderAccepted={props.orderAccepted}
              orderLoaded={props.orderLoaded}
              match={props.match}
              history={props.history}
              location={props.location}
            />
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default GridLayout;
