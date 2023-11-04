import React from "react";
export const Depart = ({ depart }) => {
  return (
      <div className="w-96 mx-10 my-8 flex capitalize justify-center shadow-2xl shadow-slate-600   border-2 rounded-xl border-black bg-gray-200 px-4 flex-col hover:scale-110 transition-all ease-in z-50 ">
        <h2 className="text-xl sm:text-2xl border-b-2 mx-auto w-3/4 border-black text-center transition-all ease-in  hover:text-orange-900 font-semibold my-4 py-2">
          {depart.name}
        </h2>
    <div className="text-base sm:text-xl mx-3 pb-8">{depart.description}</div>
      </div>
  );
};
