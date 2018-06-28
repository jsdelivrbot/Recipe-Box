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
      warning: false
    };
    this.handleChangeSpecialRequests = this.handleChangeSpecialRequests.bind(this);
    this.handleChangeDirections = this.handleChangeDirections.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSpecialRequests(e) {
    this.setState({ specialRequests: e.target.value });
  }
  handleChangeDirections(e) {
    this.setState({ directions: e.target.value });
  }

  handleChangeTitle(e) {
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
    console.log(this.props)
    return (
     <div style={formStyle}>  
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Title'
          value={this.state.title}
          onChange={this.handleChangeTitle}
          placeholder='Title' 
          />
        <Form.TextArea
          style={{ minHeight: 100, minWidth: 100 }}
          value={this.state.directions}
          onChange={this.handleChangeDirections}
          label="Directions"
          placeholder="Be as specific or as general as you like"
          error={this.props.warning}
        />
        <Form.TextArea
          style={{ minHeight: 100 }}
          value={this.state.specialRequests}
          onChange={this.handleChangeSpecialRequests}
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
