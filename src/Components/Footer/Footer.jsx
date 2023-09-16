import React from 'react';
import './Footer.css';
import { AiOutlineInstagram , AiFillTwitterSquare} from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import payment from '../../assets/payment.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='upper-footer'>
                <div>
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ratione in modi dolorum explicabo molestiae!
                        Tempore repellat inventore vero magni ex temporibus at
                        ipsum repellendus voluptate. Ducimus nemo dignissimos neque ut.
                    </p>
                </div>
                <div>
                    <h4>Need Halp</h4>
                    <p>Ka 11/2A, Bashundhara R/A Road,
                        Jagannathpur, Dhaka 1229.
                    </p>
                    <ul className='list'>
                        <li>support@flyfarint.com</li>
                        <li>+880 9606 912 912</li>
                        <li>+880 1755 572 099</li>
                    </ul>
                </div>
                <div>
                    <h4>About</h4>
                    <ul className='list'>
                        <li>About us</li>
                        <li>Features</li>
                        <li>News</li>
                        <li>Menu</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul className='list'>
                        <li>Why others</li>
                        <li>partner with us</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul className='list'>
                        <li>Account</li>
                        <li>Support Center</li>
                        <li>Feedback</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='lower-footer'>
                <div>
                    <h4>We Accept</h4>
                    <img src={payment} alt="" />
                </div>
                <div>
                    <h4>Social</h4>
                    <p className='social'><FaFacebook/><AiOutlineInstagram/><BsLinkedin/><AiFillTwitterSquare/></p>
                </div>
            </div>
            <hr />
            <p className='copy-right'>&copy; 2023 All Right Reserved By BRAC & Developed By <span>Fly Far Tech</span></p>
        </div>
    )
}

export default Footer