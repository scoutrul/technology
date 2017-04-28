import React, { Component } from 'react';
import Technology from './components/Technology';
import Specialization from './components/Specialization';
import Career from './components/Career';
import About from './components/About';
import './index.css';
import { Route, NavLink } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-bottom">
          <div className="container">
            <ul className="nav nav-pills">
              <li>
                <NavLink exact activeClassName="activeNav" to="/">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeNav" to="/Technology">
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeNav" to="/Specialization">
                  Specialization
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeNav" to="/Career">
                  Career
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={About} />
        <Route path="/Technology" component={Technology} />
        <Route path="/Specialization" component={Specialization} />
        <Route path="/Career" component={Career} />

      </div>
    );
  }
}
