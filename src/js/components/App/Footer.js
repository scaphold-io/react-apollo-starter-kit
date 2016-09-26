import React from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
  render() {
    return (
      <p style={styles.footer}>Made with <FontAwesome name='heart'/> from the Scaphold team</p>
    );
  }
}

export default Footer;

const styles = {
  footer: {
    textAlign: 'center',
    paddingTop: 20,
    color: '#777',
    borderTop: '1px, solid, #e5e5e5'
  }
};
