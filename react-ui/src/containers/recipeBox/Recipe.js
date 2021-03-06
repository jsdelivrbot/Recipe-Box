import React from "react";
import "semantic-ui-css/semantic.min.css";
import GridLayout from "../../layout/GridLayout";
import ErrorHandler from "../../withErrorHandler/ErrorHandler";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class RecipeBox extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="mainPage">
        <ErrorHandler error={this.props.error} />
        <GridLayout
          mainRecipe={this.props.mainRecipe}
          popularRecipes={this.props.popularRecipes}
          favourites={this.props.favourites}
          addRecipe={this.props.addRecipe}
          deleteOnClick={this.props.deleteRecipe}
          editOnClick={this.props.editRecipe}
          addFav={this.props.addFav}
          handleWeekTopClick={this.props.handleWeekTopClick}
          topWeek={this.props.topWeek}
          orderRecipe={this.orderRecipeHandler}
          updateDelivery={this.deliveryInfoHandler}
          deliveryInfo={this.props.deliveryInfo}
          orderAccepted={this.props.orderAccepted}
          orderLoaded={this.props.orderLoaded}
          searchValue={this.props.searchValue}
          searchResults={this.props.searchResults}
          searchID={this.props.searchID}
          searchIsLoading={this.props.searchIsLoading}
          searchHandleResultSelect={this.props.searchHandleResultSelect}
          searchOnClickHandler={this.props.searchOnClickHandler}
          handleSearchChange={this.props.handleSearchChange}
          match={this.props.match}
          location={this.props.location}
          history={this.props.history}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onRedirect: url => dispatch(actionCreators.redirectChange(url))
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(RecipeBox)
);
