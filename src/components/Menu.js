import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

export default class MenuBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleMyOrdersClick = (e, { name }) => {
      this.props.history.replace('/my-orders')
      this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
   console.log(this.props)
    return (
      <Menu inverted>
      <NavLink to="/">  <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        /></NavLink>      
        <NavLink to="/custom-order" ><Menu.Item
          name="Order"
          active={activeItem === "Order"}
          onClick={this.handleItemClick}
        /></NavLink>
       <NavLink to="/team" ><Menu.Item
          name="Who We Are"
          active={activeItem === "Who We Are"}
          onClick={this.handleItemClick}
        /> </NavLink>
       <Menu.Item
          name="My Orders"
          active={activeItem === "My Orders"}
          onClick={this.handleMyOrdersClick}
          position="right"
          link={false}
        ></Menu.Item>
      </Menu>
    );
  }
}
