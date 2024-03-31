import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const section = (props) => {
  return (
    <>
      <section className="home md:mx-5 flex-col align-middle space-y-20 text-center ">


        <div className="md:my-16 img text-zinc-950 p-3 align-middle jusitfy-center my-auto  flex text-center">
          <div className="w-96 my-auto h-96 bg-clip-content  outline outline-3 mx-3  outline-gray-700 rounded-2xl p-1  overflow-hidden">
            <img className=" border-2 border-sky-900  object-cover object-center clip w-full h-full hover:scale-105 transition-all ease-in-out duration-1000 rounded-2xl" src={"/New-folder/usman-yousaf-pTrhfmj2jDA-unsplash.jpg"} alt="logo" />
          </div>
          <p className=" my-auto font-serif w-5/12 ml-auto text-left text-xs md:text-xl text-slate-300 md:px-10 ">
            {props.name} is a leading provider of healthcare services in our community. We offer a wide range of services, including primary care, specialty care, and urgent care. We are committed to providing our patients with the highest quality care possible.
            <br />
            <button className="py-2 outline  capitalize outline-neutral-700 mt-4 px-5   rounded-xl  bg-sky-900 text-white  hover:bg-sky-800 transition-all ease ">
              <Link to="/contact">book an appointment today !</Link>
            </button>
          </p>
        </div>

        <div className="  my-10 rounded-xl  md:p-5  h-full">
          <div className="flex-col my-3">
            <h1 className="text-2xl font-serif  border-b-2 border-stone-100 py-2 my-1 capitalize rounded-4xl md:text-3xl">
              Our Mission
            </h1>
          </div>

          <div className="md:my-5 md:flex-row-reverse flex p-3 flex-col text-center">
            <img
              alt="net error"
              className="w-full max-w-lg  border-black border-2 my-5 rounded-xl p-2"
              src={"/New-folder/bruno-rodrigues-279xIHymPYY-unsplash.jpg"}
            />
            <p className="md:w-6/12 font-serif w-full m-auto ml-auto text-left text-xs md:text-xl md:px-10 py-1">
              Our mission is to provide our patients with the highest quality healthcare services in a compassionate and caring environment. We are committed to our patients' well-being and to helping them achieve their health goals.
              <br />
              <button className="py-1 outline outline-neutral-400 border-2 mt-4  border-black border-double rounded-xl  bg-sky-900 text-white md:px-5 hover:bg-sky-800 transition-all ease ">
                <Link to="/department">Explore More...</Link>
              </button>
            </p>

          </div>

        </div>

        <div className="div border-2 my-5 rounded-xl  md:p-5   h-full">
          <div className="flex-col my-3">
            <h1 className="text-xl font-serif  border-b-2 border-stone-100 py-2 my-1 capitalize rounded-4xl md:text-3xl">
              Our Values
            </h1>
          </div>

          <div className="md:my-5 md:flex-row flex p-3 flex-col text-center">
            <img
              alt="net error"
              className="w-full max-w-lg border-black border-2 my-5 rounded-xl p-2"
              src={"/New-folder/usman-yousaf-pTrhfmj2jDA-unsplash.jpg"}
            />
            <p className="md:w-6/12 font-serif w-full my-auto ml-auto text-left text-xs md:text-xl md:px-10 py-1">
              We value our patients, our employees, and our community. We are committed to providing our patients with the best possible care, to creating a positive and supportive work environment for our employees, and to giving back to our community.
              <br />
              <button className="py-1  outline outline-neutral-400 border-2 mt-4  border-black border-double rounded-xl  bg-sky-900 text-white md:px-5 hover:bg-sky-800 transition-all ease ">
                <Link to="/department">Explore More...</Link>
              </button>
            </p>

          </div>
        </div>


        <div className=" border-2 my-5 rounded-xl  md:p-5   h-full">
          <div className="flex-col my-3">
            <h1 className="text-xl font-serif  border-b-2 border-stone-100 py-2 my-1 capitalize rounded-4xl md:text-3xl">
              our prospertus
            </h1>
          </div>

          <div className="md:my-5 md:flex-row flex p-3 flex-col text-center">
            <img
              alt="net error"
              className="w-full max-w-lg m-auto  my-5  border-black border-2 rounded-xl p-2"
              src={"/New-folder/aditya-romansa-5zp0jym2w9M-unsplash.jpg"}
            />
            <p className=" font-serif w-full md:w-6/12 m-auto ml-auto text-left text-xs md:text-xl md:px-10 py-1">
              At Prospertus, we provide our patients with the highest level of
              care. We are proud to be an integral part of the healthcare
              community and serve as a leading source for patient information
              and medical news.
              <br />
              <button className=" outline outline-neutral-400 border-2 mt-4  border-black border-double rounded-xl  bg-sky-900 text-white md:px-5 hover:bg-sky-800 transition-all ease ">
                <Link to="/contact"> About us!</Link>

              </button>
            </p>
          </div>
        </div>

        <div className="div border-2 my-5 rounded-xl  md:p-5   h-full">
          <div className="flex-col my-3">
            <h1 className="text-xl font-serif  border-b-2 border-stone-100 py-2 my-1 capitalize rounded-4xl md:text-3xl">
              Our Services
            </h1>
          </div>

          <div className="md:my-5 md:flex-row flex p-3 flex-col text-center">
            <img
              alt="net error"
              className="w-full max-w-lg my-auto  border-black border-2 rounded-xl p-2"
              src={"/New-folder/olga-guryanova-tMFeatBSS4s-unsplash.jpg"}
            />
            <p className="md:w-6/12 my-5 font-serif w-full  m-auto ml-auto text-left text-xs md:text-xl md:px-10 py-1">
              <b className="py-10"> We offer a wide range of healthcare services, including:</b>
              <br />
              <ol className="flex-col ">
                <li><ArrowForwardIcon /> care</li>
                <li><ArrowForwardIcon />Specialty care</li>
                <li><ArrowForwardIcon />Urgent care</li>
                <li><ArrowForwardIcon />Diagnostic services</li>
                <li><ArrowForwardIcon />Imaging services</li>
                <li><ArrowForwardIcon />Laboratory services</li>
                <li><ArrowForwardIcon />Surgery</li>
                <li><ArrowForwardIcon />Anesthesia</li>
                <li><ArrowForwardIcon />And more!</li>
              </ol>
              <br />
              <label> We have a team of highly qualified and experienced providers who are dedicated to providing our patients with the best possible care. Our providers are experts in their fields and are committed to staying up-to-date on the latest medical advances.</label>
              <br />
              <button className="py-1  outline outline-neutral-400 border-2 mt-4  border-black border-double rounded-xl  bg-sky-900 text-white md:px-5 hover:bg-sky-800 transition-all ease ">
                <Link to="/department">Explore More...</Link>
              </button>
            </p>
          </div>
        </div>

        <div className="div border-2 my-5 rounded-xl  md:p-5   h-full">
          <div className="flex-col my-3">
            <h1 className="text-xl font-serif  border-b-2 border-stone-100 py-2 my-1 capitalize rounded-4xl md:text-3xl">
              Why Choose MirrorMed Hospital?


            </h1>
          </div>

          <div className="md:my-5 md:flex-row flex p-3 h-screen flex-col text-center">
            <img
              alt="net error"
              className="w-full max-w-lg  my-auto  border-black border-2 max-h-[500px] rounded-xl p-2"
              src={"/New-folder/walter-otto-PT70CT6mATQ-unsplash.jpg"}
            />
            <p className=" font-serif w-full md:w-6/12 m-auto ml-auto text-left text-xs md:text-xl md:px-10 py-1">
              There are many reasons to choose MirrorMed Hospital for your healthcare needs. Here are just a few:
              <br />
              We offer a wide range of services, so you can find everything you need in one place.
              <br />
              We have a team of highly qualified and experienced providers.
              <br />
              We are committed to providing our patients with the highest quality care possible.
              We offer a compassionate and caring environment.
              <br />

              <button className="py-1 outline outline-neutral-400 border-2 mt-4  border-black border-double rounded-xl  bg-sky-900 text-white md:px-5 hover:bg-sky-800 transition-all ease ">
                <Link to="/department">Explore More...</Link>
              </button>
            </p>
          </div>
        </div>



      </section >
    </>
  );
};
export default section;
