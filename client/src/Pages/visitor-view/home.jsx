import React from 'react'
import backgroundsitola from "../../assets/sitola.webp"
const VisitorHome = () => {
  return (
    <div className='flex '>
      <div className='hidden md:w-[50%] md:h-[86h] bg-gray-800 lg:flex md:justify-center md:items-center font-winky tracking-wider font-extrabold text-4xl text-white opacity-70'>Welcome to JajaborNattoSongo</div>
        <div className='bg-no-repeat w-full h-[89vh] md:h-[93vh] xl:h-[89vh] bg-cover bg-center lg:w-[50%] opacity-80 grid grid-cols-1 grid-rows-5 justify-items-center' style={{backgroundImage:`url(${backgroundsitola})`}}>
            <div className='row-start-4 row-end-5 place-content-center'><button className='px-3 py-2 border-2 cursor-pointer rounded-2xl font-winky text-white bg-gray-500 active:'>Donate Us➡️</button></div>
        </div>
    </div>

  )
}

export default VisitorHome
