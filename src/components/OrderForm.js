import React from "react";
import { Form } from "semantic-ui-react";
export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      directions: ""
    };
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleChangeDirections = this.handleChangeDirections.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIngredients(e) {
    this.setState({ ingredients: e.target.value });
  }
  handleChangeDirections(e) {
    this.setState({ directions: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          style={{ minHeight: 100, minWidth: 100 }}
          value={this.state.ingredients}
          onChange={this.handleChangeIngredients}
          label="Ingredients"
          placeholder="What are we going to need?"
        />
        <Form.TextArea
          style={{ minHeight: 100 }}
          value={this.state.directions}
          onChange={this.handleChangeDirections}
          label="Directions"
          placeholder="What way do you want it done?"
        />
        <Form.Button type="submit" value="Submit" >Submit</Form.Button>
      </Form>
    );
  }
}
