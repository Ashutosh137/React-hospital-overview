import React from "react";
import { Depart } from "./depart";
export const Department = (props) => {
    return (
    <div className="department text-left capitalize  ">
      <h1 className="text-center text-3xl font-semibold py-10 m-auto"> our departments</h1>
      <div className="flex overflow-x-scroll space-x-10 px-10">

      {props.department.map((depart)=>{
        return(
          <Depart depart={depart}/>
        )
      })}
      </div></div>

      )
  }
