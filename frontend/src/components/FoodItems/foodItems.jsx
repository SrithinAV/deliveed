import React, { useContext } from 'react'
import './foodItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'


const FoodItems = ({id,name,price,description,image}) => {
    // const [itemCount, setItemCount] = useState(0)
    const {cartItem, addToCart, removeCartItem} = useContext(StoreContext)

  return (
    <div className='food-items'>
        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image" />
            {!cartItem[id] ? <img src={assets.add_icon_white} className='item-add' onClick={()=>addToCart(id)} alt=''/>: 
            
              <div className='food-item-counter'>
                <img src={assets.remove_icon_red} onClick={()=>removeCartItem(id)} alt=''/>
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt='' />
                

                
                </div>}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">

                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='food-item-desc'> {description}</p>
            <p className="food-item-price">₹{price}</p>

        </div>
       

    </div>
  )
}

export default FoodItems
