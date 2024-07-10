// App.js will be the main entry point for your application. It will be responsible for rendering the correct components based on the user's authentication status.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import Feed from './components/Feed';
 // Adjust imports as necessary

import  Card  from './components/Card';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={
            <>
              <AuthenticatedTemplate>
                <Feed /> {/* Authenticated users will see this */}
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
