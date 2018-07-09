import React from 'react';
import { Grid, Image, Divider, Card, Icon } from 'semantic-ui-react';
import Title from '../Title';


class WeekTopPage extends React.Component  {

 render () {

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
              <Card size='large' key={this.props.id}>
                <Image size='large' src={this.props.img} />
                <Card.Content>
                  <Card.Header>{this.props.header}</Card.Header>
                  <Card.Meta>
                    <span className='date'>From {this.props.date}</span>
                  </Card.Meta>
                  <Card.Description>{this.props.description}</Card.Description>
                  <Card.Description>{this.props.longerDescription}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a> <Icon name='like' />{this.props.likes}
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