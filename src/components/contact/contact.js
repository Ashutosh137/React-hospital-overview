import React from "react";
function Contact(props) {
  const handelform = (a, b, c, d) => {
    var data = {
      "name": a,
      "age": b,
      "email": c,
      "quary": d
    }
    console.log(data)
  }
  return (
    <>
      <div className="contact container text-left capitalize mb-10 ">
        <h1 className="border-b-2 border-black text-3xl capitalize my-3">
          contact us
        </h1>
        <form className="flex flex-col" onSubmit={(e) => {
          e.preventDefault();
          handelform(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value)
        }}>
          <input
            className="p-2 m-2 text-xl font-medium rounded"
            type="text"
            placeholder="Enter your name"
            required

          />
          <input
            className="p-2 m-2 text-xl font-medium rounded"
            type="number"
            placeholder="Your Age"

            required

          />
          <input
            className="p-2 m-2 text-xl font-medium rounded"
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
          <input className="my-4 border-black border-2 bg-green-400 rounded-xl m-auto text-xl px-3" type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default Contact;
