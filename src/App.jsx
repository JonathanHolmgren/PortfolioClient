import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import LiveChatPage from './pages/LiveChatPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/livechat' element={<LiveChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
