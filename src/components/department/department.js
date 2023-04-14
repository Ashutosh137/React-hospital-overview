import React,{useContext} from "react";
import { Depart } from "./depart";
import AuthContext from "../../data/data";
export const Department = (props) => {
  const department=useContext(AuthContext);
  return (
    <div className="department container text-left capitalize m-10 ">
      <h1 className="border-b-2 my-5 border-black text-3xl capitalize font-bold">
        Department
      </h1>
      <p className="text-2xl my-5 font-normal ">
        The There are several departments are found in hospitals namely Outpatient department (OPD), Inpatient Service (IP), Medical Department, Nursing Department, Paramedical Department, Physical Medicine and Rehabilitation Department, Operation Theatre Complex (OT), Pharmacy Department, Radiology Department (X-ray), Dietary Department, Non-professional Services (Business Management), Medical Record Department (MRD) and Personnel Department.
      </p>
      <div className="flex-col space-y-10 m-auto px-10">
        <h1 className="text-3xl font-semibold border-black border-b-2">list of department</h1>
        {department.department.map((depart) => {
          return <Depart depart={depart}/>;
        })}
      </div>
    </div>
  );
};
