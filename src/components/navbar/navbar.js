import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="navbar">
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <img
                    className="logo"
                    src="new folder/about-frame-img.png"
                    alt="net error"
                  />
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li><Link to="/departments">departments</Link></li>
                <li>
                  <a to="#gallary">gallary</a>
                </li>
                <li>
                  <a to="#contact">contact us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
