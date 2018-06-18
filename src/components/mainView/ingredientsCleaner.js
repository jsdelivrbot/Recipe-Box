import React from "react";
import { List } from "semantic-ui-react";

const ingredientsCleaner = props => {
 console.log(props)
  let createList
  if (!Array.isArray(props)) {
     const split = props.split(",");
      createList = split.map(el => {
      return <List.Item key={el.id}>{el}</List.Item>;
    });
  } else {
    createList = props.map(el => {
      return <List.Item key={el.id}>{el}</List.Item>;
    });
  }
 
  return <List bulleted>{createList}</List>;
};

export default ingredientsCleaner;
