import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importera Link-komponenten

import NavBar from '../components/Navbar';
import githubIcon from '../assets/github-mark.png';
import linkedinIcon from '../assets/LI-In-Bug.png';

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <div className='contact-container'>
        <ul className='social-links'>
          <li>
            <Link
              to='https://github.com/JonathanHolmgren'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={githubIcon} alt='GitHub' className='social-icon' />
            </Link>
          </li>
          <li>
            <Link
              to='https://www.linkedin.com/in/jonathan-holmgren-5aa7b415a'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={linkedinIcon} alt='LinkedIn' className='social-icon' />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
