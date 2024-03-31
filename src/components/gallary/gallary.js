import React from "react";
import { gallarphoto } from "../../img";
class Gallary extends React.Component {
  render() {
    return (
      <div>
        <h1 className=" text-xl font-[400] w-4/5 m-auto my-2  sm:text-3xl  border-black  border-b-2 p-2 capitalize">
          gallary : MirrorMed
        </h1>
        <div className="img flex flex-wrap  my-6 align-middle justify-evenly">
          {gallarphoto.map((item, index) => {
            return <div className="w-96 h-80 outline outline-3 mx-3 my-4 outline-black rounded-2xl p-2  overflow-hidden">
              <img className="img  border-2 border-sky-900 w-full h-full hover:scale-125 transition-all ease-in-out duration-1000 rounded-2xl" src={item} alt="logo" />
            </div>
          })}
        </div>
      </div>

    );
  }
}

export default Gallary;
