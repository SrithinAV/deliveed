import React from 'react'
import './foodDisplay.css'
import { useContext } from 'react'
import FoodItems from '../FoodItems/foodItems'
import { StoreContext } from '../../context/storeContext'



const FoodDisplay = ({category}) => {
    const {food_list,Url} = useContext(StoreContext);
    const url = `${Url}/images/`;


    return (
      <div className='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>
          {
            if(category==="All" || category === item.category)
            {
              return <FoodItems key={index} id={item._id} name={item.name} price={item.price}description={item.description}image={url+item.image}/>
            }
           
          })}
        </div>
      </div>
    )
}

export default FoodDisplay;
