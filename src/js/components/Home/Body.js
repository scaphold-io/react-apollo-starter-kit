import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Description from '../App/Description';
import FontAwesome from 'react-fontawesome';

class Body extends React.Component {
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loggedInUser = user ? user.username : '';

    return (
        <div>
            <Row style={styles.heading}>
                Welcome, you've successfully logged in to <a href="https://scaphold.io" target="_blank" style={styles.scaphold}>Scaphold</a>'s React Apollo Starter Kit!
            </Row>
            <Row style={styles.subheading}>
                <Col smOffset={3} sm={6}>
                    {
                        loggedInUser ? (
                            <div style={styles.subheading.section}>
                                Username: <b>{loggedInUser}</b>
                            </div>
                        ) : ''
                    }
                    <div style={styles.subheading.section}>
                        Feel free to poke around and check out the other functionality that this starter kit provides.
                        We've put together a couple tools for you to get this starter kit rolling.
                    </div>
                    <div style={styles.subheading.section}>
                        So by all means, modify the code, break it, and learn about the same awesome technology that Facebook is built on.
                    </div>
                    <div style={styles.subheading.section}>
                        <Button bsStyle="primary" bsSize="large" target="_blank" href="https://scaphold.io">Learn more <FontAwesome name="check" /></Button>
                        <Button style={styles.slack} bsSize="large" target="_blank" href="http://slack.scaphold.io">Join our Slack <FontAwesome name="slack" /></Button>
                    </div>
                </Col>
            </Row>
            <Description />
        </div>
    );
  }
}

const styles = {
    heading: {
        padding: '100px 0 50px 0',
        fontSize: '25px',
        textAlign: 'center'
    },
    subheading: {
        padding: '0 0 50px 0',
        fontSize: '18px',
        textAlign: 'center',
        section: {
            padding: '25px'
        }
    },
    scaphold: {
        color: '#1DAAA0'
    },
    slack: {
        color: 'white',
        backgroundColor: '#1DAAA0'
    }
};

export default Body;
