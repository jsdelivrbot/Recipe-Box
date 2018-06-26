import React from 'react';
import { Icon, Grid, Image, Divider, Header, Search, Card, Button } from 'semantic-ui-react';
import Title from '../../components/Title';
import ConfirmationModal from './ConfirmationModal';

export default class ReviewInitial extends React.Component {
 
  render() {
    console.log(this.props)
    const [title, img, ingredients] = this.props.mainRecipe;
     

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

            <Grid.Column width={12}>
              <Header >You are close to getting your delicious meal! </Header>
              
         
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>
              <Button negative 
              style={{margin: '15px'}}
              onClick={() => this.props.history.push('/')}
              
              >Cancel order </Button> 
              <Button primary icon
                onClick={() => this.props.history.replace('/delivery')}
              
              >
                Proceed <Icon name="right chevron" />

              </Button>
          
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
