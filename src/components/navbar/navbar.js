import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="flex text-center justify-between capitalize
       text-black text-xs sm:text-xl xl:text-xl py-4 bg-transparent opacity-100">
        <div className="mr-auto px-2 text-center">hospital name</div>
        <ul className="flex mx-5 space-x-2">
          <li className=" cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about">services</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/department">Departments</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/gallary">Gallary</Link>
          </li>
          <li className="cursor-pointer">
            <a>Contact us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
