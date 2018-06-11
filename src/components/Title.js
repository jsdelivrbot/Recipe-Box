import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const titleStyle = {
  color: '#4b4b4b',
  padding: '15px 30px'
}

const Title = props => (
  <div style={titleStyle}>
    <Header as='h1' icon textAlign='center'>
      <Icon name='food' circular />
      <Header.Content>Recipe-Box</Header.Content>
    </Header>
   
  </div>
)

export default Title