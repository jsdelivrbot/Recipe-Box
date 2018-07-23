import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Message, Header, List, Button } from "semantic-ui-react";
import Title from "../../../components/Title";
import StepsSecond from "../../../components/mainView/orders/steps/StepsSecond";
import DisplayCustomOrder from "../../../components/mainView/orders/DisplayCustomOrder";
import DisplayDelivery from "../../../components/mainView/orders/DisplayDelivery";

import * as actionCreators from "../../../store/actions/index";

class ConfirmationOrder extends React.Component {
  state = {
    orderSent: false
  };

  orderSent() {
    this.setState({ orderSent: true });
    const deliveryInfo = this.props.deliveryInfo;
    const orderInfo = this.props.customOrder;
    const token = this.props.idToken;

    this.props.onOrderRecipe(orderInfo, deliveryInfo, token);
  }
  componentDidMount() {
    this.setState({ orderSent: false });
  }

  render() {
    const { name, street, town, postcode, email } = this.props.deliveryInfo;

    const customOrder = this.props.customOrder;
    let title, directions, specialRequests;
    if (customOrder !== null) {
      title = customOrder.title;
      directions = customOrder.directions;
      specialRequests = customOrder.specialRequests;
    }

    // const ingredientsArray = Object.entries(this.props.recipeInfo.ingredients)
    // const ingredientsDisplay = ingredientsArray.map(el => {
    //   let [item, num] = el;

    //   const upper = item[0].toUpperCase() + item.substr(1);
    //   return <List.Item key={el.id}>{upper} : {num}</List.Item>;
    // });
    // const recipeTitle = this.props.recipeInfo.title;
    const Loading = <div className="loader">Loading.. </div>;
    const successMsg = (
      <Message positive>
        <Message.Header> Success!</Message.Header>
        <p>Your food is on its way!! Enjoy!!</p>
      </Message>
    );
    const failureMsg = (
      <Message negative>
        <Message.Header>Something went wrong!</Message.Header>
        <p>Please try again</p>
      </Message>
    );

    return (
      <div>
        <Header>Finalise Order</Header>

        <p>Is this information correct?</p>
        {this.state.orderSent && !this.props.orderAccepted ? Loading : null}
        {this.props.orderAccepted && this.props.orderLoaded ? successMsg : null}
        {!this.props.orderAccepted && this.props.orderLoaded
          ? failureMsg
          : null}

        {/*<List bulleted>
        {ingredientsDisplay}
      </List>*/}

        <br />

        {this.props.deliverInfo !== undefined ? this.props.deliveryInfo : null}
        <Button primary Icon onClick={this.orderSent.bind(this)}>
          {" "}
          Order!
        </Button>

        <div className="groupBoxes">
          <DisplayCustomOrder
            title={title}
            directions={directions}
            specialRequests={specialRequests}
          />
          <DisplayDelivery
            namer={name}
            street={street}
            town={town}
            postcode={postcode}
            email={email}
          />
        </div>

        <Button
          negative
          style={{ margin: "15px" }}
          onClick={() => this.props.history.replace("/")}
        >
          Cancel order{" "}
        </Button>
        <Button
          style={{ margin: "15px" }}
          onClick={() => this.props.history.goBack()}
        >
          Go back{" "}
        </Button>
        <StepsSecond />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    customOrder: state.placeOrder.customOrder,
    deliveryInfo: state.delivery.deliveryInfo,
    token: state.auth.idToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderRecipe: (order, deliveryInfo, token) =>
      dispatch(actionCreators.purchaseOrderStart(order, deliveryInfo, token))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmationOrder)
);
