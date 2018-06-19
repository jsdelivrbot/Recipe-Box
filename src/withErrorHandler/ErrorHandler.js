import React from 'react';
import { Modal, Message } from 'semantic-ui-react';

export default class ErrorHandler extends React.Component {
  state = {
    open: false
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.error !== this.props.error) {
      //Perform some operation here
      this.setState({ open: true });
      
    }
  }
  close = () => this.setState({ open: false })

  render() {
    return (
      <Modal open={this.state.open} onClose={this.close} closeIcon>
        <Modal.Content>

          <Message negative>
            <Message.Header>Something went wrong!</Message.Header>
            <p>
              {this.props.error ? this.props.error.message : null}
            </p>
          </Message>

        </Modal.Content>
      </Modal>
    )
  }
}
