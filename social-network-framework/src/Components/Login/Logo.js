import React from 'react';
import logoSocialNetwork from './logoSocialNetwork.png'; 
import './Login.css'; 

const Logo = () => {
    return (
      <div>
        <img className="logoApp" alt="logoApp" src={logoSocialNetwork} />
      </div>
    )
  }

export default Logo; 