import React from 'react';
import './Nav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
function Nav(props) {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>Thapreel Alam</h2>
        </div>
        <div className="menu-link">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            {/* hamburger menu start */}
            <div className="hamburger-menu">
                <a href="#">
                    <GiHamburgerMenu/>
                </a>
            </div>

        </div>
      </nav>



    </div>
  );
}

export default Nav;
