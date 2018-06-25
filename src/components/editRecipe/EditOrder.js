import React from 'react';
import {
  Image,
  Modal,
} from "semantic-ui-react";
import EditForm from './EditForm';

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
        <Modal.Header>Edit your meal</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
             <EditForm 
             recipe={props.recipe} 
             editSubmit={props.editSubmit}
             />
          </Modal.Description>
        </Modal.Content>
    </Modal>
    </div>
  )
}

export default EditOrder;