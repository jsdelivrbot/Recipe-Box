import React from "react";
import { List, Image } from "semantic-ui-react";

const FavList = props => {
  let formatted;
  if (props.favs) {
    formatted = props.favs.map(el => {
      return (
        <List.Item>
          <Image avatar src={el.img} />
          <List.Content>
            <List.Header as="a">{el.header}</List.Header>
            <List.Description>{el.ingredients}</List.Description>
            <List.Description>{el.directions}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  } else {
    formatted = null;
  }

  return <List>{formatted}</List>;
};

export default FavList;
