import React from 'react';
import { connect } from "react-redux";
import { Icon, Grid, Image, Divider, Header, Card, Button, Message } from 'semantic-ui-react';
import Title from '../../../components/Title';
import CustomOrderForm from './CustomOrderForm';
import SearchRecipes from '../../../components/search/Search';
import DisplayCustomOrder from '../../../components/mainView/orders/DisplayCustomOrder';

import * as actionTypes from '../../../store/actions/index';

 class CustomOrder extends React.Component {
    state = {
       title: '',
       directions: '',
       specialRequests: '',
       ordered: false,
       warning: false
    }

addCustomOrderHandler(order) {
  const { title, directions, specialRequests } = order;

  // Set local container state to order can appear in UI
  this.setState({
    title,
    directions,
    specialRequests,
    ordered: true,
    warning: false
  });

 // Send order up to redux  
this.props.onStoreCustomOrder(order); 
}
   proceedhandler() {
    const ordered = this.state.ordered;
    const directions = this.state.directions;
    // Cooking directions needed for next stage
    if (ordered && directions) {
      this.props.history.push('/delivery');
    } else {
      // Else show the user a warning message
      this.setState({warning: true})
    }
   }

   componentDidMount() {
     // Reset any warning messages
     this.setState({warning: false})
   }

  render() {
    const errorOrder = <Message negative> Please add what you want our chefs to create for you</Message>
    let { title, directions, specialRequests} = this.state;
     
    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column only='computer' width={2}>
              <Image className='icon' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png' size='large' />
            </Grid.Column>
            <Grid.Column width={12}>
              <Title />
              <Divider />
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
          
          <Grid.Column width={3}>
            <SearchRecipes
              searchHandleResultSelect={this.props.searchHandleResultSelect}
              handleSearchChange={this.props.handleSearchChange}
              searchValue={this.props.searchValue}
              searchResults={this.props.searchResults}
              searchID={this.props.searchID}
              searchIsLoading={this.props.searchIsLoading}
              searchOnClickHandler={this.props.searchOnClickHandler} />
          </Grid.Column>

            <Grid.Column width={12}>
              <Header >Tell us exactly what you want and how you want it! </Header>

              <Header as='h4' >Be as specific as you like!</Header>
             <div className='groupBoxes'>  
             <CustomOrderForm
                  warning={this.state.warning}
              addRecipe={this.addCustomOrderHandler.bind(this)}/>
             <DisplayCustomOrder
              title={title} 
              directions={directions} 
              specialRequests={specialRequests}
          
               />
             </div> 
            </Grid.Column>
            
          </Grid.Row>
          <Grid.Row>
            
            <Grid.Column width={13}>
             {this.state.warning === true ? errorOrder : null}
              <Button negative
                style={{ margin: '15px' }}
                onClick={() => this.props.history.replace('/')}

              >Cancel order </Button>
              <Button primary icon
                onClick={this.proceedhandler.bind(this)}

              >
                Proceed <Icon name="right chevron" />

              </Button>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
     
  };
};

const mapDispatchToProps = dispatch => {
 return {
   onStoreCustomOrder: (order) => dispatch({type: actionTypes.STORE_CUSTOM_ORDER, order})
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomOrder)