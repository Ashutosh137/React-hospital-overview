import React from "react";
const Footer = (props) => {
  return (
    <footer className="footar flex capitalize text-center text-xs sm:text-xs xl:text-xl bg-black text-white">
      <div className="contact flex-col flex m-auto space-y-1 mt-1 px-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          contact us on
        </h2>
        <label>call {props.contact}</label>
        <label htmlFor="email">{props.email}</label>
      </div>
      <div className="location flex-col flex m-auto mt-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          locations
        </h2>
        <label htmlFor className="locatiion">
          location 1
        </label>
        <label htmlFor className="locatiion">
          location 2
        </label>
        <label htmlFor className="locatiion">
          location 3
        </label>
      </div>
      <div className="links flex-col flex m-auto mt-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          quick links
        </h2>
        <a href="#home" className="social">
          home
        </a>
        <a href="#about" className="social">
          about
        </a>
        <a href="#department" className="social">
          department
        </a>
        <a href="#gallary" className="social">
          gallary
        </a>
      </div>
      <div className="social flex-col flex m-auto my-1">
        <h2 className="text-sm mt-3 border-b border-b-stone-100 sm:text-2xl">
          follow us on
        </h2>
        <a href="https://www.facebook.com/" target="_blank" className="social">
          facebook
        </a>
        <a href="https://www.instragram.com" target="_blank" className="social">
          instragram
        </a>
        <a href="https://www.linkdin.com" target="_blank" className="social">
          linkdin
        </a>
        <a href="https://www.twiter.com" target="_blank" className="social">
          twiter
        </a>
      </div>
    </footer>
  );
};
export default Footer;
