import React from 'react';
import './HeroBanner.css';
import './LowerHeroBanner.css';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { RiHotelLine } from 'react-icons/ri';
import { TbWorldSearch } from 'react-icons/tb';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { BiSolidPlaneTakeOff, BiSolidPlaneLand, BiSearch } from 'react-icons/bi';

function HeroBanner() {
  return (
    <div className='banner'>
      <div className='banner-position'>
        <div className='upper-banner'>
          <h1>Let's make your adventure!</h1>
          <div className='options'>
            <p><span><BiSolidPlaneAlt /></span>Air Ticket</p>
            <p><span><RiHotelLine /></span>Hotel</p>
            <p><span><TbWorldSearch /></span>Holidays</p>
          </div>
        </div>
        <div className='lower-banner'>
          <div className='lower-banner-head'>
            <p>One way</p>
            <p>Round Way</p>
            <p>Multi City</p>
          </div>
          <div className='container'>
            <div className='box1 common-box1 plane'>
              <p><span><BiSolidPlaneTakeOff /></span> DAC, Hazrat Sha Jalal Intl Airport</p>
            </div>
            <div className='box2'>
              <div className='box2-style'>
                <div>
                  <MdOutlineCalendarMonth />
                </div>
                <div>
                  <p>August</p>
                  <p className='box2-22'>22</p>
                  <p>Tuesday</p>
                </div>
              </div>
            </div>
            <div className='box3'>
              <p><MdOutlineCalendarMonth /></p>
              <p>Check to Return</p>
              <p>Flight</p>
            </div>
            <div className='box4 common-box1'>
              <p>Economy</p>
            </div>
            <div className='box5'>
              <p><BiSearch /></p>
              <p>search</p>
            </div>
            <div className='box6 common-box1 plane'>
              <p><span><BiSolidPlaneLand /></span> DXB, Dubai Intl Airport</p>
            </div>
            <div className='box7 common-box1'>
              <p>1 Passenger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner