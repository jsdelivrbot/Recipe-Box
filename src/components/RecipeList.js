import React from 'react';
import { Card } from 'semantic-ui-react'

const RecipeList = props => {

const items = [

]

  return (
    <div>
    <Card fluid color='red' header='Option 1' />
    <Card fluid color='orange' header='Option 2' />
    <Card fluid color='yellow' header='Option 3' />

    <Card>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
    </Card>
    </div>
  )
}
export default RecipeList