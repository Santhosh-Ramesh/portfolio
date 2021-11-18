import React, { useState } from 'react';
import './Header.css';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { ImCross } from 'react-icons/im';
function Header(props) {
  const [activeTab, setActiveTab] = useState('home');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="header">
      <div className="menu-600">
        <div className="logo">
          <img src="https://bevouliin.com/wp-content/uploads/2014/02/rocket-booster-logo-template-bevouliin-preview.png" alt="rocket" />
          </div>
        {/* hamburger menu start */}
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? (
            <i style={{ fontSize: '60px' }} className="fa fa-times"></i>
          ) : (
            <i style={{ fontSize: '60px' }} class="fa ham">
              &#xf0c9;
            </i>
          )}
        </div>
      </div>

      <ul className={clicked ? 'menu-list' : 'menu-list close'}>
        <li>
          <a href="#home">
            <p
              className={`${activeTab === 'home' ? 'active' : ''} `}
              onClick={() => setActiveTab('home')}
            >
              Home
            </p>
          </a>
        </li>
        <li>
          <a href="#services">
            <p
              className={`${activeTab === 'services' ? 'active' : ''} `}
              onClick={() => setActiveTab('services')}
            >
              Services
            </p>
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <p
              className={`${activeTab === 'testimonials' ? 'active' : ''} `}
              onClick={() => setActiveTab('testimonials')}
            >
              Testimonials
            </p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <p
              className={`${activeTab === 'contact' ? 'active' : ''} `}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
