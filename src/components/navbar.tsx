import React from "react";
export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="navbar-nav">
          <li className="navbar-nav-item">
            <a href="#home" className="navbar-nav-link">
              HOME
            </a>
          </li>
          <li className="navbar-nav-item">
            <a href="#about" className="navbar-nav-link">
              ABOUT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
