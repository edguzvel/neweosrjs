// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { Home } from './components/Home'; // Adjust imports as necessary
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <AuthenticatedTemplate>
                <Home /> {/* Authenticated users will see this */}
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
  <div >
    Please sign-in to see your profile information.
  </div>
</UnauthenticatedTemplate>

            </>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
