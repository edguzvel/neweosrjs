// Home.js
import React, { useEffect, useState } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from '../authConfig'; // Adjust path as necessary

export const Home = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (accounts.length > 0) {
      setUser(accounts[0]);
    }
  }, [accounts]);

  const signIn = () => {
    instance.loginPopup(loginRequest).catch(e => console.error(e));
  };

  const signOut = () => {
    instance.logout();
  };

  return (
    <div>
      <h1>Welcome to the Microsoft Authentication Library For React</h1>
      {isAuthenticated ? (
        <div>
          <p>Hello, {user ? user.name : 'User'}!</p>
          <button onClick={signOut} className="button">Logout</button>
        </div>
      ) : (
        <div>
          <p>This sample demonstrates how to use MSAL for React to login users and call an API.</p>
          <button onClick={signIn} className="button">Login</button>
        </div>
      )}
    </div>
  );
};

