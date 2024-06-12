import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExplorMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'
import AboutUs from '../AboutUs/AboutUs'



const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory ={setCategory}/>
      <FoodDisplay category = {category}/>
      <AboutUs />
    
      
    </div>
  )
}

export default Home
