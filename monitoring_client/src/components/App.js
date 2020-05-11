import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './common/Header';
import { Tools } from './tools/tools';
import Ratings from './ratings/ratings';
import { Provider } from 'react-redux';
import store from '../store';
import EditTool from './tools/editTool';
import EditRating from './ratings/editRating';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Tools} />
              <Route exact path="/tool/:toolId" component={EditTool} />
              <Route exact path="/tool" component={EditTool} />
              <Route path="/ratings/edit/:toolId" component={EditRating} />
              <Route path="/ratings/:toolId" component={Ratings} />
              <Route path="/ratings" component={Ratings} />
            </Switch>
          </>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
