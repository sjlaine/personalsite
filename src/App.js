import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="App-body">
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/about" />} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
