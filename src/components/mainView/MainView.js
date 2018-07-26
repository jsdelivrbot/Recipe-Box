import React from "react";
import OrderForm from "./OrderForm";
import EditOrder from "../editRecipe/EditOrder";
import directionsCleaner from "./cleaners/directionsCleaner";
import ingredientsCleaner from "./cleaners/ingredientsCleaner";

import {
  Container,
  Segment,
  Item,
  Image,
  Header,
  Button,
  Modal
} from "semantic-ui-react";

const mainViewStyle = {
  padding: "15px",
  border: "3px solid #4b4b4b",
  borderCollapse: "separate",
  borderSpacing: "20px",
  borderRadius: "20px",
  background: "#e0ecff"
};

const recipeTitleStyle = {
  color: "#FF5252"
};

const iconStyle = {
  display: "inline",
  height: "35px",
  padding: "5px 15px"
};

const MainView = props => (
  <div style={mainViewStyle}>
    <Container>
      <Segment raised>
        <Header
          as="h2"
          style={recipeTitleStyle}
          image="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/7J0H-pan.png"
          content={props.mainRecipe.title}
        />
        <div style={{ display: "flex" }}>
          <Image
            className="icon"
            style={iconStyle}
            onClick={props.deleteOnClick}
            src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/mdQP-002-delete.png"
          />

          <EditOrder recipe={props.mainRecipe} editSubmit={props.editOnClick} />
        </div>
      </Segment>
      <Item.Group>
        <Item>
          <Item.Image
            size="large"
            circular
            bordered={true}
            src={props.mainRecipe.image_url}
          />

          <Item.Content>
            <Item.Header as="a">Ingredients</Item.Header>

            <Item.Description>
              {ingredientsCleaner(props.mainRecipe.ingredients)}
            </Item.Description>
            <Item.Header as="a">Directions</Item.Header>

            <Item.Description>
              {directionsCleaner(props.mainRecipe)}
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Button
        inverted
        color="red"
        onClick={() => props.history.push("/custom-order")}
      >
        {" "}
        Add a custom order!
        <Image
          className="icon"
          style={iconStyle}
          src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/v_LL-001-plus.png"
        />
      </Button>

      <Button
        inverted
        color="orange"
        onClick={() => props.history.push("/order")}
      >
        Order this recipe now!
      </Button>
    </Container>
  </div>
);

export default MainView;
