import React from 'react';
import picture1 from '../../assets/1.jpg';
import picture2 from '../../assets/2.jpg';
import picture3 from '../../assets/3.jpg';
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
                    <img src={picture2} alt="" width={'100%'} height={'100%'} />
                    <img src={picture3} alt="" width={'100%'} height={'100%'} />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers