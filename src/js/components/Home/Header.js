import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {hashHistory} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Logout from './Logout';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.goToGraphiQL = this.goToGraphiQL.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  goToGraphiQL() {
    hashHistory.push('/graphiql');
  }

  goHome() {
    hashHistory.push('/');
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loggedInUser = user ? user.username : '';

    return (
      <Navbar style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Scaphold</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight={true}>
          <NavItem onClick={this.goHome}>Home</NavItem>
          <NavItem onClick={this.goToGraphiQL}>GraphiQL</NavItem>
          <NavItem>{loggedInUser}</NavItem>
          <Logout />
        </Nav>
      </Navbar>
    );
  }
}

const styles = {
  navbar: {
    marginBottom: 0
  }
};

export default Header;

