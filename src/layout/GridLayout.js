import React from 'react';
import { Grid, Image, Divider, Header, Search } from 'semantic-ui-react';
import Title from '../components/Title';
import RecipeList from '../components/RecipeList';
import MainView from '../components/MainView';
import ResultsSide from '../components/ResultsSide';
import SearchRecipes from '../components/Search';
import Favourites from '../components/Favourites';

const GridLayout = props => (
  <div>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={2}>
          <Image className='icon' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png' size='large'/>
        </Grid.Column>
        <Grid.Column width={12}>
         <Title />
         <Divider />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
        <SearchRecipes />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h2'>Popular recipes this week</Header>
          <RecipeList 
          results={props.searchResults}
           />
        
        </Grid.Column>
        <Grid.Column width={3}>
         <Favourites 
         favourties={props.favourites}
         />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <ResultsSide />
        </Grid.Column>
        <Grid.Column width={11}>
          <Divider />
          <MainView 
          mainRecipe={props.mainRecipe} 
          />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  </div>
)

export default GridLayout