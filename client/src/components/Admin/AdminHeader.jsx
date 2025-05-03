import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
const AdminHeader = ({setbar,barvalue}) => {
  
  const handleClick=()=>{
      setbar(!barvalue)
  }

  return (
    <div className="fixed top-0 left-0 z-100">
      <div className="flex justify-between items-center h-[50px] w-screen bg-linear-to-t from-white to-gray-500 relative top-0 left-0">
      <div className="mx-3.5 font-bold text-sm sm:text-2xl">
        <FaHamburger className="scale-125 cursor-pointer"onClick={handleClick}/>
      </div>
      <div className="flex items-center mx-3">
        <div className="">
          <NavLink
            to="/visitor/announcement"
            className={({ isActive }) => (isActive ? "scale-150" : "")}
          >
            <span className="mx-4 text-2xl">🔔</span>
          </NavLink>
        </div>
        <div className="text-lg font-semibold">
          <button className="flex items-center py-1 w-fit px-4 rounded-3xl hover:bg-gray-300 shadow-xs shadow-black  transition-all duration-300  ease-in-out active:scale-95 active:shadow-none hover:scale-105 cursor-pointer">
            <AiOutlineLogout className="scale-125" />
            <span>LogOut</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminHeader;
