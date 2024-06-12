import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>

            <div className="footer-content-right">
                <img  className='footer-content-right-logo' src={assets.logo} alt=''/>
                <p>This is tomato where you can make your dream food come<br /> true come and enjoy our delicious variety of foods</p> 
           
             <div className="social-media">
                <a href="https://facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://x.com/SrithinV?t=Ea8gs-e0fCHY8GRpef-HYw&s=08"><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.linkedin.com/in/srithinav/"><img src={assets.linkedin_icon} alt="" /></a>
             </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>

                    <a href="#header"><li>Home</li></a>
                    <a href="#about-us"><li>About Us</li></a>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-left">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 8590721355</li>
                    <li><a href="mailto:deliveed@gmail.com">deliveed2023@gmail.com</a></li>
                </ul>
            </div>
          
        </div>
        <hr />
           <p className="footer-copyright">Copyright 2024 © deliveed.com - All Rights Reserved </p>
    </div>
  )
}


export default Footer