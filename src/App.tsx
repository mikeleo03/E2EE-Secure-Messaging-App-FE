import React from 'react';
import ReduxDemo from './pages/ReduxDemo';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/Chatroom';
import Matched from './pages/Matched';
import MatchingUp from './pages/MatchingUp';
import NoUserFound from './pages/NoUserFound';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <div>
      {/* Hello, World */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux-demo" element={<ReduxDemo />} />
          <Route path="/chat-room" element={<ChatRoom />} />
          <Route path="/matched" element={<Matched />} />
          <Route path="/matching-up" element={<MatchingUp />} />
          <Route path="/no-user-found" element={<NoUserFound />} />
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
