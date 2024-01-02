import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";

const PrivateStays = () => {
  return (
    <div>
      <div className='w-[96%] h-16 border border-gray flex items-center justify-start mx-[2%] my-3 rounded-md bg-white overflow-hidden'>
        <div className='w-16 h-full flex items-center justify-start pl-6 text-2xl text-gray'><CiSearch /></div>
        <div className='w-full h-full flex items-center justify-start pr-8'>
          <input className='w-full text-lg font-normal outline-none' type='text' placeholder='Enter a destination or property' />
        </div>
      </div>

      <div className='w-[96%] h-16 border border-gray flex items-center justify-start mx-[2%] my-3 rounded-md bg-white overflow-hidden'>
        <div className='w-[50%] h-12 float-left flex items-center justify-center overflow-auto'>
          <div className='w-16 h-full flex items-center justify-start pl-6 text-xl text-gray'><IoTodayOutline /></div>
          <div className='w-full h-full flex items-center justify-start'>
            <input className='w-full text-base font-normal pl-[0.2rem] outline-none' type='date' placeholder='Enter a destination or property' />
          </div>
        </div>
        <div className='w-[50%] h-12 border-l border-gray float-left flex items-center justify-center overflow-auto'>
          <div className='w-16 h-full flex items-center justify-start pl-6 text-xl text-gray'><IoTodayOutline /></div>
          <div className='w-full h-full flex items-center justify-start'>
            <input className='w-full text-base font-normal pl-[0.2rem] outline-none' type='date' placeholder='Enter a destination or property' />
          </div>
        </div>
      </div>
      <div className='w-[96%] h-16 border border-gray flex items-center justify-start mx-[2%] my-3 rounded-md bg-white overflow-hidden'>
        <div className='w-16 h-full flex items-center justify-start pl-6 text-xl text-gray'><GoPeople /></div>
        <div className='w-full h-full flex items-center justify-start pr-8'>
          <input className='w-full text-base font-normal outline-none' type='text' placeholder='Enter a destination or property' />
        </div>
      </div>
    </div>
  )
}

export default PrivateStays