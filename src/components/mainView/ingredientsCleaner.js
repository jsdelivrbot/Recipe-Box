import React from "react";
import { List } from "semantic-ui-react";

const ingredientsCleaner = props => {
  const split = props.split(",");
  const createList = split.map(el => {
    return <List.Item key={el.id}>{el}</List.Item>;
  });
  return <List bulleted>{createList}</List>;
};

export default ingredientsCleaner;
