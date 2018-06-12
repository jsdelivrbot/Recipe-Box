import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const RecipeList = props => {

  const recipeListStyle = {
    padding: '15px',
    margin: '15px',
    border: '3px solid #4b4b4b',
    borderRadius: '20px'
  }

  return (
    <div className='recipeList' style={recipeListStyle}>
    
    <Card fluid color='red' >
      <Card.Content>
        <Card.Header>Chicken Curry</Card.Header>
        
        <Card.Description>Making Indian at home doesnt have to be intimidating.
         <Image className='popHeartStyle' size='mini' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/jV5Y-heart.png' />
        </Card.Description>
      </Card.Content>
    </Card>
    <Card compact fluid color='blue' >
      <Card.Content>
        <Card.Header>Cloud Bread</Card.Header>
      
        <Card.Description>Light and fluffy, this bread substitute lives up to its name.
         <Image className='popHeartStyle' size='mini' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/jV5Y-heart.png' />
        </Card.Description>
      </Card.Content>
    </Card>
    <Card compact fluid color='blue' >
      <Card.Content>
        <Card.Header>Fish Pie
       
        </Card.Header>

        <Card.Description>
        Generous chunks of fish in a creamy sauce made with a few secret ingredients, topped with buttery mash and a crispy garnish
          <Image className='popHeartStyle' size='mini' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/jV5Y-heart.png' />
        
        </Card.Description>
      </Card.Content>
    </Card>
    </div>
  )
}
export default RecipeList