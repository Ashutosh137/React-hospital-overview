import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
            <nav className="flex justify-between m-auto text-center capitalize text-black text-2xl py-4 bg-sky-600">
              <div className="px-10">hospital name</div>
              <ul className="flex mx-4 ">
                <li className=" mx-3 font-xl cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className=" mx-3 font-xl cursor-pointer">
                  <Link to="/about">services</Link>
                </li>
                <li className=" mx-3 font-xl cursor-pointer">
                  <Link to="/department">Departments</Link></li>
                <li className=" mx-3 font-xl cursor-pointer">
                  <Link to="/gallary">Gallary</Link>
                </li>
                <li className=" mx-3 font-xl cursor-pointer">
                  <a>Contact us</a>
                </li>
              </ul>
            </nav>
    );
  }
}

export default Navbar;
