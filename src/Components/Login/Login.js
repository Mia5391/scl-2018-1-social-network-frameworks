import React from 'react';
import Logo from './Logo';
import SignInForm from './SignInForm';
import { Row, Col } from 'react-materialize';
import { Grid } from 'react-material-responsive-grid';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './Login.css';
 import Register from '../Register/Register';
 import firebaseIntegration from '../../firebase'; 
 import Timeline from '../Timeline/Timeline';
 import PrivateRoute from '../../PrivateRoute'; 
 import * as routes from '../../routes'; 



class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    firebaseIntegration.auth(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/timeline" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Router>
      <Grid>
      <div className="loginContainer">
        <Row className="bleh" >
          <Col s={12}>
            <div className="containerTitle">
              <Logo />
            </div>
          </Col>
        </Row>

        <SignInForm />
        {/* <Register /> */}
        <div>
        <Link  to={process.env.PUBLIC_URL + routes.REGISTER}>¿No tienes una cuenta? ¡Regístrate!</Link>
        <Route exact path="/register" component={Register}></Route>
        <PrivateRoute path="/timeline" component={Timeline} />
        </div>
        
      </div>
      </Grid>
    </Router>
      
    );
  }
}


export default Login; 
