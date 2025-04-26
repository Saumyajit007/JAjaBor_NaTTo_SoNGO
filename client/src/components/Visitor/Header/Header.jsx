import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[50px] w-screen bg-linear-to-t from-white to-gray-500 relative top-0 left-0">
      <div className="invisible sm:visible mx-3.5 font-bold text-sm sm:text-2xl">
        Jajabor_Natto_Songo
      </div>
      <div className="flex items-center mx-3">
        <div className="">
          <NavLink to="/visitor/announcement" className={({isActive})=>(isActive?"scale-150":"")}>
            <span className="mx-4 text-2xl">🔔</span>
          </NavLink>
        </div>
        <div className="text-lg font-semibold">
          <NavLink to="/login" className={`${({isActive})=>(isActive?"scale-150":"")}`}>
            <span>members only</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
