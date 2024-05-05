// src/App.js
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user,  logout, loginWithRedirect, getAccessTokenSilently, getAccessTokenWithPopup } =
    useAuth0();

  useEffect(() => {
    if(user) {
      console.log('userinfo-------------------->', user);
    }
  }, [user])

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user?.name}{' '}
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <>
      <button onClick={() => loginWithRedirect()}>      Log in with Twitter    </button>;
      <button onClick={() => getAccessTokenSilently()}>      Log in with Twitter getAccessTokenSilently    </button>;
      <button onClick={() => getAccessTokenWithPopup()}>      Log in with Twitter  getAccessTokenSilently   </button>;
      </>
    )
  }
}

export default App;