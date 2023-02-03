import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="section container text-center my-10 ">
          <section>
            <div className="section bg-white p-3 flex text-center">
              <div className="images  overflow-hidden w-full  border-black border-2 rounded-tl-xl rounded-br-xl hover:opacity-90">
                <img
                  alt="net error"
                  className="h-full"
                  src={"/New-folder/building.jpg"}
                />
              </div>
              <div className="w-full m-auto">
                <h1 className="text-basic font-semibold capitalize sm:text-2xl">
                  who we are..
                </h1>
                <p className="px-3 text-left text-xs sm:text-xl sm:px-20 py-1">
                  The hospital is a place of turmoil, where families try to find
                  comfort and healing. A place where patients are at the mercy
                  of doctors and nurses, who must make life-and-death decisions
                  on their behalf. But at least one person in every hospital is
                  able to help: the writer.
                  <br />
                  <button className=" p-1 border-2 m-auto my-2  border-black border-double rounded-xl bg-sky-100">
                    <Link to="/about">About us</Link>
                  </button>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="section  bg-white p-3 flex text-center">
              <div className="w-full m-auto">
                <h1 className="text-basic font-semibold capitalize sm:text-2xl">
                  who we are..
                </h1>
                <p className="px-3 text-left text-xs sm:text-xl sm:px-20 py-1">
                  Hospital Servies is a website that provides information on
                  hospitals, medical practices and healthcare services. Hospital
                  services are one of the most important aspects of healthcare.
                  Hospital services include surgery, care for newborn babies and
                  children, healing of wounds and illnesses, immunizations and
                  other preventive measures; screening tests to detect diseases
                  early on; when a patient is stable enough to be discharged
                  home. We provide a wide range of services to help you get the
                  best care possible. Our team is dedicated to providing
                  outstanding patient care and service in our hospital, clinic,
                  and surrounding areas. We can help you with a wide range of
                  services, no matter what stage you're in. From diagnosis to
                  diagnosis and treatment up to discharge. We can help you with
                  any aspect of your health care needs.
                  <br />
                  <button className=" p-1 border-2 m-auto my-2  border-black border-double rounded-xl bg-sky-100">
                    <Link to="/about">About us</Link>
                  </button>
                </p>
              </div>
              <div className="images w-full overflow-hidden border-black border-2 rounded-xl">
                <img
                  alt="net error"
                  className="h-full "
                  src={"/New-folder/aditya-romansa-5zp0jym2w9M-unsplash.jpg"}
                />
              </div>
            </div>
          </section>
          <section>
            <div className="section bg-white p-3 flex text-center">
              <div className="images  overflow-hidden w-full  border-black border-2 rounded-tl-xl rounded-br-xl hover:opacity-90">
                <img
                  alt="net error"
                  className="h-full"
                  src={"/New-folder/olga-guryanova-tMFeatBSS4s-unsplash.jpg"}
                />
              </div>
              <div className="w-full m-auto">
                <h1 className="text-basic font-semibold capitalize sm:text-2xl">
                  who we are..
                </h1>
                <p className="px-3 text-left text-xs sm:text-xl sm:px-20 py-1">
                  hospital services are available 24 hours a day, 7 days a week
                  to meet your needs. Whether you need emergency care or routine
                  medical attention, our team of health care professionals will
                  help you get back to normal as quickly as possible.
                  <br />
                  <button className=" p-1 border-2 m-auto my-2  border-black border-double rounded-xl bg-sky-100">
                    <Link to="/about">About us</Link>
                  </button>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="section  bg-white p-3 flex text-center">
              <div className="w-full m-auto">
                <h1 className="text-basic font-semibold capitalize sm:text-2xl">
                  who we are..
                </h1>
                <p className="px-3 text-left text-xs sm:text-xl sm:px-20 py-1">
                  Hospitals provide a range of services to patients, including
                  diagnosis, monitoring and treatment. Hospitals are often
                  associated with a hospital ward where beds are available for
                  either short-term or long-term accommodation. In many
                  countries, there is some form of public health insurance that
                  provides benefits if you want to pay for part or all of your
                  health care costs - this often includes hospital visits.
                  <br />
                  <button className=" p-1 border-2 m-auto my-2  border-black border-double rounded-xl bg-sky-100">
                    <Link to="/about">About us</Link>
                  </button>
                </p>
              </div>
              <div className="images w-full overflow-hidden  border-black border-2 rounded-xl">
                <img
                  alt="net error"
                  className="h-full"
                  src={"/New-folder/walter-otto-PT70CT6mATQ-unsplash.jpg"}
                />
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default About;
