import React from "react";

export const Depart = ({ depart }) => {
  return (
    <div className="text-xl box-border capitalize shadow-sm border-2 rounded-xl border-black shadow-black bg-gray-200 px-2 ">
      <h2 className="text-center font-semibold my-2">{depart.name}</h2>
      <p className="w-80 px-1  " >{depart.desc}</p>
      <button className="bg-blue-100 m-auto my-2 border-2 border-black rounded-xl px-2">more</button>
    </div>
  );
};
