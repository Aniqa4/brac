import React from 'react';
import './HeroBanner.css';
import banner from '../../assets/banner.jpg';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { RiHotelLine } from 'react-icons/ri';
import { TbWorldSearch } from 'react-icons/tb';

function HeroBanner() {
  return (
    <div className='banner'>
      <img src={banner} alt="banner" width={'100%'} />
      <div className='upper-banner'>
        <h1>Let's make your adventure!</h1>
        <div className='options'>
          <p className='banner-button'><span><BiSolidPlaneAlt /></span>Air Ticket</p>
          <p className='banner-button2'><span><RiHotelLine /></span>Hotel</p>
          <p className='banner-button2'><span><TbWorldSearch /></span>Holidays</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner