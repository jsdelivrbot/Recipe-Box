import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';

const titleStyle = {
  color: '#4b4b4b',
  padding: '15px 30px'
}

const imageStyle = {
  padding: '5px',
  border: '2px solid #4b4b4b',
  borderCollapse: 'separate',
  
  borderRadius: '50%'
}

const Title = props => (
  <div style={titleStyle}>
    <Header as='h1' icon textAlign='center'>
      <Image style={imageStyle} src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/8BGG-roller.png' circular />
      <Header.Content>Recipe-Box</Header.Content>
    </Header>
   
  </div>
)

export default Title