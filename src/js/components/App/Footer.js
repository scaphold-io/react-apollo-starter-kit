import React from 'react';
import FontAwesome from 'react-fontawesome';

const styles = {
  footer: {
    textAlign: 'center',
    paddingTop: 20,
    color: '#777',
    borderTop: '1px, solid, #e5e5e5',
  },
};

class Footer extends React.Component { // eslint-disable-line
  render() {
    return (
      <p style={styles.footer}>Made with <FontAwesome name='heart'/> from the Scaphold Team</p>
    );
  }
}

export default Footer;
