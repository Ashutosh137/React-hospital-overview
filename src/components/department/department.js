import React from "react";
import { Depart } from "./depart";
export const Department = (props) => {
  return (
    <div className="department container text-left capitalize mb-10 ">
      <h1 className="border-b-2 my-5 border-black text-3xl capitalize">
        Department
      </h1>
      <p className="text-2xl my-5 font-normal ">
        The Hospital Department is the biggest division of our company. We take
        care of all equipment needs and ensure that we have the right products
        at the right time.
      </p>
      <div className="flex-col overflow-x-scroll space-y-10  px-10">
        {props.department.map((depart) => {
          return <Depart depart={depart} />;
        })}
      </div>
    </div>
  );
};
