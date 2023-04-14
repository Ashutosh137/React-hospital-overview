import React from "react";
export const Depart = ({ depart }) => {

  return (
    <>
      <div className="flex capitalize border-2 rounded-xl border-black shadow-black bg-gray-200 px-2 ">
        <details className="text-xl  details w-full" open >
          <summary className="m-3 list-none">{depart.name} </summary>
          <p className="m-3">{depart.desc}</p></details>
      </div>
    </>
  );
};
