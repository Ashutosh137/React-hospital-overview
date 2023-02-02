import React from "react";
const Footer = (props) => {
  return (
    <footer className="footar flex capitalize text-center text-xs sm:text-xs xl:text-xl bg-black text-white">
      <div className="contact flex-col flex m-auto space-y-1 mt-1 px-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          contact us on
        </h2>
        <label>call {props.hospital.contact_Number}</label>
        <label>{props.hospital.email}</label>
      </div>
      <div className="location flex-col flex m-auto mt-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          locations
        </h2>
        <label className="locatiion">
          location 1
        </label>
        <label className="locatiion">
          location 2
        </label>
        <label className="locatiion">
          location 3
        </label>
      </div>
      <div className="links flex-col flex m-auto mt-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          quick links
        </h2>
        <a href="/home">
          home
        </a>
        <a href="#about">
          about
        </a>
        <a href="#department">
          department
        </a>
        <a href="#gallary">
          gallary
        </a>
      </div>
      <div className="social flex-col flex m-auto my-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          follow us on
        </h2>
        <a
          href={props.hospital.facebook}
          target="_blank"
          rel="noreferrer"
         
        >
          facebook
        </a>
        <a
          href={props.hospital.instragram}
          target="_blank"
          rel="noreferrer"
         
        >
          instragram
        </a>
        <a
          href={props.hospital.linkdin}
          target="_blank"
          rel="noreferrer"
         
        >
          linkdin
        </a>
        <a
          href={props.hospital.twitter}
          target="_blank"
          rel="noreferrer"
         
        >
          twiter
        </a>
      </div>
    </footer>
  );
};
export default Footer;
