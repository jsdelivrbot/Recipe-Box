import React, { Component } from "react";
import { Button, Modal, Icon, Image, Progress } from "semantic-ui-react";

class NestedModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <Modal
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size="small"
        trigger={
          <Button primary icon>
            Proceed <Icon name="right chevron" />
          </Button>
        }
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon="check" content="All Done" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

const ConfirmOrder = props => (
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
        Is your order correct? If so continue to the next page for delivery
        information
         <Modal.Actions>
          <NestedModal />
        </Modal.Actions>
         Progress
         <Progress percent={33} success/>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ConfirmOrder;
