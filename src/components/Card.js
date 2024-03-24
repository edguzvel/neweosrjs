import React from 'react';
import './Login.css';
import { SignInButton } from './SignInButton';
 
const Card = (props) => {
  return (
<div className="container">
<div className="card">
<h1>{props.children}</h1>
</div>
<div className="button-container">
        {/* Assuming SignInButton renders a button element */}
<SignInButton className="button" />
</div>
</div>
  );
};
 
export default Card;