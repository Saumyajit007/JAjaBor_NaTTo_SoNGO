import React from "react";
import { NavLink } from "react-router-dom";
const AdminSideBar = ({setbar,barvalue}) => {
  const optioninfos = [
    {
      OptonRoute: "assign-role",
      OptionName: "Update Users",
    },
    {
      OptonRoute: "update-accounts",
      OptionName: "Accounts",
    },
    // {
    //   OptonRoute: "",
    //   OptionName: "Account Request",
    // },
    // {
    //   OptonRoute: "",
    //   OptionName: "Add Announcement",
    // },
  ];
  const handleSidebarOff=()=>{
    setbar(false)
  }

  return (
    <div className={` ${barvalue? 'left-0 relative top-12 transition-all duration-300 z-100':'left-[-400px] relative top-12 transition-all duration-300 z-100'}`}>
      {
        optioninfos.map((option,index)=>{
          return(
            <div className="h-13 bg-linear-to-r from-gray-200 to-gray-400 mr-2 my-2 rounded-r-lg flex items-center w-[350px]" key={index}>
            <NavLink
              to={`/admin/${option.OptonRoute}`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-2xl sidebarstyle"
                  : "text-black text-xl sidebarstyle"
              }
             onClick={handleSidebarOff}
             >
              {
                `${option.OptionName}`
              }
            </NavLink>
          </div>
          )
        })
      }
    </div>
  );
};

export default AdminSideBar;
