import React from 'react';
import './Login.css';
import {Row, Input, Icon, Button, Col} from 'react-materialize'
import firebaseIntegration from '../../firebase' ;

class SignInForm extends React.Component {
constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
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
  }
 
  render() {
    return ( 
    <Row className="signInForm">
    <Col s={12}>
      <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email"  placeholder="Email">
        <Icon></Icon>
      </Input>
      <Input s={12} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}>
        <Icon></Icon>
      </Input>
      <div className="center">
      <Button s={6} className='ButtonLarge1' waves='light' node='a' href='' type="submit" onClick={this.login}> Login </Button>
      </div>
    </Col>
    
    </Row>
    );
  }
}

export default SignInForm;