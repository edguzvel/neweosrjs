import React from 'react';
import './Login.css';
import { SignInButton } from './SignInButton';
import landingPageImage from '../landingPageImage.png';

const Card = (props) => {
  return (
    <div className="container">
      <div className="logo">ShiftIO</div> {/* Add this line for the logo */}
      <div className="card">
        <img src={landingPageImage} alt="Landing Page" className="landing-image" />
        <h1>{props.children}</h1>
      </div>
      <div className="button-container">
        <SignInButton className="button" />
      </div>
    </div>
  );
};

export default Card;
