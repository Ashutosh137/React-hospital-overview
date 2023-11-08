import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChairIcon from '@mui/icons-material/Chair';
import HomeIcon from '@mui/icons-material/Home';
import DialerSipIcon from '@mui/icons-material/DialerSip';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = (props) => {
  const [menu, setmenu] = useState('hidden')
  return (
    <nav
      className="navbar flex-row flex-wrap text-center justify-between capitalize space-x-2
        text-xs border-black sm:text-xl space-y-3 xl:text-2xl py-4 "
    >
      <div className="font-bold md:mb-5 flex space-x-1 m-auto p-2 text-2xl sm:text-3xl">
        <ChairIcon style={{ fontSize: '2rem' }} />
        <Link to="/">{props.name} hospital</Link>
      </div>
      {menu==='hidden' && <div  onClick={() => {
        setmenu('flex')
      }} className="md:hidden ml-auto">
        <MenuOpenIcon/>
      </div>}
      {menu==="flex" && <div onClick={()=>{
        setmenu('hidden')
      }}><CloseIcon/></div>}
      
      <div className="m-auto">
        <ul className={` md:flex ${menu} flex-row flex-wrap space-y-12`}>
          <li className=" m-auto cursor-pointer my-1">
            <Link
              className="border-black p-2 hover:border-b-2 ease m-2 transition-all flex align-middle space-x-2 justify-center hover:scale-105  hover:text-sky-900 "
              to="/"
            >
              <i className='mx-1'><HomeIcon /></i>
              Home
            </Link>
          </li>

          <li className="cursor-pointer m-auto">
            <Link
              className="border-black p-2 hover:border-b-2 ease m-2 transition-all flex align-middle space-x-2  justify-center hover:scale-105  hover:text-sky-900"
              to="/department"
            ><i className='mx-1'><DepartureBoardIcon /></i>
              Departments
            </Link>
          </li>
          <li className="cursor-pointer m-auto">
            <Link
              className="border-black p-2 hover:border-b-2 ease m-2 transition-all flex align-middle space-x-2  justify-center hover:scale-105  hover:text-sky-900"
              to="/gallary"
            >
              <i className='mx-1'><BurstModeIcon /></i>
              Gallary
            </Link>
          </li>
          <li className="cursor-pointer m-auto text-black">
            <button className="px-4 py-1 border-2 mx-3 hover:bg-sky-900 hover:text-white ease transition-all space-x-2  flex align-middle justify-center hover:scale-105 capitalize rounded-2xl px-2 border-black">
              <Link to="/Contact"><i className='mx-1'><DialerSipIcon /></i> appointment</Link>
            </button>
          </li>




        </ul>


      </div>

       
    </nav>
  );
};

export default Navbar;
