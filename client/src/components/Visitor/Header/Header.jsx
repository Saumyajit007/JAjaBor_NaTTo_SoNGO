import React from "react";
import { NavLink,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/Store/Slices/auth-slice";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogoutButton=()=>{
    dispatch(logOut())
    navigate("/")
  }
  return (
    <div className="flex justify-between items-center h-[50px] w-screen bg-linear-to-t from-white to-gray-500 relative top-0 left-0">
      <div className="invisible sm:visible mx-3.5 font-bold text-sm sm:text-2xl">
        Jajabor_Natto_Songo
      </div>
      <div className="flex items-center mx-3">
        <div className="">
          <NavLink
            to="/visitor/announcement"
            className={({ isActive }) => (isActive ? "scale-150" : "")}
          >
            <span className="mx-4 text-2xl text-amber-300">🔔</span>
          </NavLink>
        </div>
        <div className="text-lg font-semibold">
          {isAuthenticated ? (
            <button
              onClick={handleLogoutButton}
              className="px-3 py-1 rounded-xl bg-amber-300 cursor-pointer"
            >
              <span>logout</span>
            </button>
          ) : (
            <NavLink
              to="/login"
              className={`${({ isActive }) => (isActive ? "scale-150" : "")}`}
            >
              <span>members only</span>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
