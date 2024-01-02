import React from 'react';
import ProjLogo from '../assets/projLogo.svg';
import { FaSuitcaseRolling } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  return (
    <div className='w-screen h-auto float-left overflow-auto'>
        <div className='w-full h-[3.75rem] flex items-center justify-center'>
            <div className='w-[12%] h-[3.75] float-left flex items-center justify-center overflow-auto'>
                <img className='w-auto h-[2.3rem]' src={ProjLogo} alt='ProjLogo'/>
            </div>
            <div className='w-[58%] h-[3.75rem] float-left flex flex-wrap items-center justify-start'>
                <p className='w-auto h-auto text-[0.9rem] font-semibold ml-[3%] mr-[5%] hover:text-nav-bot-btn'>Flight + Hotel</p>
                <p className='w-auto h-auto text-[0.9rem] font-semibold mr-[5%] hover:text-nav-bot-btn'>Hotels & Homes</p>
                <div className='w-auto h-auto text-[0.9rem] font-semibold mr-[5%] flex items-center justify-start'>
                    <p className='hover:text-nav-bot-btn'>Transport</p><button className='px-1 text-lg'><IoIosArrowDown/></button></div>
                <p className='w-auto h-auto text-[0.9rem] font-semibold mr-[5%] hover:text-nav-bot-btn'>Activities</p>
                <p className='w-auto h-auto text-[0.9rem] font-semibold mr-[5%] hover:text-nav-bot-btn'>Coupons & Deals</p>
            </div>
            <div className='w-[30%] h-[3.75rem] float-left flex items-center justify-start'>
                <p className=' h-[2.85rem] text-[0.8rem] font-normal px-4 pb-0.5 flex items-center justify-center rounded-md text-nav-bot-btn hover:bg-nav-bot-btn hover:text-white'>Sign in</p>
                <p className='px-5 py-3 mx-2 text-[0.8rem] font-normal text-nav-bot-btn border border-nav-bot-btn rounded-md hover:bg-nav-bot-btn hover:text-white'>Create Account</p>
                <PiShoppingCartLight className='text-2xl mx-6'/>
                <CiMenuBurger className='text-2xl mx-4'/>
            </div>
        </div>
        <div className='w-full h-[3.5rem] pb-1 bg-nav-bot-bg flex items-center justify-center'>
            <FaSuitcaseRolling className='mr-4 text-2xl text-orange'/>
            <p className='text-[0.95rem] sm:text-xs font-normal mr-8'>Traveling internationally? Get updated information on COVID-19 travel guidance and restrictions.</p>
            <p className='text-[0.75rem] sm:text-xs text-nav-bot-btn px-4 py-0.5 bg-white border border-nav-bot-btn rounded-md hover:bg-nav-bot-btn hover:text-white'>Learn more</p>
        </div>
    </div>
  )
}

export default Header