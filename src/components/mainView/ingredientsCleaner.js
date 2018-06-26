import React from "react";
import { List } from "semantic-ui-react";

const ingredientsCleaner = props => {
  if (typeof props === 'string') {
    return props;
  }


  let createList
  if (!Array.isArray(props)) {
    if (props != null) {
       const ingredientsArray = Object.entries(props)
    

    createList = ingredientsArray.map(el => {
      let [item, num] = el;
    
      const upper = item[0].toUpperCase() + item.substr(1);
      return <List.Item key={el.id}>{upper} : {num}</List.Item>;
    });
    }
   
  } else {

    createList = props.map(el => {
      return <List.Item key={el.id}>{el}</List.Item>;
    });
  }

 
  return <List bulleted>{createList}</List>;
};

export default ingredientsCleaner;
