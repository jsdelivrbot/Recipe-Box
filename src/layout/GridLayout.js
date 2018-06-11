import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';
import Title from '../components/Title';
import RecipeList from '../components/RecipeList';
import MainView from '../components/MainView';

const GridLayout = props => (
  <div>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={2}>
          <Image src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png' size='large'/>
        </Grid.Column>
        <Grid.Column width={12}>
         <Title />
         <Divider />
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

      <Grid.Row>
        <Grid.Column width={3}>

        </Grid.Column>
        <Grid.Column width={11}>
          <Divider />
          <MainView />

        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  </div>
)

export default GridLayout