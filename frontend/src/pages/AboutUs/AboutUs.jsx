import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <div className='about-us' id = 'about-us'>
        
    <p className='about-us-heading'>About us</p>
        <div className="about-us-container">
            <div className="about-us-image-container">
            <img src={assets.logo} alt="" />
            </div>
            
            <div className='about-us-text'>
            <b>Welcome to <span className='highlight'>Deliveed</span>– Your Trusted Partner in Delivering Culinary Excellence</b>
            <p>At Deliveed, we are passionate about bringing the exquisite flavors of Taj Restaurant right to your doorstep. As the proud delivery partner of Taj Restaurant, we specialize in providing a seamless online food delivery experience, ensuring that your favorite dishes arrive fresh and on time, every time.

Our mission is simple: to make the exceptional dining experience of Taj Restaurant accessible from the comfort of your home. We strive to deliver not just food, but an unforgettable culinary journey that delights your taste buds and warms your heart.</p>
            </div>
            
        </div>
        <p className='about-us-paragraph'><span className='highlight'>Our Vision</span><br/>
We envision a world where gourmet dining is just a click away, where the rich culinary heritage of Taj
 Restaurant is available to everyone, everywhere. We are committed to expanding our reach and enhancing
  our services to meet and exceed the expectations of our valued customers.<br/>

  
  </p>
      
    </div>
  )
}

export default AboutUs
