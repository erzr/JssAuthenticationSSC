import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const WelcomeMessage = ({fields}) => {
  const {data} = fields;
  const isAuthenticated = data && data.user && data.user.isAuthenticated;
  return (
    <h1>
      {isAuthenticated && <h1>Welcome {data.user.fullName}!</h1>}
      {!isAuthenticated && <h1>Welcome!</h1>}
    </h1>
  );
}

export default WelcomeMessage;
