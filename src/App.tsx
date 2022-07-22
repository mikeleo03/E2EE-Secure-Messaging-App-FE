import React from 'react';
import ReduxDemo from './pages/ReduxDemo';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';

const App: React.FC = () => {
  return (
    <div>
      {/* Hello, World
      <ReduxDemo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux-demo" element={<ReduxDemo />} />
        </Routes>
      </BrowserRouter> */}
      <ChatRoom />
    </div>
  );
};

export default App;
