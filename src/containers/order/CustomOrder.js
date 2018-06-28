import React from 'react';
import { Icon, Grid, Image, Divider, Header, Card, Button } from 'semantic-ui-react';
import Title from '../../components/Title';
import CustomOrderForm from './CustomOrderForm';
import SearchRecipes from '../../components/search/Search';


const groupBoxes = {
  display: 'flex'
}

export default class CustomOrder extends React.Component {
    state = {
       title: '',
       directions: '',
       specialRequests: '',
       ordered: false
    }

addCustomOrderHandler(order) {
  const {title, directions, specialRequests} = order;
  this.setState({
    title,
    directions,
    specialRequests,
    ordered: true
  });
this.props.addOrder(order); 
}

  render() {



    let { title, directions, specialRequests} = this.state;
    title = <p>{title}</p>
    directions = <p>{directions}</p>
    specialRequests = <p>{specialRequests}</p>

    const DisplayOrder = (<Card raised style={displayOrderStyle}>
    <Header as='h4'>Your order</Header>
    {this.state.title !== '' ? title : null}
    <Divider />
    {this.state.title !== '' ? directions : null}
    <Divider />
    {this.state.title !== '' ? specialRequests : null}
    <Divider />
     </Card>

    );
 
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
             <div style={groupBoxes}>  
             <CustomOrderForm addRecipe={this.addCustomOrderHandler.bind(this)}/>
              {DisplayOrder}
             </div> 
            </Grid.Column>
            
          </Grid.Row>
          <Grid.Row>
            
            <Grid.Column width={13}>
              <Button negative
                style={{ margin: '15px' }}
                onClick={() => this.props.history.replace('/')}

              >Cancel order </Button>
              <Button primary icon
                onClick={() => this.props.history.push('/delivery')}

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
