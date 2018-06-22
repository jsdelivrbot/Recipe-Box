import React from 'react';
import { Grid, Image, Divider, Header, Search } from 'semantic-ui-react';
import Title from '../components/Title';
import SearchRecipes from '../../components/search/Search';

export default class WhoWeAre extends React.Component {
  state = {
    team: [{
      name: 'Oliver Yates',
      role: 'Developer',
      do: 'Makes all the gears and cogs, and keeps them well oiled',
      quote: 'Don\'t worry it might never happen!'
    }, {
      name: 'James Steevenson',
      role: 'Chef',
      do: 'Comes up with all the good ideas',
      quote: 'Time for a drink'
    }]
  }


  render() {

    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image className='icon' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png' size='large' />
            </Grid.Column>
            <Grid.Column width={12}>
              <Title />
              <Divider />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <SearchRecipes
                searchHandleResultSelect={props.searchHandleResultSelect}
                handleSearchChange={props.handleSearchChange}
                searchValue={props.searchValue}
                searchResults={props.searchResults}
                searchID={props.searchID}
                searchIsLoading={props.searchIsLoading}
                searchOnClickHandler={props.searchOnClickHandler} />
            </Grid.Column>
          <Grid.Column width={12}>

          </Grid.Column>        
          </Grid.Row>        
        </Grid>
      </div>
    )
  }
}