import React from 'react';
import { Image, Header, Popup, Modal } from 'semantic-ui-react';

const Favourites = props => (
  <div >
    <Popup
      trigger={<Header as='h3' block>Your favourites </Header> }wide>
            Favvs
      </Popup>
    <Modal 
      size='small'
      trigger={<Image className='favHeartStyle' size='tiny' src='https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/jV5Y-heart.png'/>}
    >  <Modal.Header>All your favourite recipes</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
        <Modal.Description>
         
        </Modal.Description>
      </Modal.Content> 
    
  

    </Modal>   
  </div>
)

export default Favourites