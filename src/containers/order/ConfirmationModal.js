import React from 'react';
import { Modal, Icon, Message, Grid, Image, Divider, Header, Search, Card, List, Button } from 'semantic-ui-react';
import Title from '../../components/Title';
import SearchRecipes from '../../components/search/Search';
import StepsSecond from './steps/StepSecond';
import Loader from '../../components/mainView/Loader';


export default class ConfirmationModal extends React.Component {
  state = {
    open: false,
    orderSent: false,
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  orderSent() {
    this.setState({ orderSent: true })
    this.props.orderRecipe();
  }

  render() {
    console.log(this.props)
    const { open } = this.state;
    const ingredientsArray = Object.entries(this.props.recipeInfo.ingredients)
    const ingredientsDisplay = ingredientsArray.map(el => {
      let [item, num] = el;

      const upper = item[0].toUpperCase() + item.substr(1);
      return <List.Item key={el.id}>{upper} : {num}</List.Item>;
    });
    const recipeTitle = this.props.recipeInfo.title;
    const Loading = <div className='loader'>Laoding.. </div>
    const successMsg = (
      <Message positive>
        <Message.Header> Success!</Message.Header>
        <p>Your food is on its way!! Enjoy!!</p>
      </Message>
    );
    const failureMsg = (
      <Message negative>
        <Message.Header>Something went wrong!</Message.Header>
        <p>Please try again</p>
      </Message>
    );
    console.log(this.props)
    return (
      <Modal
        scrolling
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        closeIcon
        size="fullscreen"
        trigger={
          <Button primary icon>
            Proceed <Icon name="right chevron" />

          </Button>
        }
      >
        <Modal.Header>Finalise Order</Modal.Header>
        <Modal.Content scrolling>
          <Button primary Icon onClick={this.orderSent.bind(this)}> Order!</Button>
          <p>Is this information correct?</p>
          {(this.state.orderSent && !this.props.orderAccepted) ? Loading : null}
          {(this.props.orderAccepted && this.props.orderLoaded) ? successMsg : null}
          {(!this.props.orderAccepted && this.props.orderLoaded) ? failureMsg : null}
          <Header as='h3'>{recipeTitle}</Header>
          <Header as='h3'>{recipeTitle}</Header>
          <List bulleted>
            {ingredientsDisplay}
          </List>

          <br />
          <Header as='h3'>Delivery Details</Header>
          {this.props.deliverInfo !== undefined ? this.props.deliveryInfo : null}
          <Button primary Icon onClick={this.orderSent.bind(this)}> Order!</Button>

        </Modal.Content>
        <Modal.Actions>


          <StepsSecond />
        </Modal.Actions>
      </Modal>
    );
  }
}


  