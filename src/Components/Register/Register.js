import React, { Component } from 'react';
import firebaseIntegration from '../../firebase'
import { withRouter } from 'react-router-dom';
import {Row, Input, Icon, Button, Col} from 'react-materialize'
import './Register.css';
import * as routes from '../../routes'

const initialState = {
  username: '',
  email: '',
  password: '',
};

const history = this.props;

class Register extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state =({ ...initialState });
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    firebaseIntegration.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.setState({ ...initialState });
      {history.push(routes.TIMELINE)}
    }).then((u) => {  
     
    })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <Row className="example">
        <Col s={12}>
          <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email">
            <Icon></Icon>
          </Input>
          <Input s={12} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}>
            <Icon></Icon>
          </Input>
          <div className="center">
            <Button s={6} className='ButtonLarge1' waves='light' node='a' onClick={this.signup}>REGISTER</Button>
            
            
          </div>
        </Col>
      </Row>
    )
  }

}

export default withRouter(Register); 