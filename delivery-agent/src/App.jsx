import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home/>
      
    </div>
  )
}

export default App
