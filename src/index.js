import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./utils/apolloClient";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';

ReactDOM.render(
  <>
    <Router>
      <ScrollTop>
        <ApolloProvider client={client}>
          <App/>
        </ApolloProvider>
      </ScrollTop>
    </Router>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
