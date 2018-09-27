import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';
import Timeline from './Components/Timeline/Timeline';
import * as routes from './routes';




class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + '/'}>
        <div className="App">
          <Route exact path={routes.Login} component={Login} />
          <Route exact path={routes.Register} component={Register} />
          <Route exact path={routes.Timeline} component={Timeline} />
        </div>
      </Router>
    );
  }
}

export default App;