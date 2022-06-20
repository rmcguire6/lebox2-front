import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from 'App';

const ProtectedRoute = ({children}) => {
  const {token} = useContext(AuthContext);
  console.log('protected', token);
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
