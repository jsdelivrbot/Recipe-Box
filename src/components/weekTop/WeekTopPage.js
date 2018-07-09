import React from 'react';
import { Grid, Image, Divider, Header, Search } from 'semantic-ui-react';
import Title from '../components/Title';


const GridLayout = props => {
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
          </Grid.Column>
          <Grid.Column only='mobile' width={3}>

          </Grid.Column>

          <Grid.Column width={10}>
          

          </Grid.Column>
          <Grid.Column width={3}>
  
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column only='computer' width={3}>
          </Grid.Column>
          <Grid.Column width={11}>
            <Divider />
           
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    </div>
  )
}