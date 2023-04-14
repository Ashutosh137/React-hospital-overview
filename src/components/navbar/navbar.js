import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../data/data";
const Navbar = (props) => {
  const btn = document.querySelector(".bi-list");
  const btn1 = document.querySelector(".bi-x");
  const menu = document.querySelector(".menu");
  const name=useContext(AuthContext);
  return (
    <nav
      className="navbar flex text-center justify-between capitalize space-x-0
       text-black text-xsborder-black sm:text-xl xl:text-2xl py-4 bg-transparent opacity-100"
    >
      <div className="font-bold m-auto p-2 text-2xl sm:text-3xl xl:text-4xl">
        <Link to="/">{name.hospital.name}</Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        className="bi bi-list sm:hidden"
        viewBox="0 0 20 20"
        onClick={() => {
          menu.classList.toggle("hidden");
          btn1.classList.toggle("hidden");
          btn.classList.toggle("hidden");
        }}
      >
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        className="bi bi-x hidden"
        viewBox="0 0 16 16"
        onClick={() => {
          menu.classList.toggle("hidden");
          btn1.classList.toggle("hidden");
          btn.classList.toggle("hidden");
        }}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
      <ul className="menu text-yellow-500 hidden mx-auto space-x-2 sm:flex ">
        <li className=" cursor-pointer">
          <Link
            className="border-black hover:border-b-2 hover:text-black"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="border-black hover:border-b-2 hover:text-black"
            to="/about"
          >
            services
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="border-black hover:border-b-2 hover:text-black"
            to="/department"
          >
            Departments
          </Link>
        </li>
        <li className="cursor-pointer text-black">
          <button className="bg-blue-300 border-2 hover:bg-white capitalize rounded-2xl px-2 border-black">
            <Link to="/Contact"> appointment</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
