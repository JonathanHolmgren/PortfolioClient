import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import './App.css'
import LiveChatPage from './pages/LiveChatPage';

function App() {

 

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/livechat' element={<LiveChatPage />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
