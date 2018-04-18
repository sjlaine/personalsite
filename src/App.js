import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import About from './About';
import Resume from './Resume';
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
                <Route exact path="/resume" component={Resume} />

                {/*
                <Route exact path="/" component={Contact} />
                */}
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
