import React from 'react';
import ReduxDemo from './pages/ReduxDemo';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/Chatroom';
import Matched from './pages/Matched';
import MatchingUp from './pages/MatchingUp';
import NoUserFound from './pages/NoUserFound';
import History from './pages/History';
import LoginPage from './pages/LoginPage';
import RouteGuard, { RouteProps } from './utils/RouteGuard';

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

// <div>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/redux-demo" element={<ReduxDemo />} />
//     <Route path="/chat-room" element={<ChatRoom />} />
//     <Route path="/matched" element={<Matched />} />
//     <Route path="/matching-up" element={<MatchingUp />} />
//     <Route path="/no-user-found" element={<NoUserFound />} />
//     <Route path="/history" element={<History />} />
//     <Route path="/login" element={<LoginPage />} />
//   </Routes>
// </div>
export default App;
