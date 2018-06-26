import React from 'react';
import { Icon, Grid, Image, Divider, Header, Search, Card, Button } from 'semantic-ui-react';
import Title from '../../components/Title';
import ConfirmationModal from './ConfirmationModal';
import ingredientsCleaner from '../../components/mainView/cleaners/ingredientsCleaner'

export default class ReviewInitial extends React.Component {
 
  render() {
  
    const {title, image_url, ingredients} = this.props.mainRecipe;
   
    const DisplayOrder = (
      <div>
         <Header as='h4'>{title}</Header>
         <Image src={image_url} size='small' />
         <p>{ingredientsCleaner(ingredients)} </p>
      </div>
    ) 

    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column only='computer' width={2}>
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
             
              <Header as='h4' >Is this what you wanted? Remember you can customise everything</Header>
              {DisplayOrder}
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
