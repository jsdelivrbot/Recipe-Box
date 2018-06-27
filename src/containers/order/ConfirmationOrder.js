import React from 'react';
import { Modal, Icon, Message, Grid, Image, Divider, Header, Search, Card, List, Button } from 'semantic-ui-react';
import Title from '../../components/Title';
import SearchRecipes from '../../components/search/Search';
import StepsSecond from './steps/StepSecond';
import Loader from '../../components/mainView/Loader';

export default class ConfirmationOrder extends React.Component {
  
   state = {
     orderSent: false
   }

  orderSent() {
    this.setState({ orderSent: true })
    this.props.orderRecipe();
  }

  render() {
   
    
    // const ingredientsArray = Object.entries(this.props.recipeInfo.ingredients)
    // const ingredientsDisplay = ingredientsArray.map(el => {
    //   let [item, num] = el;

    //   const upper = item[0].toUpperCase() + item.substr(1);
    //   return <List.Item key={el.id}>{upper} : {num}</List.Item>;
    // });
    // const recipeTitle = this.props.recipeInfo.title;
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

    return (
     <div>
        <Header>Finalise Order</Header>
      
          <Button primary Icon onClick={this.orderSent.bind(this)}> Order!</Button>
          <p>Is this information correct?</p>
          {(this.state.orderSent && !this.props.orderAccepted) ? Loading : null}
          {(this.props.orderAccepted && this.props.orderLoaded) ? successMsg : null}
          {(!this.props.orderAccepted && this.props.orderLoaded) ? failureMsg : null}
         
      {/*<List bulleted>
        {ingredientsDisplay}
      </List>*/}

          <br />
          <Header as='h3'>Delivery Details</Header>
          {this.props.deliverInfo !== undefined ? this.props.deliveryInfo : null}
          <Button primary Icon onClick={this.orderSent.bind(this)}> Order!</Button>
          <Button negative
            style={{ margin: '15px' }}
            onClick={() => this.props.history.replace('/')}

          >Cancel order </Button>
          <Button
            style={{ margin: '15px' }}
            onClick={() => this.props.history.goBack()}

          >Go back </Button>
          <StepsSecond  />

 </div>
    );
  }
}


  