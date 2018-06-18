import React from "react";
import { List } from "semantic-ui-react";

const directionsCleaner = props => {
 
  if (props.directions != undefined) {
    const split = props.directions.split(".");
    const displayDirections = split.map(el => {
      return <List.Item key={el.id}>{el}</List.Item>;
    });

    return <List bulleted>{displayDirections}</List>;
  } else {
    const url = props.source_url;

    return (
      <p>For more information 
      about this recipe that 
      our skilled chefs can make for you go to {url}
      </p>
    )
  }
};

export default directionsCleaner;
