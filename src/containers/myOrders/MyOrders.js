import React from "react";
import { Grid, Image, Divider, Header, Button } from "semantic-ui-react";
import Title from "../../components/Title";
import DisplayMyOrder from "../../components/myOrders/DisplayMyOrderCard";
export default class MyOrders extends React.Component {
  state = {
    orders: []
  };

  componentDidMount() {
    fetch("https://recipe-box-15453.firebaseio.com/orders.json")
      .then(data => {
        return data.json();
      })
      .then(orders => {
        this.setState({
          orders
        });
      })
      .catch(response => console.log(response));
  }
  render() {
    const orders = this.state.orders;

    const ordersArray = Object.entries(orders);
    const DisplayOrders = ordersArray.map(order => {
      const instructionsArray = Object.entries(order);
      return (
        <DisplayMyOrder
          title={instructionsArray[1][1].instructions.title}
          directions={instructionsArray[1][1].instructions.directions}
          specialRequests={instructionsArray[1][1].instructions.specialRequests}
          price={instructionsArray[1][1].price}
        />
      );
    });

    return (
      <div>
        <Grid celled stackable>
          <Grid.Row>
            <Grid.Column only="computer" width={2}>
              <Image
                className="icon"
                src="https://uploads.codesandbox.io/uploads/user/e276cc26-2428-467a-a9cf-7ba3ffd6415c/xeT5-soup.png"
                size="large"
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <Title />
              <Divider />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={12}>
              <div className="groupBoxes"> {DisplayOrders} </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={13}>
              <Button
                negative
                style={{ margin: "15px" }}
                onClick={() => this.props.history.goBack()}
              >
                Go back{" "}
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
