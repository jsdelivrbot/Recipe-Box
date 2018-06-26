import React from 'react';
import { Grid, Image, Divider, Header, Search, Card, Button } from 'semantic-ui-react';
import Title from '../../components/Title';
import SearchRecipes from '../../components/search/Search';
import ConfirmationModal from './ConfirmationModal';
import DeliveryForm from '../../components/mainView/orders/DeliveryForm';
export default class Confirm extends React.Component {
 
  render() {
    console.log(this.props)
    const recipeInfo = this.props.props.mainRecipe;

    const Info = <DeliveryForm
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
              <Button negative style={{margin: '15px'}}>Cancel order </Button> 
              <ConfirmationModal
                deliverInfo={this.props.deliverInfo}
                recipeInfo={recipeInfo}
                orderRecipe={this.props.orderRecipe}
                orderAccepted={this.props.orderAccepted}
                orderLoaded={this.props.orderLoaded} />
          
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
