import React from 'react';
import { Icon, Grid, Image, Divider, Header, Search, Card, Button } from 'semantic-ui-react';
import Title from '../../Title';
import ConfirmationModal from '../../../containers/order/ConfirmationModal';
import DeliveryForm from './DeliveryForm';
import StepsFirst from './steps/StepsFirst';
export default class DeliveryPage extends React.Component {

  render() {

   

    const Info = <DeliveryForm
      deliveryInfo={this.props.deliveryInfo}
      updateDelivery={this.props.updateDelivery} />

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

            <Grid.Column width={12}>
              <Header >You are close to getting your delicious meal! </Header>
              Add your delivery information below
              {Info}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>
              <Button negative
                style={{ margin: '15px' }}
                onClick={() => this.props.history.replace('/')}

              >Cancel order </Button>
              <Button 
                style={{ margin: '15px' }}
                onClick={() => this.props.history.goBack()}

              >Go back </Button>
              <Button primary icon
                onClick={() => this.props.history.replace('/confirmation')}

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
