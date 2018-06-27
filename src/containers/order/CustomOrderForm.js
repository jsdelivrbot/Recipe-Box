import React from "react";
import { Form, Message } from "semantic-ui-react"

const successMsg = <Message positive>Your order has been saved, go to checkout to finalise! </Message>
const formStyle = {
  width: '400px'
}


export default class CustomOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      directions: "",
      specialRequests: "",
      sent: false,
    };
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleChangeDirections = this.handleChangeDirections.bind(this);
    this.handleChangeHeader = this.handleChangeHeader.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIngredients(e) {
    this.setState({ specialRequests: e.target.value });
  }
  handleChangeDirections(e) {
    this.setState({ directions: e.target.value });
  }

  handleChangeHeader(e) {
    this.setState({ title: e.target.value });
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
     <div style={formStyle}>  
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
          label="Directions"
          placeholder="Be as specific or as general as you like"
        />
        <Form.TextArea
          style={{ minHeight: 100 }}
          value={this.state.directions}
          onChange={this.handleChangeDirections}
          label="Special Requests"
          placeholder="Any allergies? Hate cucumbers?"
        />
        <Form.Button type="submit" value="Submit" >Submit</Form.Button>
        {this.state.sent ? successMsg : null}
      </Form>
     </div> 
    );
  }
}
