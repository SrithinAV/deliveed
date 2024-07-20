//import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import SignIn from './components/signin/SignIn'


const App = () => {
 
  const Url = "http://localhost:4000";

  const [signIn, setSignin] = useState(false);
  
  useEffect(() => {
    const loggedIn =  sessionStorage.getItem('isLoggedIn');
    if (loggedIn) {
      setSignin(true);
    }
  }, []);

  return (
    <div>
    <ToastContainer />
    {signIn ? (
      <>
        <Navbar />
        <hr />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route path='/add' element={<Add Url={Url} />} />
            <Route path='/list' element={<List Url={Url} />} />
            <Route path='/orders' element={<Order Url={Url} />} />
          </Routes>
        </div>
      </>
    ) : (
      <SignIn setSignin={setSignin} />
    )}
  </div>
  )
}

export default App
