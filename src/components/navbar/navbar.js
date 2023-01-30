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
      <div className=" font-bold text-4xl py-0 mx-40 border-2 h-7 w- border-black sm:hidden">
        <ul className="flex flex-col w-4  ">
          <li className="-my-5">-</li>
          <li className="-my-3 ">-</li>
          <li className="-my-5">-</li>
        </ul>
      </div>
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
          <button className="bg-red-300 border-2 rounded-2xl px-1 border-black">make an apointment</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
