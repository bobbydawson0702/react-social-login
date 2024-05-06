import React from "react";
import TwitterLogin from "react-twitter-login";

export default () => {
  const authHandler = (err:any, data:any) => {
    console.log(err, data);
  };

  const CONSUMER_KEY = process.env.REACT_APP_TWITTER_V2_CONSUMER_KEY;
  const CONSUMER_SECRET = process.env.REACT_APP_TWITTER_V2_CONSUMER_SECRET;


  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={CONSUMER_KEY || ''}
      consumerSecret={CONSUMER_SECRET || ''}
      callbackUrl="https://react-social-login-sigma.vercel.app/"
    />
  );
};