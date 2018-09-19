import React from 'react';
import Logo from './Logo'; 
import SignInForm from './SignInForm';
import './Login.css'; 

const Login = () => {
    return (
      <div className="loginContainer">
        <div className= "containerTitle">
        <Logo/>
        <h1>Sign In</h1>
        </div> 
        <SignInForm/>
      </div>
    )
  }

export default Login; 