import React from 'react';
import {Row, Col, Button, Jumbotron} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Hero extends React.Component {
  render() {
    return (
      <Row>
        <Col smOffset={2} sm={8}>
          <Jumbotron style={styles.jumbotron}>
            <h1>Welcome!</h1>
            <br />
            <p>
              Here you'll find <a href="https://scaphold.io" target="_blank" style={styles.scaphold}>Scaphold.io</a>'s Boilerplate React-Apollo template
              &nbsp;<FontAwesome name="smile-o" />
            </p>
            <br />
            <p>
              <Button bsStyle="primary" bsSize="large" target="_blank" href="https://scaphold.io">Learn more <FontAwesome name="check" /></Button>
              <Button style={styles.slack} bsSize="large" target="_blank" href="https://scapholdslackin.herokuapp.com/">Join our Slack <FontAwesome name="slack" /></Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Hero;

const styles = {
  jumbotron: {
    marginTop: 20,
    borderRadius: 10,
    textAlign: 'center'
  },
  scaphold: {
    color: '#1DAAA0'
  },
  slack: {
    color: 'white',
    backgroundColor: '#1DAAA0'
  }
};
