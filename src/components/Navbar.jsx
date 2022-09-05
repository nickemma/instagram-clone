import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>
      <input type="text" className="search" placeholder="Search" />
      <ul className="nav-links">
        <li>
          <i className="fas fa-home" />
        </li>
        <li>
          <i className="far fa-comment-alt" />
        </li>
        <li>
          <i className="far fa-compass" />
        </li>
        <li>
          <i className="far fa-heart" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
