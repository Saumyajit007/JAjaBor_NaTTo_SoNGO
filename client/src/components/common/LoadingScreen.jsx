import React from 'react'

const LoadingScreen = () => {
  return (
<div className='flex justify-center items-center h-[100vh] w-[100vw]'>
<div className="text-center">
  <div
    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-700 mx-auto"
  ></div>
  <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
</div>
</div>
  )
}

export default LoadingScreen
