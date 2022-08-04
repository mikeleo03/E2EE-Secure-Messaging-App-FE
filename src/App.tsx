import React from 'react';
import ReduxDemo from './pages/ReduxDemo';
import './main.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/Chatroom';
import History from './pages/History';
import LoginPage from './pages/LoginPage';
import RouteGuard, { RouteProps } from './utils/RouteGuard';
import Matchmaking from './pages/Matchmaking';

export const routes: RouteProps[] = [
  {
    Component: LoginPage,
    path: '/login',
    beforeLoggedIn: true,
  },
  {
    Component: Home,
    path: '/',
    afterLoggedIn: true,
  },
  {
    Component: ChatRoom,
    path: '/chat',
    afterLoggedIn: true,
  },
  {
    Component: History,
    path: '/history',
    afterLoggedIn: true,
  },
  {
    Component: ReduxDemo,
    path: '/redux-demo',
    afterLoggedIn: true,
  },
  {
    Component: Matchmaking,
    path: '/matchmaking',
    afterLoggedIn: true,
  },
];

const App: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <RouteGuard {...route}>
              <route.Component />
            </RouteGuard>
          }
        ></Route>
      ))}
    </Routes>
  );
};

export default App;
