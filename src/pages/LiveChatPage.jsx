import { useState } from 'react';
import LiveChat from '../components/LiveChat';
import NavBar from '../components/Navbar';

export default function LiveChatPage(socket) {
  return (
    <>
      <NavBar />
      <LiveChat />
    </>
  );
}
