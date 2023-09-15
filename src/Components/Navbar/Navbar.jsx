import React from 'react'
import logo from '../../assets/brac-logo.jpg'
import '../Navbar/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='title'>
                <img src={logo} alt="logo of brac" width={'100px'} height={''}/>
            </div>
            <button className='button'>Sign In</button>
        </div>
    )
}

export default Navbar