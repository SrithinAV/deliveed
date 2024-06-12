import React, {useContext, useState} from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = ({setSignIn, setSearch}) => {
    const [menu, setMenu] =useState("menu");
    const {getTotalCartAmount,tocken, setTocken, Url } = useContext(StoreContext)

    const orderLink = Url.split(':')[0] + '://' + Url.split('/')[2].split(':')[0] + ':3000/orders';// Extracting the protocol and hostname

    
   
   const navigate = useNavigate();
    const logout = ()=>
    { 

      localStorage.removeItem("tocken");
      setTocken("");
      navigate('/');
      
    }
  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} className='logo' alt=''/></Link >
        <ul className='navbar-menu'>
            <Link to='/'><li onClick={()=>setMenu("home")} className={menu === 'home'? "active":""}>Home</li></Link>
            <a href='#explore-menu'><li onClick={()=>setMenu("menu")} className={menu === 'menu'? "active":""} >Menu</li></a>
           <a href="#about-us"> <li onClick={()=>setMenu("mobile")} className={menu === 'mobile'? "active":""}>About us</li></a>
            <a href='#footer'><li onClick={()=>setMenu("contact")} className={menu === 'contact'? "active":""}>Contact us</li></a>


        </ul>

        <div className="navbar-right">
            <img className='search-icon' onClick = {()=>setSearch(true)}src ={assets.search_icon} alt=''/>
            <div className="navbar-search-icon">
               <Link to ='/cart' ><img src={assets.basket_icon} alt=''/></Link> 
                <div className={getTotalCartAmount() >0? "dot": ''}></div>
            </div>
            {!tocken?<button onClick={()=>setSignIn(true)}>Sign in</button>: <div className='navbar-profile'>
              
              <img src={assets.profile_icon} alt="" />
              <ul className='navbar-profile-dropdown'>
               <Link to={orderLink}><li><img src={assets.bag_icon} alt='' /><p>Orders</p></li></Link> 
               <hr />
               <li onClick={logout}>
                <img src={assets.logout_icon} alt=''/>
                <p>Logout</p>
               </li>

              </ul>
               </div>}
            
        </div>
      
    </div>
  )
}

export default Navbar
