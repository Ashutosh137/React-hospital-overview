import React from "react";
function Contact(props) {
  return (
    <>
      <div className="contact container text-left capitalize mb-10 ">
        <h1 className="border-b-2 py-2  border-black text-3xl capitalize my-3">
          contact us
        </h1>
        <div className="flex flex-wrap">
          <img
            alt="net error"
            className="w-full max-w-lg  border-black border-2 my-5 rounded-2xl p-2"
            src={"/New-folder/camilo-jimenez-vGu08RYjO-s-unsplash.jpg"}
          />
          <form onSubmit={(e) => {
            e.preventDefault()
            alert(" your response wil be recorded , you will contact by our team shortly")
          }}
            className="flex flex-col mx-auto w-full sm:w-1/2">
            <h1 className="text-center my-5 sm:text-3xl"> book an appointment today!</h1>
            <input
              className="p-2 m-2 focus:outline outline-gray-700 text-xl font-medium rounded"
              type="text"
              placeholder="Enter your name"
              required

            />
            <input
              className="p-2 m-2 focus:outline outline-gray-700 text-xl font-medium rounded"
              type="number"
              placeholder="Your current Age"
              required

            />
            <input
              className="p-2 m-2 focus:outline outline-gray-700 text-xl font-medium rounded"
              type="email"
              placeholder="Enter your Email Address"
              required

            />
            <textarea
              className="p-3 m-2 text-xl font-medium rounded"
              type="text"
              rows="4"
              placeholder="Your Quary"
              required
            />
            <input className="my-4 border-black border-2 capitalize font-semibold font-mono px-5 bg-green-400 rounded-xl m-auto text-xl p-2" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
