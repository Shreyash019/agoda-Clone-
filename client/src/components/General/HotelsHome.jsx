import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";

const HotelsHome = () => {

    const [btnBorder, setBTNBorder] = useState(1);

    const handleBTNChange = (e, btnVal) => {
        e.preventDefault();
        if(btnVal === 2){
            setBTNBorder(2);
        } else setBTNBorder(1)
    }

    useEffect(() => { }, [btnBorder]);
    
    return (
        <div>
            <div className='w-[96%] h-auto flex items-center justify-start overflow-auto mx-[2%] pl-0.5 pt-3 pb-2'>
                <button className={`px-4 py-1.5 bg-white hover:bg-btn-sky-blue-bg border outline rounded-3xl mr-4 ${btnBorder === 1 ? 'border-btn-sky-blue outline-btn-sky-blue text-btn-sky-blue' : 'outline-hh-book border-gray'}`} onClick={(e)=>handleBTNChange(e, 1)}>
                    <p className='text-sm font-medium'>Overnight Stays</p>
                </button>
                <button className={`px-4 py-1.5 bg-white hover:bg-btn-sky-blue-bg border outline rounded-3xl mr-4 ${btnBorder === 2 ? 'border-btn-sky-blue outline-btn-sky-blue text-btn-sky-blue' : 'outline-hh-book border-gray'}`} onClick={(e)=>handleBTNChange(e, 2)}>
                    <p className='text-sm font-medium'>Day Use Stays</p>
                </button>
            </div>
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

export default HotelsHome