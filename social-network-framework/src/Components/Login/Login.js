import React from 'react';
import { ContainerTitle } from './ContainerTitle'; 
import SignInForm from './SignInForm';
import './Login.css'; 

class Login extends Component{
    
    render(){
        return (
            <div>
            <ContainerTitle/>    
            <SignInForm/>
            </div>
            
        )
    }
}

export default Login; 