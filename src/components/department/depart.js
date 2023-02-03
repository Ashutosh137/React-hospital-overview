import React from "react";
import { Department } from "./department";
export const Depart = ({ depart }) => {
  return (
    <>
      <div className=" box-border flex capitalize shadow-sm border-2 rounded-xl border-black shadow-black bg-gray-200 px-2 ">
        <h2 className="text-2xl text-center font-semibold my-2">
          {depart.name}
        </h2>
        <button
          className="bg-blue-100 ml-auto my-2 border-2 text-3xl border-black rounded-xl px-2"
          onClick={() => {
            const details = document.querySelector(".details");
            details.classList.toggle("hidden");
          }}
        >
          ^
        </button>
        <p className="text-xl hidden details ">{depart.desc}</p>
      </div>
    </>
  );
};
