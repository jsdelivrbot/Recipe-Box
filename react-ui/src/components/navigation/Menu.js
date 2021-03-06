import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class MenuBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleMyOrdersClick = (e, { name }) => {
    this.props.history.replace("/my-orders");
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;

    let authenticated;
    this.props.token !== null
      ? (authenticated = true)
      : (authenticated = false);

    let logInStatus;
    authenticated === false
      ? (logInStatus = "Log-in")
      : (logInStatus = "Log-out");

    let authenticationRoutes;
    authenticated === false
      ? (authenticationRoutes = "auth")
      : (authenticationRoutes = "LogOut");

    let showMyOrders;
    authenticated === false
      ? (showMyOrders = null)
      : (showMyOrders = (
          <Menu.Item
            name="My Orders"
            active={activeItem === "My Orders"}
            onClick={this.handleMyOrdersClick}
            position="right"
            link={false}
          />
        ));

    return (
      <Menu inverted>
        <NavLink to="/">
          {" "}
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/custom-order">
          <Menu.Item
            name="Order"
            active={activeItem === "Order"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/team">
          <Menu.Item
            name="Who We Are"
            active={activeItem === "Who We Are"}
            onClick={this.handleItemClick}
          />{" "}
        </NavLink>
        <NavLink to={authenticationRoutes}>
          <Menu.Item
            name={logInStatus}
            active={activeItem === "Log-in"}
            onClick={this.handleMyOrdersClick}
            link={false}
          />
        </NavLink>
        {showMyOrders}
      </Menu>
    );
  }
}
