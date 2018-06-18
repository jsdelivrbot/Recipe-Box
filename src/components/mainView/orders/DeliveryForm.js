import React from "react";
import { Form, Message } from "semantic-ui-react"

const successMsg = <p>Your details have been saved, go to the next page to finalise! </p>

export default class DeliveryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: {
        street: '',
        town: '',
        postcode: ''
      },
      email: "",
      sent: false,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeTown = this.handleChangeTown.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangePostcode = this.handleChangePostcode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeStreet(e) {
    this.setState({ address: {
      street: e.target.value
    }});
  }

  handleChangeTown(e) {
    this.setState({
      address: {
        town: e.target.value
      }
    });
  }
  handleChangePostcode(e) {
    this.setState({
      address: {
        street: e.target.value
      }
    });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipe = { ...this.state }
    this.props.addRecipe(recipe)
    this.setState((prevState) => {
      return {
        sent: !prevState.sent
      }
    })
  }

  render() {
    return (
      <Form success onSubmit={this.handleSubmit}>
        <Form.Input
          label='Name'
          value={this.state.name}
          onChange={this.handleChangeName}
          placeholder='Title'
        />
        <Form.Input
          label='Street'
          value={this.state.address.Street}
          onChange={this.handleChangeStreet}
          placeholder='Street'
        />
        <Form.Input
          label='Town'
          value={this.state.address.town}
          onChange={this.handleChangeTown}
          placeholder='Town'
        />
        <Form.Input
          label='Postcode'
          value={this.state.address.postcode}
          onChange={this.handleChangePostcode}
          placeholder='Postcode'
        />
        <Form.Input
          label='Email'
          value={this.state.email}
          onChange={this.handleChangeEmail}
          placeholder='Email'
        />
        <Message success header='Form Completed' content="Go to the final page to finalise the order" />
        <Form.Button type="submit" value="Submit" >Submit</Form.Button>
        {this.state.sent ? successMsg : null}
      </Form>
    );
  }
}