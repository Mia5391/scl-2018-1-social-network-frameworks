import React from 'react';
import './Login.css';
import {Input, Icon, Button} from 'react-materialize';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import firebaseIntegration from '../../firebase' ;
import { withRouter } from 'react-router-dom';

const AuthButton = withRouter(
  ({ history }) =>
    firebaseIntegration.auth().isAuthenticated ? (
        <button
          onClick={() => {
            firebaseIntegration.auth().signInWithEmailAndPassword(this.state.email, this.state.password)(() => history.push("/timeline"));
          }}
        >
        </button>
     
    ) : (
       <p>You are not logged in.</p>
    )
);

class SignInForm extends React.Component {
constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      // user: null 
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebaseIntegration.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
     
    }).catch((error) => {
        console.log(error);
      });
      // console.log("Ingresado");
  }

 
  render() {
    return ( 
    <Grid>
      <Row className="signInForm">
    <Col className="signIn" s={8}>
    <h1>Sign In</h1>
      <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email"  placeholder="Email">
        <Icon></Icon>
      </Input>
      <Input s={12} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}>
        <Icon></Icon>
      </Input>
      <div className="center">
      <Button s={6} className='ButtonLarge1' waves='light' node='a' href='' type="submit" onClick={AuthButton}> Login </Button>
      
      </div>
    
    </Col>
    
    </Row>
    </Grid>
    );
  }
}

export default withRouter(SignInForm);
