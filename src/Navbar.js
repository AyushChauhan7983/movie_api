import React, { Component } from "react";
import { MenuMenu, MenuItem, Input, Menu, Segment } from "semantic-ui-react";

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { search, setSearch } = this.props;

    return (
      <div
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Menu pointing>
          <MenuItem
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="about"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name="contact"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <MenuMenu position="right">
            <MenuItem>
              <Input
                icon="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </MenuItem>
          </MenuMenu>
        </Menu>
      </div>
    );
  }
}
