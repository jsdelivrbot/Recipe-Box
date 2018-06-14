import React from 'react';
import { List } from 'semantic-ui-react'
const ingredientsCleaner = props => {
  const split = props.split(',')
  console.log(props)
  const createList = split.map(el => {
    return <List.Item key={el} >{el}</List.Item>
  })
  return (
     <List bulleted>
      {createList}
  </List>
  )
 
};

export default ingredientsCleaner;