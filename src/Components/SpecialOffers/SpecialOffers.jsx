import React from 'react';
import picture1 from '../../assets/hot-deals1.jpg';
import './SpecialOffers.css'


function SpecialOffers() {
    return (
        <div>
            <div className='special-offers'>
                <div className='special-offers-header'>
                    <h2>Special Offers</h2>
                    <p>View All</p>
                </div>
                <div className='special-offers-images'>
                    <img src={picture1} alt="" width={'100%'} height={'100%'} />
                    <img src={picture1} alt="" width={'100%'} height={'100%'} />
                    <img src={picture1} alt="" width={'100%'} height={'100%'} />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers