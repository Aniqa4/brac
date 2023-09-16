import React from 'react';
import './HotDeals.css';
import picture1 from '../../assets/hot-deals1.jpg'
import picture2 from '../../assets/hot-deals2.jpg'

function HotDeals() {
    return (
        <div className='hot-deals'>
            <div className='hot-deals-header'>
                <h2>Hot Deals</h2>
                <div className='hot-deals-items'>
                    <p>All</p>
                    <p>Flight</p>
                    <p>Hotel</p>
                    <p>Tour</p>
                    <p>Others</p>
                </div>
            </div>
            <div className='hot-deals-images'>
                <div className='hot-deals-image1'>
                    <img src={picture1} alt="" width={'100%'} height={'100%'}/>
                    <div className='hot-deals-image1-text'>
                        <h3>Get Air Ticket at Lowest Price</h3>
                    </div>
                </div>
                <img src={picture2} alt="" width={'100%'} height={'100%'} />
            </div>
        </div>
    )
}

export default HotDeals