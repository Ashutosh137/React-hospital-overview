import React from "react";
import { gallarphoto } from "../../img";
class Gallary extends React.Component {
  state = {};
  render() {
    return (
      <div>
         <h1 className=" text-2xl w-4/5 m-auto my-2 text-center sm:text-4xl  border-black  border-b-2 p-2 capitalize">
        hospital gallary
      </h1>
<div className="img flex flex-wrap space-x-4 my-6  space-y-5 align-middle justify-evenly">
        {gallarphoto.map((item,index)=>{
          return <div className="w-96 h-80 outline outline-3 outline-black rounded-2xl p-2  overflow-hidden">
            <img className="img w-full h-full hover:scale-125 transition-all ease-in-out duration-1000 rounded-3xl" src={item} alt="logo" />
          </div>
        })}
      </div>
      </div>
      
    );
  }
}

export default Gallary;
