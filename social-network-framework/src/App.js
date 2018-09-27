import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';
import Timeline from './Components/Timeline/Timeline';




class App extends Component {
  render() {
    return (
     <div className= "app">
        <Router>
         <div>
          <Route exact path="/" component={Login}/>
          {/* <Route path="/register" component={Register}/> */}
          <Route path="/timeline" component={Timeline}/>
          </div>
        </Router>
        {/* </div> */}
        </div>
    );
  }
}

export default App;