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
  {props.title !== '' ? props.title : null}
  <Divider />
  {props.title !== '' ? props.directions : null}
  <Divider />
  {props.title !== '' ? props.ingredients : null}
  <Divider />
</Card>

);

export default DisplayCustomOrder