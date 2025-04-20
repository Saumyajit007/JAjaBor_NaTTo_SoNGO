import React from "react";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center font-winky">
      <div className="p-4">
        <div className="">
          <TbError404 className="scale-800 relative left-21 bottom-6"/>
        </div>
        <h1 className="text-3xl">Page not found</h1>
        <div className="mt-10">
          <Link to="/" className="text-xl py-2 w-fit px-2 bg-gray-500 text-white hover:text-black rounded-3xl hover:bg-gray-300 shadow-xl shadow-black  transition-all duration-300  ease-in-out active:scale-95 active:shadow-none hover:scale-105 cursor-pointer">👈back to homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
