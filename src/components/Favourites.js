import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const heartStyle = {
  paddingLeft: '40px'
}

const Favourites = props => (
  <div >
    <Header as='h3' block>Your favourites </Header>
    <Image style={heartStyle} size='tiny' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/jV5Y-heart.png' />
  </div>
)

export default Favourites