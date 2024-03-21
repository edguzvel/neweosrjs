import React, { Component } from 'react';
import { config } from '../Config';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
 
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: null,
      error: null,
      msalInitialized: false, // New state variable
    };
    this.publicClientApplication = null;
  }
 
  async componentDidMount() {
    await this.initializeMsal();
    this.checkIfAuthenticated();
    this.setState({ msalInitialized: true }); // Set to true once initialized
  }
 
  async initializeMsal() {
    this.publicClientApplication = new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    });
  }
 
  async checkIfAuthenticated() {
    if (this.publicClientApplication) {
      try {
        const accounts = await this.publicClientApplication.getAllAccounts();
        if (accounts.length > 0) {
          this.setState({
            isAuthenticated: true,
            user: accounts[0],
          });
        }
      } catch (error) {
        console.error('Check authentication error:', error);
      }
    }
  }
 
  login = async () => {
    if (this.state.msalInitialized && this.publicClientApplication) {
      try {
        await this.publicClientApplication.loginPopup({
          scopes: config.scopes,
          prompt: InteractionType.SelectAccount,
        });
        this.checkIfAuthenticated();
      } catch (error) {
        console.error('Login error:', error);
        this.setState({
          isAuthenticated: false,
          user: null,
          error: error.message,
        });
      }
    } else {
      console.error('MSAL initialization is not complete.');
    }
  };
 
  logout = () => {
    if (this.publicClientApplication) {
      this.publicClientApplication.logout();
      this.setState({
        isAuthenticated: false,
        user: null,
      });
    } else {
      console.error('MSAL initialization is not complete.');
    }
  };
 
  render() {
    const { isAuthenticated, msalInitialized } = this.state;
 
    return (
<div>
<h1>Welcome to the Microsoft Authentication Library For React</h1>
        {isAuthenticated ? (
<div>
<p>Hello, {this.state.user ? this.state.user.name : 'User'}!</p>
<button onClick={this.logout} className="button">
              Logout
</button>
</div>
        ) : (
<div>
<p>This sample demonstrates how to use MSAL for React to login users and call an API.</p>
<p>Click the button below to login</p>
<button onClick={this.login} className="button" disabled={!msalInitialized}>
              Login
</button>
</div>
        )}
</div>
    );
  } 
}