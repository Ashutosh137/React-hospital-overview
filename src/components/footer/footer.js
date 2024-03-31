import React from "react";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <footer className="footar pb-4 flex flex-wrap space-x-2 space-y-2 capitalize text-center text-xs sm:text-sm xl:text-base bg-black text-white">
      <div className="contact flex-col flex w-1/2 md:w-auto m-auto space-y-2 mt-1 px-1">
        <h2 className="text-sm m-3 border-b border-b-stone-100 sm:text-2xl">
          contact us on
        </h2>
        <div className="my-auto justify-center align-middle flex flex-col space-y-3">
          <a className="hover:scale-125 transition-all ease-out my-auto py-2 duration-500" href="mailto:mr.luckysharma7@gmail.com">{props.hospital.email}</a>
          <a className="hover:scale-125 transition-all ease-out my-auto duration-1000" href="call:7877997488">call {props.hospital.contact_Number}</a>
        </div>

      </div>

      <div className="contact flex-col flex w-1/2 md:w-auto m-auto space-y-2 mt-1 px-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          locations
        </h2>
        <label className="py-2" >{props.hospital.name} <br />
          123 Main Street
          <br />
          Anytown, CA 12345
          <br />
          (555) 555-5555
        </label>


      </div>
      <div className="contact flex-col flex w-1/2 md:w-auto m-auto space-y-2 mt-1 px-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          quick links
        </h2>
        <Link to='/' className="hover:scale-125 transition-all ease-out"><a>Home</a></Link>
        <Link to='/contact' className="hover:scale-125 transition-all ease-out"><a>Book Appointment</a></Link>
        <Link to='/department' className="hover:scale-125 transition-all ease-out"><a>Department</a></Link>
        <Link to='/gallary' className="hover:scale-125 transition-all ease-out"><a>Gallery</a></Link>
      </div>
      <div className=" flex-col flex w-1/2 md:w-auto m-auto space-y-2 mt-1 px-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          follow us on
        </h2>
        <a className="hover:scale-125 transition-all ease-out" href={props.hospital.facebook} target="_blank" rel="noreferrer">
          facebook
        </a>
        <a className="hover:scale-125 transition-all ease-out" href={props.hospital.instragram} target="_blank" rel="noreferrer">
          instragram
        </a>
        <a className="hover:scale-125 transition-all ease-out" href={props.hospital.linkdin} target="_blank" rel="noreferrer">
          linkdin
        </a>
        <a className="hover:scale-125 transition-all ease-out" href={props.hospital.twitter} target="_blank" rel="noreferrer">
          twiter
        </a>
      </div>
    </footer>
  );
};
export default Footer;
