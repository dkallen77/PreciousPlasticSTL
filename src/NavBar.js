import React from 'react';
import './NavBar.css';
import logo from './img/Precious-Plastic-Logo.png';

function NavBar() {
  return (
    <div className="NavBar">
      <table>
        <tbody>
          <tr>
            <td className="left">
              <div className = "logo">
                <a href="index.html">
                  <img src={logo} alt="Precious Plastic Logo" className="logo-img"/>
                  <img src={logo} alt="Precious Plastic Logo" className="logo-img-mobile"/>
                </a>
              </div>
            </td>
            <td className="left-mobile">
              <div className = "logo">
                <a href="index.html">
                  <img src={logo} alt="Precious Plastic Logo" className="logo-img"/>
                  <img src={logo} alt="Precious Plastic Logo" className="logo-img-mobile"/>
                </a>
              </div>
            </td>
            <td>
              <div className="center-nav">
                <span className="menu-options"><a href="index.html" className="menu-option">RECYCLING</a></span>
                <span className="menu-options"><a href="index.html" className="menu-option">OUR SOLUTION</a></span>
                <span className="menu-options"><a href="index.html" className="menu-option">ABOUT US</a></span>
              </div>
              <div className="center-nav-mobile">
                <div className="menu-options-mobile"><a href="index.html" className="menu-option">RECYCLING</a></div>
                <div className="menu-options-mobile"><a href="index.html" className="menu-option">OUR SOLUTION</a></div>
                <div className="menu-options-mobile"><a href="index.html" className="menu-option">ABOUT US</a></div>
              </div>
            </td>
            <td className="right">
              <div className="right-nav">
                <span className="menu-options"><a href="index.html" className="menu-option">CONTACT US</a></span>
              </div>
            </td>
            <td className="right-mobile">
              <div className="right-nav">
                <span><a href="index.html" className="menu-option">CONTACT US</a></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default NavBar;
