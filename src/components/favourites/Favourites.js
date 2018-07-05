import React from "react";
import { connect } from "react-redux";
import { Image, Header, Popup, Modal } from "semantic-ui-react";
import FavList from "./FavouritesList";

const Favourites = props => (
  <div>
    <Popup
      trigger={
        <Header as="h3" block>
          Your favourites{" "}
        </Header>
      }
      wide
    >
      Favvs
    </Popup>
    
    <Modal
      size="small"
      trigger={
        <Image
          className="favHeartStyle"
          size="tiny"
          src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/jV5Y-heart.png"
        />
      }
    >
      {" "}
      <Modal.Header>All your favourite recipes</Modal.Header>
      
        <Modal.Content> 
        <Modal.Description>
          <FavList favs={props.favourites} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>
);

const mapStateToProps = state => {
  console.log(state)
  return {
    favourites: state.favourites
  }
}

export default connect(mapStateToProps)(Favourites);
