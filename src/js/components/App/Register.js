import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { browserHistory } from 'react-router';
import { Button, Modal, OverlayTrigger, NavItem, Form, FormControl, FormGroup, Row, Col, ControlLabel, Alert } from 'react-bootstrap';
import config from './../../../config';

const CreateUserMutation = gql `
  mutation CreateUserMutation($data: CreateUserInput!) {
    createUser(input: $data) {
      token
      changedUser {
        id
        username
      }
    }
  }
`;

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      registerEmail: '',
      registerPassword: '',
      errors: []
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this._handleRegisterEmailChange = this._handleRegisterEmailChange.bind(this);
    this._handleRegisterPasswordChange = this._handleRegisterPasswordChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  validateInput() {
    return (
      this.state.registerEmail && this.state.registerEmail.length &&
      this.state.registerPassword && this.state.registerPassword.length
    );
  }

  registerUser() {
    if (this.validateInput()) {
      this.props.register({
        username: this.state.registerEmail,
        password: this.state.registerPassword
      }).then(({ data }) => {
        if (!data.errors) {
          debugger;
          localStorage.setItem('token', data.createUser.token);
          localStorage.setItem('user', JSON.stringify(data.createUser.changedUser));
          this.setState({ errors: [] });
          browserHistory.push('/home');
        } else {
          this.setState({ errors: data.errors });
        }
      }).catch(errors => {
        this.setState({ errors: errors.graphQLErrors });
      });
    } else {
      this.setState({
        errors: [{
          message: 'Username or password was not filled out. Please fill out the required fields.'
        }]
      });
    }
  }

  _handleRegisterEmailChange(e) {
    this.setState({
      registerEmail: e.target.value
    });
  }

  _handleRegisterPasswordChange(e) {
    this.setState({
      registerPassword: e.target.value
    });
  }

  render() {
    return (
      <NavItem onClick={this.open}>
        Register

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Register Here!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={styles.errors}>
              {this.state.errors.map((err, i) => <Alert key={i} bsStyle="danger">{err.message}</Alert>)}
            </div>
            <Form horizontal>
              <Row>
                <FormGroup controlId="formRegisterEmail">
                  <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Email
                  </Col>
                  <Col sm={8}>
                    <FormControl type="email" placeholder="Email" onChange={this._handleRegisterEmailChange} />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formRegisterPassword">
                  <Col componentClass={ControlLabel} smOffset={1} sm={2}>
                    Password
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" onChange={this._handleRegisterPasswordChange} />
                  </Col>
                </FormGroup>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" type="submit" onClick={this.registerUser}>Register</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </NavItem>
    );
  }
}

const styles = {
  errors: {
    textAlign: 'left',
    color: 'red'
  }
};

const RegisterWithData = graphql(CreateUserMutation, {
  props: ({ mutate }) => ({
    register: (data) => mutate({
      variables: {
        data,
      },
    }),
  }),
})(Register);
export default RegisterWithData;
