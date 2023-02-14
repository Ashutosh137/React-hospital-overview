import React from "react";
export const Depart = ({ depart }) => {
  return (
    <>
      <div className=" box-border flex capitalize justify-center shadow-sm border-2 rounded-xl border-black shadow-black bg-gray-200 px-2 ">
        <h2 className="text-2xl text-center font-semibold my-2">
          {depart.name}
        </h2>
        <details className="text-xl decoration-2  ml-auto p-1">{depart.desc}</details>
      </div>
    </>
  );
};
