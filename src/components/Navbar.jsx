import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importera Link-komponenten



function NavBar(){

    // State för att hantera dropdown-menyn
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 // Funktion för att toggla menyn
 const toggleMenu = () => {
   setIsMenuOpen((prev) => !prev);
 };

    return (
<>
<header>
          <div className="navbar">
            <div className="logo">
              <Link to="/"></Link>
            </div>
            <ul className="links">
              <li>
                <Link  to="/">Hero</Link >
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/livechat">Livechat</Link>
              </li>
            </ul>
            <a href="#" className="action_btn">
              Get started
            </a>
            <div className="toggle_btn" onClick={toggleMenu}>
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
          </div>
              {/* Dropdown-menu */}
              <div className={`dropdown_menu ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <Link to="/">Hero</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link  to="/livechat">Livechat</Link>
              </li>
              <li>
                <Link to="/" className="action_btn">Get started</Link>
              </li>
            </div> 
            </header>
</>

    )
}

export default NavBar; 



     
