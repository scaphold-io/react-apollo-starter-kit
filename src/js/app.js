import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, Route, routes, browserHistory, hashHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import App from './components/App/App';
import Home from './components/Home/Home';
import GraphiQLModule from './components/GraphiQL/GraphiQL';
import client from '../apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router
      history={hashHistory}
      routes={routes}
      render={
        applyRouterMiddleware()
      }
    >
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/graphiql" component={GraphiQLModule} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
