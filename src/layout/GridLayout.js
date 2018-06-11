import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Title from '../components/Title';
import RecipeList from '../components/RecipeList';

const GridLayout = props => (
  <div>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
     
        </Grid.Column>
        <Grid.Column width={13}>
         <Title />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
         
        </Grid.Column>
        <Grid.Column width={10}>
          <RecipeList />
        </Grid.Column>
        <Grid.Column width={3}>
        
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default GridLayout