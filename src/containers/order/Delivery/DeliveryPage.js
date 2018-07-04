import React from 'react';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { Icon, Grid, Image, Divider, Header, Search, Card, Button, Message } from 'semantic-ui-react';
import Title from '../../../components/Title';
import DeliveryForm from './DeliveryForm';
import StepsFirst from '../../../components/mainView/orders/steps/StepsFirst';

import * as actionCreators from '../../../store/actions/index';


class DeliveryPage extends React.Component {

state = {
  warning: false
}

proceedHandler() {
   const { name, street, email } = this.props.deliveryInfo;


  // If the deliveryInformation has been submmited
   if (name && street && email) {
     this.props.history.replace('/confirmation')
   } else {
    this.setState({ warning: true });
   } 
}
componentDidMount() {
  this.setState({ warning: false });
}

submitted() {
  this.setState({ warning: false });
}

  render() {
    
    const DeliveryWarningMsg = <Message negative>Please input your delivery details </Message>
    console.log(this.props)

    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image className='icon' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png' size='large' />
            </Grid.Column>
            <Grid.Column width={12}>
              <Title />
              <Divider />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
        <Grid.Column width={1} />
            <Grid.Column centered width={14}>
              <Header >You are close to getting your delicious meal! </Header>
              Add your delivery information below

              <DeliveryForm
                deliveryInfo={this.props.deliveryInfo}
                updateDelivery={this.props.onAddDelivery}
                submitted={this.submitted.bind(this)}
                warning={this.state.warning}
              />

              {this.state.warning === true ? DeliveryWarningMsg : false}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={14}>
              <Button negative
                style={{ margin: '15px' }}
                onClick={() => this.props.history.replace('/')}

              >Cancel order </Button>
              <Button 
                style={{ margin: '15px' }}
                onClick={() => this.props.history.goBack()}

              >Go back </Button>
              <Button primary icon
                onClick={this.proceedHandler.bind(this)}

              >
                Proceed <Icon name="right chevron" />

              </Button>
              <StepsFirst />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddDelivery: (info) => dispatch(actionCreators.addDelivery(info))
  }
};

const mapStateToProps = state => {
  return {
    deliveryInfo: state.delivery.deliveryInfo
  }
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeliveryPage)
);