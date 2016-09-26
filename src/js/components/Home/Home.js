import React from 'react';
import {Button} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import Header from './Header';
import Body from './Body';

class Home extends React.Component {
  render() {
    if (!localStorage.token) {
      hashHistory.push('/');
    }

    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default Home;
