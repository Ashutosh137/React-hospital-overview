import React from "react";
import { Link } from "react-router-dom";
const section = (props) => {
  return (
    <>
      <section className="section container align-middle text-center my-10 ">
        <section className="m-2">
          <h1 className="text-xl mx-10 font-semibold capitalize my-8 border-b-2 sm:text-4xl">
            welcome to {props.name}
          </h1>
          <div className="section bg-white p-3 flex text-center">
            <div className="images overflow-hidden w-full  m-1 sm:m-5 border-black border-2 rounded-tl-xl rounded-br-xl hover:opacity-90">
              <img
                alt="net error"
                className="h-full"
                src={"/New-folder/building.jpg"}
              />
            </div>
            <div className="w-full m-auto">
              <h1 className="text-xl font-semibold capitalize sm:text-2xl">
                who we are..
              </h1>
              <p className="px-3 text-left text-xs sm:text-xl sm:px-20 py-1">
                Hospital We are an organization that offers medical services to
                individuals and families who are in need of emergency medical
                care. Our mission is to provide the highest level of care, and
                we believe that every patient deserves the opportunity to
                receive excellent, personalized treatment at a fraction of the
                cost compared to what other hospitals offer.
                <button className=" p-1 border-2 ml-10 m-1 border-black border-double rounded-xl bg-sky-100">
                  <Link to="/about">About us</Link>
                </button>
              </p>
            </div>
          </div>
        </section>

        <section className="m-2">
          <div className="section  bg-white p-3 flex text-center">
            <div className="w-full m-auto">
              <h1 className="text-basic font-semibold capitalize sm:text-2xl">
                our prospertus
              </h1>
              <p className="px-3 text-left text-xs sm:text-xl sm:px-20 py-1">
                At Prospertus, we provide our patients with the highest level of
                care. We are proud to be an integral part of the healthcare
                community and serve as a leading source for patient information
                and medical news.
              </p>
            </div>
            <div className="images overflow-hidden m-1 sm:m-5 border-black border-2 rounded-xl">
              <img
                alt="net error"
                className="h-96 w-96"
                src={"/New-folder/bruno-rodrigues-279xIHymPYY-unsplash.jpg"}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default section;
