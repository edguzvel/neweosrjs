// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import  AuthDisplay  from './components/AuthDisplay'; // Adjust imports as necessary

import  Card  from './components/Card';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={
            <>
              <AuthenticatedTemplate>
                <AuthDisplay /> {/* Authenticated users will see this */}
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
  <Card /> {/* Unauthenticated users will see this */}
</UnauthenticatedTemplate>

            </>
          } />
          {/* Add more routes as needed */}
        </Routes>
      
    </Router>
  );
}

export default App;
