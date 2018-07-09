import React from 'react';
import { Grid, Image, Divider, Card, Icon } from 'semantic-ui-react';
import Title from '../Title';


class WeekTopPage extends React.Component  {
 
  state = {
   cardData: {}
  }  

 componentDidMount() {
   const id = this.props.match.params.id;
    if (id) {
      fetch(`https://recipe-box-15453.firebaseio.com/topWeek/${id}.json` )
        .then(data => {
          return data.json();
        }).then(cardData => this.setState({cardData}))
        .catch(error => console.log(error))
    }
 }


 render () {
   console.log(this.props)
   console.log(this.state)
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
              <Card size='large' key={this.state.cardData.id}>
                <Image size='large' src={this.state.cardData.img} />
                <Card.Content>
                  <Card.Header>{this.state.cardData.header}</Card.Header>
                  <Card.Meta>
                    <span className='date'>From {this.state.cardData.date}</span>
                  </Card.Meta>
                  <Card.Description>{this.state.cardData.description}</Card.Description>
                  <Card.Description>{this.state.cardData.longerDescription}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a> <Icon name='like' />{this.state.cardData.likes}
                  </a>
                </Card.Content>
              </Card>

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
  };
} 
 

export default WeekTopPage