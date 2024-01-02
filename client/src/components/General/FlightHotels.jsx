import React, { useEffect, useState } from 'react';
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { IoTodayOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { LuDoorOpen } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { CiPlane } from "react-icons/ci";

const FlightHotels = () => {

  const [btnBorder, setBTNBorder] = useState(1);

  const handleBTNChange = (e, btnVal) => {
    e.preventDefault();
    if (btnVal === 2) {
      setBTNBorder(2);
    } else setBTNBorder(1)
  }

  useEffect(() => { }, [btnBorder])

  return (
    <div>
      <div className='w-[100%] h-auto flex items-center justify-start overflow-auto mx-[2%] pl-0.5 pt-3 pb-2 mb-2'>
        <button className={`px-4 py-1.5 bg-white hover:bg-btn-sky-blue-bg border outline rounded-3xl mr-4 ${btnBorder === 1 ? 'border-btn-sky-blue outline-btn-sky-blue text-btn-sky-blue' : 'outline-hh-book border-gray'}`} onClick={(e) => handleBTNChange(e, 1)}>
          <p className='text-sm font-medium'>One-way</p>
        </button>
        <button className={`px-4 py-1.5 bg-white hover:bg-btn-sky-blue-bg border outline rounded-3xl mr-4 ${btnBorder === 2 ? 'border-btn-sky-blue outline-btn-sky-blue text-btn-sky-blue' : 'outline-hh-book border-gray'}`} onClick={(e) => handleBTNChange(e, 2)}>
          <p className='text-sm font-medium'>Economy</p>
        </button>
      </div>
      <div className='w-[100%] h-auto flex flex-wrap items-center justify-center px-1.5'>

        <div className='w-[48%] h-16 border border-gray flex items-center justify-start mx-[1%] my-2 rounded-md bg-white overflow-hidden'>
          <div className='w-[50%] h-12 float-left flex items-center justify-center overflow-auto'>
            <div className='w-12 h-full flex items-center justify-start pl-3 text-2xl'><CiPlane /></div>
            <div className='w-full h-full block truncate overflow-auto'>
              <p className='w-[100%] text-md text-gray truncate overflow-auto'>City or airport name</p>
              <select className='appearance-none font-medium'>
                <option>Flying from</option>
              </select>
            </div>
          </div>
          <button className='w-8 h-8 translate-x-2 bg-white flex items-center justify-center shadow shadow-gray rounded-md text-lg'><HiOutlineArrowsRightLeft/></button>
          <div className='w-[50%] h-12 float-left flex items-center justify-center overflow-auto'>
            <div className='w-12 h-full flex items-center justify-start pl-3 text-2xl'><CiLocationOn /></div>
            <div className='w-full h-full block truncate overflow-auto'>
              <p className='w-[100%] text-md text-gray truncate overflow-auto'>City or airport name</p>
              <select className='appearance-none font-[500]'>
                <option>Flying to</option>
              </select>
            </div>
          </div>
        </div>

        <div className='w-[48%] h-16 border border-gray flex items-center justify-start mx-[1%] my-2 rounded-md bg-white overflow-hidden'>
          <div className='w-12 h-full flex items-center justify-start pl-3 text-2xl'><IoTodayOutline /></div>
          <div className='w-full h-full block'>
            <p className='w-[100%] h-6 pt-1 -pb-1 text-md text-gray truncate overflow-auto'>Departure</p>
            <input className='w-[100%] h-6 text-lg font-normal outline-none' type='date'/>
          </div>
        </div>

        <div className='w-[48%] h-16 border border-gray flex items-center justify-start mx-[1%] my-2 rounded-md bg-white overflow-hidden'>
          <div className='w-[50%] h-12 float-left flex items-center justify-center overflow-auto'>
            <div className='w-12 h-full flex items-center justify-start pl-3 text-xl'><GoPeople /></div>
            <div className='w-full h-full flex items-center justify-start'>
              <select className='appearance-none font-medium'>
                <option>1 Passenger</option>
              </select>
            </div>
          </div>
          <div className='w-[50%] h-12 border-l border-gray float-left flex items-center justify-center overflow-auto'>
            <div className='w-12 h-full flex items-center justify-start pl-3 text-xl'><LuDoorOpen /></div>
            <div className='w-full h-full flex items-center justify-start'>
              <select className='appearance-none font-medium'>
                <option>1 Room</option>
              </select>
            </div>
          </div>
        </div>

        <div className='w-[48%] h-16 border border-gray flex items-center justify-start mx-[1%] my-2 rounded-md bg-white overflow-hidden'>
          <div className='w-12 h-full flex items-center justify-start pl-3 text-2xl'><input className='w-4 h-4' type='checkbox'/></div>
          <div className='w-full h-full flex items-center justify-start pr-8'>
            <p className='w-full text-[1.05rem] font-normal outline-none' >Search for hotel in different cities or dates</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default FlightHotels