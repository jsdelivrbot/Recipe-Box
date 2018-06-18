import React, { Component } from "react";
import { Button, Modal, Icon, Image, Progress } from "semantic-ui-react";
import StepsFirst from './steps/StepsFirst';
import StepsSecond from './steps/StepsSecond';
import Loader from '../Loader';
import DeliveryForm from './DeliveryForm';

class NestedModalSecond extends Component {
  state = { open: false, orderSent: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {

    const { open } = this.state;
    const loading = this.props.orderLoading === false ? Loader : orderSummary
    const orderSummary = this.state.orderSent === true ? loading : null;

    return (
      <Modal
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        closeIcon
        size="small"
        trigger={
          <Button primary icon>
            Proceed <Icon name="right chevron" />
        
          </Button>
        }
      >
        <Modal.Header>Finalise Order</Modal.Header>
        <Modal.Content>
          <p>Is this information correct?</p>
          <Button primary Icon onClick={() => this.props.orderRecipe()}> Order!</Button>
          { } 
        </Modal.Content>
        <Modal.Actions>
          
        
          <StepsSecond />
        </Modal.Actions>
      </Modal>
    );
  }
}



const ConfirmOrder = props => {
  const recipeInfo = props.mainRecipe;
  const Info = <DeliveryForm />
  return (
    <Modal
      size="small"
      trigger={
        <Button inverted color="red" onClick={props.orderRecipe}>
          Order this recipe now!
      </Button>
      }
    >
      <Modal.Header>You are close to getting your delicious meal!</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="/assets/images/avatar/large/rachel.png"
        />
        <Modal.Description>
          Add your delivery information below
        {Info}
          <Modal.Actions>
            <NestedModalSecond 
            deliverInfo={Info} 
            recipeInfo={recipeInfo} 
            orderRecipe={props.orderRecipe}/>
          </Modal.Actions>
          Progress
         <Progress percent={33} success />
          <StepsFirst  />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
} 

export default ConfirmOrder;
