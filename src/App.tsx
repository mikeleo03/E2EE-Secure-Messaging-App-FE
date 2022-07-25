import React from 'react';
import ReduxDemo from './pages/ReduxDemo';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';

const App: React.FC = () => {
  return (
    <div>
      {/* Hello, World */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux-demo" element={<ReduxDemo />} />
          <Route path="/chat-room" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
