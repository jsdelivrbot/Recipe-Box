import React from 'react';
import { List } from 'semantic-ui-react';

const directionsCleaner = props => {
 const split = props.split('.') 
 const displayDirections = split.map(el => {
   return <List.Item key={el.id} >{el}</List.Item>
 });

 return <List bulleted>{displayDirections}</List>;
};

export default directionsCleaner;