import React from 'react';
import { Divider, Header, Card, } from 'semantic-ui-react';

const displayOrderStyle = {
  height: '250px',
  width: '300px',
  margin: '50px'
};

const DisplayMyOrderCard = props => (

  <Card raised style={displayOrderStyle}>
    <Header as='h4'>Your order</Header>
    {props.title !== '' ? props.title : null}
    <Divider />
    {props.title !== '' ? props.directions : null}
    <Divider />
    {props.title !== '' ? props.specialRequests : null}
    <Divider />
    {props.price !== '' ? props.price : null}
    <Divider />
    {props.timeRemaining !== '' ? props.timeRemaining : null}
  </Card>

);

export default DisplayMyOrderCard

