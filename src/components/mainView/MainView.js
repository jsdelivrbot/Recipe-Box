import React from "react";
import OrderForm from './OrderForm';
import EditOrder from '../editRecipe/EditOrder';
import directionsCleaner from './directionsCleaner';
import ingredientsCleaner from './ingredientsCleaner';

import {
  Container,
  Segment,
  Item,
  Image,
  Header,
  Icon,
  Button,
  Modal,
  Form,
} from "semantic-ui-react";

const mainViewStyle = {
  padding: "15px",
  border: "3px solid #4b4b4b",
  borderCollapse: "separate",
  borderSpacing: "20px",
  borderRadius: "20px",
  background: "#607D8B"
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
      <div style={{display: 'flex'}}>
        <Image
          className="icon"
          style={iconStyle}
          onClick={props.deleteOnClick}
          src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/mdQP-002-delete.png"
        />
      
        <EditOrder 
         recipe={props.mainRecipe}
         editSubmit={props.editOnClick}
         />
        </div> 
      </Segment>
      <Item.Group>
        <Item>
          <Item.Image size="large" src={props.mainRecipe.image_url} />

          <Item.Content>
            <Item.Header as="a">Ingredients</Item.Header>

            <Item.Description>{ingredientsCleaner(props.mainRecipe.ingredients)}</Item.Description>
            <Item.Header as="a">Directions</Item.Header>

            <Item.Description>{directionsCleaner(props.mainRecipe)}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Modal size='small' trigger={<Button 
        inverted color='olive' 
       >
        {" "}
        Add a custom order!
        <Image
          className="icon addIcon"
          style={iconStyle}         
          src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/v_LL-001-plus.png"
        />
      </Button>}>
        <Modal.Header>Tell us what you want!</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
             <OrderForm addRecipe={props.addRecipe}/>
          </Modal.Description>
         </Modal.Content> 
      </Modal>
    </Container>
  </div>
);

export default MainView;
