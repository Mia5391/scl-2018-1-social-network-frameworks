import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';
import firebase from "./firebaseConfig";
import withFirebaseAuth from "react-auth-firebase";
import Timeline from './Components/Timeline/Timeline';




class App extends Component {
  render() {

const {
         signInWithEmail,
         signUpWithEmail,
         signInWithGoogle,
         signInWithFacebook,
         googleAccessToken,
         facebookAccessToken,
         user,
         error
    } = this.props;
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
        <button onClick={signInWithGoogle}>Signin with Google</button>
        <button onClick={signInWithFacebook}>Signin with Facebook</button>
        </div>
    );
  }
}
const authConfig = {
  email: {
    verifyOnSignup: false, // Sends verification email to user upon sign up
    saveUserInDatabase: true // Saves user in database at /users ref
  },
  google: {
    // redirect: true, // Opens a pop up by default
    returnAccessToken: true, // Returns an access token as googleAccessToken prop
    saveUserInDatabase: true // Saves user in database at /users ref
  },
  facebook: {
    // redirect: true, // Opens a pop up by default
    returnAccessToken: true, // Returns an access token as googleAccessToken prop
    saveUserInDatabase: true // Saves user in database at /users ref
  }
};

export default withFirebaseAuth(App, firebase, authConfig);
export default App;
