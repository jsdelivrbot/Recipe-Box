import React from 'react';
import {
  Image,
  Header,
  Modal,
  Form,
} from "semantic-ui-react";


const iconStyle = {
  display: "inline",
  height: "35px",
  padding: "5px 15px"
};

const icon = <Image
  className="icon"
  style={iconStyle}
  src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/ekQ6-edit.png"
/>

const EditOrder = props => {
 
  return (
    <div>
    <Modal trigger={icon}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
    </Modal>
    </div>
  )
}

export default EditOrder;