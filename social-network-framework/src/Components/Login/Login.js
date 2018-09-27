import React from 'react';
import Logo from './Logo';
import SignInForm from './SignInForm';
import { Row, Col } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Login.css';
// import Register from '../Register/Register';

const Login = () => {
  return (
    <Router>
      <div className="loginContainer">
        <Row className="bleh" > //FIX
          <Col s={12}>
            <div className="containerTitle">
              <Logo />
            </div>
          </Col>
        </Row>

        <SignInForm />
        {/* <Register /> */}
        <Link to="/register">¿No tienes una cuenta? ¡Regístrate!</Link>
        {/* <Route path="/register" component={Register}></Route> */}
      </div>
    </Router>
  )
}

handleSubmit(e) = async event => {
  event.preventDefault();

  try {
    await Auth.signIn(this.state.email, this.state.password);
    this.props.userHasAuthenticated(true);
    this.props.history.push("/");
  } catch (e) {
    alert(e.message);
  }
}

export default Login;
