import React from "react";
import { List } from "semantic-ui-react";

/*
This algorithm is a little convulted due to whether
the ingredietns are coming from the Food2Fork API
or from my firebase API.

*/

const ingredientsCleaner = props => {
  // If props is a string it has already been cleaned
  if (typeof props === "string") {
    return props;
  }

  let createList;
  if (!Array.isArray(props)) {
    if (props != null) {
      // Split object into an array with sub-arrays of key/value pairs
      const ingredientsArray = Object.entries(props);

      // Map the values and ensure the first letter is a capital
      createList = ingredientsArray.map(el => {
        let [item] = el;
        const upper = item[0].toUpperCase() + item.substr(1);
        return <List.Item key={el.id}>{upper}</List.Item>;
      });
    }
  } else {
    // If props is an Array - list the values
    createList = props.map(el => {
      return <List.Item key={el.id}>{el}</List.Item>;
    });
  }
  return <List bulleted>{createList}</List>;
};

export default ingredientsCleaner;
