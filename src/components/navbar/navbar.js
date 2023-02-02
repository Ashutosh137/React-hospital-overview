import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
<<<<<<< HEAD
  const btn = document.querySelector(".bi-list");
  const btn1 = document.querySelector(".bi-x");
  const menu = document.querySelector(".menu");
=======
>>>>>>> 080fb529612b53533325313675df16a1396631c3
  return (
    <nav
      className="flex text-center justify-between capitalize space-x-0
       text-black text-xs border-b-2 sm:text-xl xl:text-2xl py-4 bg-transparent opacity-100"
    >
<<<<<<< HEAD
      <div className="font-bold m-auto px-2 text-2xl sm:text-3xl xl:text-4xl">
        {props.name}
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
            btn.classList.add("hidden");
          }
        }
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
            menu.classList.add("hidden");
            btn1.classList.add("hidden");
            btn.classList.toggle("hidden");
        }}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
      <ul className="menu hidden mx-5 space-x-2 sm:flex ">
        <li className=" cursor-pointer">
        <Link to="/">Home</Link>
=======
      <div className="font-bold mr-auto px-2 text-2xl sm:text-3xl xl:text-4xl">
        {props.name}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list sm:hidden" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      <ul className="hidden mx-5 space-x-2 sm:flex ">
        <li className=" cursor-pointer">
          <Link to="/">Home</Link>
>>>>>>> 080fb529612b53533325313675df16a1396631c3
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
<<<<<<< HEAD
          <button className="bg-blue-300 border-2 capitalize rounded-2xl px-2 border-black">
            <Link to="/Contact"> appointment</Link>
=======
          <a href="#">Contact us</a>
        </li>
        <li className="cursor-pointer">
          <button className="bg-red-300 border-2 rounded-2xl px-1 border-black">
            make an apointment
>>>>>>> 080fb529612b53533325313675df16a1396631c3
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
