import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './common/Header';
import { Tools } from './tools';
import Ratings from './ratings';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Tools} />
              <Route path="/ratings" component={Ratings} />
            </Switch>
          </>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
