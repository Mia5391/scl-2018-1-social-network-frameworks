import React from 'react';
import Logo from './Logo';
import SignInForm from './SignInForm';
import { Row, Col } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Login.css';
import Register from '../Register/Register';


const Login = () => {
  return (
    <Router>
      <div className="loginContainer">
        <Row className="bleh" >
          <Col s={12}>
            <div className="containerTitle">
              <Logo />
              <h1>Sign In</h1>
            </div>
          </Col>

        </Row>
        <SignInForm />
        <Register />
        <Link to="/register">¿No tienes una cuenta? ¡Regístrate!</Link>
        <Route path="/register" component={Register}></Route>
      </div>
    </Router>
  )
}

export default Login; 