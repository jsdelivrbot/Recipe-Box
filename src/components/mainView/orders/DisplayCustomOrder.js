import React from 'react';
import { Divider, Header, Card,  } from 'semantic-ui-react';

const displayOrderStyle = {
  height: '250px',
  width: '300px',
  margin: '50px'
};

const DisplayCustomOrder = props => (
  
<Card raised style={displayOrderStyle}>
  <Header as='h4'>Your order</Header>
  {this.state.title !== '' ? props.title : null}
  <Divider />
  {this.state.title !== '' ? props.directions : null}
  <Divider />
  {this.state.title !== '' ? props.specialRequests : null}
  <Divider />
</Card>

);

export default DisplayCustomOrder

