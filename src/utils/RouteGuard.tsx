import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../redux/selectors/auth';

export type RouteProps = {
  Component: React.ComponentType;
  beforeLoggedIn?: boolean;
  afterLoggedIn?: boolean;
  path?: string;
};

const RouteGuard: React.FC<RouteProps> = ({
  Component,
  beforeLoggedIn = false,
  afterLoggedIn = false,
}) => {
  const { isAuthorized, topic } = useSelector(authSelector);
  if (afterLoggedIn && !isAuthorized) {
    return <Navigate to="/login" />;
  }
  if (beforeLoggedIn && isAuthorized) {
    return <Navigate to="/" />;
  }
  // if (isMatchmaking && !isAuthorized) {
  //   return <Navigate to="/" />;
  // }
  return <Component />;
};

export default RouteGuard;
