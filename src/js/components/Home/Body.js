import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Description from '../App/Description';

class Body extends React.Component {
  render() {
    return (
        <div>
            <Row style={styles.heading}>
                Welcome, you've successfully logged in to Scaphold's React Apollo Starter Kit!
            </Row>
            <Row style={styles.subheading}>
                <Col smOffset={3} sm={6}>
                    <div style={styles.subheading.section}>
                        Feel free to poke around and check out the other functionality that this starter kit provides.
                        We've put together a couple tools for you to get this starter kit rolling.
                    </div>
                    <div style={styles.subheading.section}>
                        So by all means, modify the code, break it, and learn about the same awesome technology that Facebook is built on.
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
    }
};

export default Body;
