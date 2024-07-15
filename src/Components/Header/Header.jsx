import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownM from "./dropdown/DropdownM";
import DropdownW from "./dropdown/DropdownW";
import "./headerStyles.css";

export default function Header({ isLoggedIn }) {
  //men dropdown---
  const [dropdownM, setDropdownM] = useState(false);
  const OnMouseEnterM = () => {
    setDropdownM(true);
  };
  const OnMouseLeaveM = () => {
    setDropdownM(false);
  };

  //women dropdown----
  const [dropdownW, setDropdownW] = useState(false);
  const OnMouseEnterW = () => {
    setDropdownW(true);
  };
  const OnMouseLeaveW = () => {
    setDropdownW(false);
  };

  return (
    <header className="main-header">
      <nav className="left-nav">
        <ul className="nav-list">
          <li
            className="nav-item"
            onMouseEnter={OnMouseEnterM}
            onMouseLeave={OnMouseLeaveM}
          >
            <Link to="/" className="nav-link">
              Men
            </Link>
            {dropdownM && <DropdownM />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={OnMouseEnterW}
            onMouseLeave={OnMouseLeaveW}
          >
            <Link to="/women" className="nav-link">
              Women
            </Link>
            {dropdownW && <DropdownW />}
          </li>

          <li className="nav-item">
            <Link to="/kids" className="nav-link">
              Kids
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/beauty" className="nav-link">
              Beauty
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lifestyle" className="nav-link">
              Lifestyle
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/accessories" className="nav-link">
              Accessories
            </Link>
          </li>
        </ul>
      </nav>

      <div className="logo-container">
        <span className="logo-text">
          <h1>SUSTAIN</h1>
        </span>
      </div>

      <nav className="right-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/20/FFFFFF/search--v1.png"
                alt="search--v1"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <img
                width="19"
                height="19"
                src="https://img.icons8.com/ios-glyphs/19/FFFFFF/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/glyph-neue/20/FFFFFF/like--v1.png"
                alt="like--v1"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              <img
                width="22"
                height="22"
                src="https://img.icons8.com/ios-glyphs/22/FFFFFF/user--v1.png"
                alt="user--v1"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
