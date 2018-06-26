import React from "react";
import { Form, Message } from "semantic-ui-react";

export default class DeliveryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      street: "",
      town: "",
      postcode: "",
      email: "",
      sent: false
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeTown = this.handleChangeTown.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePostcode = this.handleChangePostcode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { name } = {...this.state};
    const newInfo = {...this.props.deliveryInfo};
    const oldName = name;
    if ( oldName != false || oldName !== newInfo.name) {
       this.setState( {...newInfo })
    }
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeStreet(e) {
    this.setState({
      street: e.target.value
    });
  }

  handleChangeTown(e) {
    this.setState({
      town: e.target.value
    });
  }
  handleChangePostcode(e) {
    this.setState({
      postcode: e.target.value
    });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const deliveryInfo = { ...this.state };
    this.props.updateDelivery(deliveryInfo);
    this.setState(prevState => {
      return {
        sent: true
      };
    });
  
  }

  render() {

    const successMsg = (
      <Message positive>
      <Message.Header> Success!</Message.Header>  
<p>Your details have been saved, go to the next page to finalise!</p>
      </Message>
    );
    return (
      <Form size='small' onSubmit={this.handleSubmit}>
        <Form.Input
          label="Name"
          value={this.state.name}
          onChange={this.handleChangeName}
          placeholder="Title"
        />
        <Form.Group inline>
        <Form.Input
          label="Street"
          value={this.state.street}
          onChange={this.handleChangeStreet}
          placeholder="Street"
        />
        <Form.Input
          label="Town"
          value={this.state.town}
          onChange={this.handleChangeTown}
          placeholder="Town"
        />
        <Form.Input
          label="Postcode"
          value={this.state.postcode}
          onChange={this.handleChangePostcode}
          placeholder="Postcode"
        />
        </Form.Group>
        <Form.Input
          label="Email"
          value={this.state.email}
          onChange={this.handleChangeEmail}
          placeholder="Email"
        />
        <Message
          success
          header="Form Completed"
          content="Go to the final page to finalise the order"
        />
        <Form.Button type="submit" value="Submit">
          Submit delivery info
        </Form.Button>
        {this.state.sent === true ? successMsg : null}
      </Form>
    );
  }
}
