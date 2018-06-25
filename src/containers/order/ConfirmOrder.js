import React from 'react';
import { Grid, Image, Divider, Header, Search, Card } from 'semantic-ui-react';
import Title from '../../components/Title';
import SearchRecipes from '../../components/search/Search';

export default class WhoWeAre extends React.Component {
 


  render() {

    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image className='icon' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png' size='large' />
            </Grid.Column>
            <Grid.Column width={12}>
              
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
             
            </Grid.Column>
            <Grid.Column width={12}>
             
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}