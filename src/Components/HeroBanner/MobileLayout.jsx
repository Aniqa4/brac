import React from 'react';
import './LowerHeroBanner.css';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { BiSolidPlaneTakeOff, BiSolidPlaneLand, BiSearch } from 'react-icons/bi';

function MobileLayout() {
    return (
        <div className='container-for-mobile'>
            <div className='box1 common-box1 plane'>
                <p><span><BiSolidPlaneTakeOff /></span> DAC, Hazrat Sha Jalal Intl Airport</p>
            </div>
            <div className='box6 common-box1 plane'>
                <p><span><BiSolidPlaneLand /></span> DXB, Dubai Intl Airport</p>
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
            <div className='box7 common-box1'>
                <p>1 Passenger</p>
            </div>
            <div className='box5'>
                <p><BiSearch /></p>
                <p>search</p>
            </div>
        </div>
    )
}

export default MobileLayout