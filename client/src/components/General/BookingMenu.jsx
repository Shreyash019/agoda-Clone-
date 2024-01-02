import React, { useEffect, useState } from 'react';
import { PiBuildingsFill, PiHouseFill, PiAirplaneTiltFill } from "react-icons/pi";

import HotelsHome from './HotelsHome';
import PrivateStays from './PrivateStays';
import FlightHotels from './FlightHotels';
import Flights from './Flight';
import Activities from './Activities';
import AirportTransfer from './AirportTransfer';

const BookingMenu = () => {

  const [activePage, setActivePage] = useState(1);
  const [pageValue, setPageValue] = useState(<HotelsHome />)
  const [searchText, setSearchText] = useState('SEARCH')

  const handleOnChangeRender = (e, pageNumber) => {
    e.preventDefault();
    setActivePage(pageNumber);
    switch (pageNumber) {
      case 2:
        setPageValue(<PrivateStays />);
        setSearchText('SEARCH')
        break;

      case 3:
        setPageValue(<FlightHotels />);
        setSearchText('SEARCH FLIGHT+HOTEL');
        break;

      case 4:
        setPageValue(<Flights />);
        setSearchText('SEARCH FLIGHTS');
        break;

      case 5:
        setPageValue(<Activities />);
        setSearchText('SEARCH');
        break;

      case 6:
        setPageValue(<AirportTransfer />);
        setSearchText('SEARCH');
        break;

      default:
        setPageValue(<HotelsHome />);
        setSearchText('SEARCH');
    }
  }

  useEffect(() => { }, [activePage, pageValue, searchText]);

  return (
    <div className='w-screen h-[40rem] float-left overflow-auto my-custom-bg-class bg-no-repeat bg-[length:100%_21rem] sm:bg-cover'>
      <div className='w-[70%] h-auto mx-[15%] flex flex-wrap items-center justify-center mt-28'>
        <div className='w-[96%] h-[3rem] flex flex-wrap items-center justify-center translate-y-4 shadow-sm shadow-gray bg-white rounded-xl'>
          <p className={`w-auto h-full text-[0.95rem] font-medium px-3.5 pt-0.5 flex items-center justify-center border-b-4 ${activePage === 1 ? 'text-btn-sky-blue border-btn-sky-blue' : 'border-b-white'}`} onClick={(e) => handleOnChangeRender(e, 1)}><PiBuildingsFill className='text-xl mr-1' />Hotels & Homes</p>
          <p className={`w-auto h-full text-[0.95rem] font-medium px-3.5 pt-0.5 flex items-center justify-center border-b-4 ${activePage === 2 ? 'text-btn-sky-blue border-btn-sky-blue' : 'border-b-white'}`} onClick={(e) => handleOnChangeRender(e, 2)}><PiHouseFill className='text-xl mr-1' />Private stays</p>
          <p className={`w-auto h-full text-[0.95rem] font-medium px-3.5 pt-0.5 flex items-center justify-center border-b-4 ${activePage === 3 ? 'text-btn-sky-blue border-btn-sky-blue' : 'border-b-white'}`} onClick={(e) => handleOnChangeRender(e, 3)}><PiHouseFill className='text-xl mr-1' />Flight + Hotel</p>
          <p className={`w-auto h-full text-[0.95rem] font-medium px-3.5 pt-0.5 flex items-center justify-center border-b-4 ${activePage === 4 ? 'text-btn-sky-blue border-btn-sky-blue' : 'border-b-white'}`} onClick={(e) => handleOnChangeRender(e, 4)}><PiAirplaneTiltFill className='text-xl mr-1' />Flights</p>
          <p className={`w-auto h-full text-[0.95rem] font-medium px-3.5 pt-0.5 flex items-center justify-center border-b-4 ${activePage === 5 ? 'text-btn-sky-blue border-btn-sky-blue' : 'border-b-white'}`} onClick={(e) => handleOnChangeRender(e, 5)}><PiHouseFill className='text-xl mr-1' />Activities</p>
          <p className={`w-auto h-full text-[0.95rem] font-medium px-3.5 pt-0.5 flex items-center justify-center border-b-4 ${activePage === 6 ? 'text-btn-sky-blue border-btn-sky-blue' : 'border-b-white'}`} onClick={(e) => handleOnChangeRender(e, 6)}><PiHouseFill className='text-xl mr-1' />Airport Transfer</p>
        </div>

        <div className='w-[98%] min-h-28 h-auto shadow-md shadow-gray rounded-2xl overflow-auto pt-4 pb-[3.5rem] bg-hh-book'>
          <div className='w-[100%] h-auto py-2 px-8'>
            {pageValue}
          </div>
        </div>

        <div className='w-[50%] h-[4.5rem] float-left flex items-center justify-center -translate-y-[2.25rem] overflow-auto'>
          <button className='w-full h-[4rem] flex items-center justify-center text-white shadow-sm shadow-gray bg-btn-sky-blue hover:bg-nav-bot-btn rounded-lg'>
            <p className='text-xl font-medium'>{searchText}</p>
          </button>
        </div>
      </div>
    </div>
  )
}
// 
// 
// Bundle & Save
// 
// 
// New!
// Activities
// New!
// 

export default BookingMenu