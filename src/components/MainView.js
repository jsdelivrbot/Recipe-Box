import React from "react";
import { Container, Segment, Item, Image, Header, Icon } from "semantic-ui-react";

const mainViewStyle = {
  padding: "15px",
  border: "3px solid #4b4b4b",
  borderCollapse: "separate",
  borderSpacing: "20px",
  borderRadius: "20px",
  background: "#607D8B"
};

const recipeTitleStyle = {
  color: '#FF5252'
}

const iconStyle= {
  display: 'inline',
  height: '35px',
 
  padding: '5px 15px'
}

const MainView = props => (
  <div style={mainViewStyle}>
    <Container>
      <Segment  raised>
        <Header as='h2' style={recipeTitleStyle} image='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/7J0H-pan.png' content='Chicken Curry' />
        <Image className='icon' style={iconStyle} src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/mdQP-002-delete.png' />
        <Image className='icon' style={iconStyle} src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/ekQ6-edit.png' />
      </Segment>
      <Item.Group>
        <Item>
          <Item.Image size="large" src="" />

          <Item.Content>
            <Item.Header as="a">Ingredients</Item.Header>
          
            <Item.Description>
            2 tbsp. extra-virgin olive oil
1 medium yellow onion, chopped
2 lb. boneless skinless chicken breasts
3 cloves garlic, minced
1 tbsp. freshly grated ginger
1 tsp. paprika
1 tsp. turmeric
1 tsp. coriander
1/2 tsp. cumin
            </Item.Description>
            <Item.Header as="a">Directions</Item.Header>

            <Item.Description>
          
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Segment raised> Add a custom order!
       <Image className='icon' style={iconStyle} src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/v_LL-001-plus.png' />
      </Segment>
    </Container>
  </div>
);

export default MainView;
