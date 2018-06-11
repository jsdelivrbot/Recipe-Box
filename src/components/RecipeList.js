import React from 'react';
import { Card } from 'semantic-ui-react'

const RecipeList = props => {

  const recipeListStyle = {
    padding: '10px',
    border: '3px solid #4b4b4b',
    borderCollapse: 'separate',
    borderSpacing: '20px',
    borderRadius: '20px'
  }

  return (
    <div className='recipeList' style={recipeListStyle}>
    <Card fluid color='yellow' header='Porridge' />
    <Card fluid color='red' >
      <Card.Content>
        <Card.Header>Chicken Curry</Card.Header>
       
        <Card.Description>Making Indian at home doesnt have to be intimidating.</Card.Description>
      </Card.Content>
    </Card>
    <Card compact fluid color='blue' >
      <Card.Content>
        <Card.Header>Cloud Bread</Card.Header>
      
        <Card.Description>Light and fluffy, this bread substitute lives up to its name.</Card.Description>
      </Card.Content>
    </Card>
    <Card compact fluid color='blue' >
      <Card.Content>
        <Card.Header>Cloud Bread</Card.Header>

        <Card.Description>Light and fluffy, this bread substitute lives up to its name.</Card.Description>
      </Card.Content>
    </Card>
    </div>
  )
}
export default RecipeList