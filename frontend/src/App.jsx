import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Footer from './components/footer/Footer.jsx'
import SignInPopUp from './components/SignInPopUp/SignInPopUp.jsx'
import Search from './components/search/Search.jsx'
import Order from './pages/Order/Order.jsx'


const App = () => {
  const [signIn, setSignIn] = useState(false);
  const [search, setSearch] = useState(false);
  return (
 
    

    <>
   
    {search?<Search setSearch={setSearch} />:<></>}
    
    {signIn? <SignInPopUp setSignIn = {setSignIn}/>: <></>}
    
    <div className='app'>
   

   
       <Navbar setSearch={setSearch} setSignIn={setSignIn}/>
       
      <Routes>
       
      <Route path='/' element = {<Home />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='/order' element = {<PlaceOrder setSignIn={setSignIn} />}/>
      <Route path='/orders' element={<Order />} />

      </Routes>
     
      
      
    </div>
    
    <Footer />
    
    </>
  )
}

export default App
