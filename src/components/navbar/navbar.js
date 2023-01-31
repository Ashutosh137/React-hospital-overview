import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav
      className="flex text-center justify-between capitalize space-x-0
       text-black text-xs border-b-2 sm:text-xl xl:text-2xl py-4 bg-transparent opacity-100"
    >
      <div className="font-bold mr-auto px-2 text-2xl sm:text-3xl xl:text-4xl">
        {props.name}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list sm:hidden" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      <ul className="hidden mx-5 space-x-2 sm:flex ">
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
          <a href="#">Contact us</a>
        </li>
        <li className="cursor-pointer">
          <button className="bg-red-300 border-2 rounded-2xl px-1 border-black">
            make an apointment
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
