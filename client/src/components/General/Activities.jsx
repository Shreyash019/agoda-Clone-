import React from 'react';
import { CiSearch } from "react-icons/ci";

const Activities = () => {
  return (
    <div>
      <div className='w-[96%] h-16 border border-gray flex items-center justify-start mx-[2%] mt-3 rounded-md bg-white overflow-hidden'>
        <div className='w-16 h-full flex items-center justify-start pl-6 text-2xl text-gray'><CiSearch /></div>
        <div className='w-full h-full flex items-center justify-start pr-8'>
          <input className='w-full text-lg font-normal outline-none' type='text' placeholder='Enter a destination or property' />
        </div>
      </div>
    </div>
  )
}

export default Activities