import React from "react";
import { Form } from "semantic-ui-react";
import ingredientsCleaner from "../mainView/cleaners/ingredientsCleaner";
export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: props.ingredients,
      directions: props.recipe.directions,
      header: props.recipe.title
    };
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleChangeDirections = this.handleChangeDirections.bind(this);
    this.handleChangeHeader = this.handleChangeHeader.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIngredients(e) {
    this.setState({ ingredients: e.target.value });
  }
  handleChangeDirections(e) {
    this.setState({ directions: e.target.value });
  }

  handleChangeHeader(e) {
    this.setState({ header: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipe = { ...this.state };
    this.props.editSubmit(recipe);
  }

  render() {
    const ingredients = ingredientsCleaner(this.props.ingredients);
    const cleanIngredients = ingredients.props.children.map(
      el => el.props.children
    );
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Title"
          value={this.state.header}
          onChange={this.handleChangeHeader}
        />
        <Form.TextArea
          style={{ minHeight: 100, minWidth: 100 }}
          value={cleanIngredients}
          onChange={this.handleChangeIngredients}
          label="Ingredients"
        />
        <Form.TextArea
          style={{ minHeight: 100 }}
          value={this.state.directions}
          onChange={this.handleChangeDirections}
          label="Directions"
        />
        <Form.Button type="submit" value="Submit">
          Submit
        </Form.Button>
      </Form>
    );
  }
}
