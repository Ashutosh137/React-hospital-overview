import React from "react";
import { Depart } from "./depart";
export const Department = (props) => {
  return (
<<<<<<< HEAD
    <div className="department container text-left capitalize mb-10 ">
       <h1 className="border-b-2 my-5 border-black text-3xl capitalize">
         Department
        </h1>
      <div className="flex overflow-x-scroll space-x-10  px-10">
=======
    <div className="department text-left capitalize mb-10 ">
      <h1 className="text-center text-3xl font-semibold py-10 m-auto">
        our departments
      </h1>
      <div className="flex  overflow-x-scroll space-x-10  px-10">
>>>>>>> 080fb529612b53533325313675df16a1396631c3
        {props.department.map((depart) => {
          return <Depart depart={depart} />;
        })}
      </div>
    </div>
  );
};
