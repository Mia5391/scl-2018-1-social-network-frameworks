import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';
import Timeline from './Components/Timeline/Timeline';
import PrivateRoute from './Components/Timeline/Timeline';
// import RouterApp from './RouterApp'
import * as routes from './routes';




class App extends Component {
    render() {
      return (
      <Router basename={process.env.PUBLIC_URL + '/'}>
      <div className="App">
        <Route exact path={routes.LOGIN} component={Login} />
        {/* <Route exact path={routes.REGISTER} component={Register} />  */}
        <PrivateRoute exact path={routes.TIMELINE} component={Timeline} />
      </div>
    </Router>
  );
}
}

export default App;