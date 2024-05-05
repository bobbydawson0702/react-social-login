import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

// Ensure the container element exists in your index.html
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

// Use the actual Auth0 domain, not the URL of your React app
const auth0Domain = 'dev-fna8hakae0rm8r1m.us.auth0.com'; // This should be something like 'dev-xxxxxx.auth0.com'

// Ensure REACT_APP_AUTH0_CLIENTID is defined in your .env file
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;
if (!clientId) throw new Error('REACT_APP_AUTH0_CLIENTID is not defined');

root.render(
  <Auth0Provider
    domain={auth0Domain} // Use the Auth0 domain
    clientId={clientId} // Use the client ID from your environment variables
    authorizationParams={{
        redirect_uri: window.location.origin,
      }}
  >
    <App />
  </Auth0Provider>
);