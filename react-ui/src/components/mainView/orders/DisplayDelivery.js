import React from 'react';
import { Divider, Header, Card, } from 'semantic-ui-react';

const displayOrderStyle = {
  height: '250px',
  width: '300px',
  margin: '50px'
};

const DisplayDelivery = props => (

  <Card raised style={displayOrderStyle}>
    <Header as='h4'>Your details</Header>
    {props.name !== '' ? props.name : null}
    <Divider />
    {props.street !== '' ? props.street : null}
    <Divider />
    {props.town!== '' ? props.town : null}
    <Divider />
    {props.postcode !== '' ? props.postcode : null}
    <Divider />
    {props.email !== '' ? props.email : null}
    <Divider />
  </Card>

);

export default DisplayDelivery