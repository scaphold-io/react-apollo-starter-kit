import React from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import Header from './Header';
import Body from './Body';

class Home extends React.Component {
  render() {
    if (!localStorage.token) {
      browserHistory.push('/');
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
