import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const backenduri = import.meta.env.VITE_BACKEND_HOSTED_PORT;

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200 font-winky">

      <div className="">

        <div className="text-2xl text-black font-bold">
          Create/login your Account
        </div>

        <div className="mt-6 py-2 w-fit px-6 rounded-3xl relative left-17 hover:bg-gray-300 shadow-xl shadow-black  transition-all duration-300  ease-in-out active:scale-95 active:shadow-none hover:scale-105 cursor-pointer">
          <Link to={`${backenduri}/auth/google`} className="cursor-pointer">
            <div className="flex item-center justify-center">
              <FcGoogle className="scale-200 relative top-1.5"/>
              <span className="pl-3 text-xl font-semibold">google</span>
            </div>  
          </Link> 
        </div>

      </div>

    </div>
  );
};

export default Login;
