import { useState } from 'react';
import NavBar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <section id='hero'>
          <h1>Welcome</h1>
        </section>
      </main>
    </>
  );
}
