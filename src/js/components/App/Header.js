import React from 'react';
import {browserHistory} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import Logout from '../Home/Logout';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  goToGraphiQL() {
    browserHistory.push('/graphiql');
  }

  goHome() {
    browserHistory.push('/');
  }

  render() {
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
          <Login />
          <Register />
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

const styles = {
  navbar: {
    marginBottom: 0
  }
};
