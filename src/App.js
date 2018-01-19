import React, { Component } from 'react';
import './App.css';

// importing react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//importing page components
import Home from './Home.js';
import Procedures from './Procedures.js';
import Contacts from './Contacts.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Link to='/'>This goes to the home page </Link>
        <Link to='/procedures'>See our Procedures </Link>
        <Link to='/contacts'>Contact Us</Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/procedures" component={Procedures} />
          <Route exact path="/contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
