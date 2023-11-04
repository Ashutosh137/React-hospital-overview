import React from "react";
import { Depart } from "./depart";
export const Department = (props) => {
  return (
    <div className=" capitalize  mb-10 ">
      <h1 className="border-b- text-2xl w-2/3 m-auto  my-2 text-center sm:text-4xl  border-black  border-b-2 p-2 capitalize">
        Department
      </h1>
      <p className="sm:text-xl text-base mx-5">
        The MirrorMed Hospital Department is the biggest division of our company. We take
        care of all equipment needs and ensure that we have the right products
        at the right time.
      </p>
      <div className="flex flex-wrap justify-center my-12  px-10">
        {props.department.map((depart) => {
          return <Depart depart={depart} />;
        })}
      </div>
    </div>
  );
};
