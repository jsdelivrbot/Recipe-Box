import React from "react";
import { Form } from "semantic-ui-react"

const successMsg = <p>Your order has beenn saved, go to checkout to finalise! </p>

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      directions: "",
      header: "",
      sent: false,
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
    const recipe = { ...this.state  }
    this.props.addRecipe(recipe)
    this.setState((prevState) =>{
      return {
        sent: !prevState.sent
      }
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Title'
          value={this.state.header}
          onChange={this.handleChangeHeader}
          placeholder='Title' 
          />
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
        {this.state.sent ? successMsg : null}
      </Form>
    );
  }
}
