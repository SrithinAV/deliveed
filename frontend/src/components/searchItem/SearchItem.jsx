import React, { useContext } from 'react'
import './SearchItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'


const SearchItem = ({setShowOops, setSearchBackground,id,name,price,description,image}) => {
    // const [itemCount, setItemCount] = useState(0)
    const {cartItem, addToCart, removeCartItem} = useContext(StoreContext)
    setSearchBackground(true);   
    

  return (
    <div className='search-food-items'>
        <div className="search-food-item-image-container">
            <img src={image} alt="" className="search-food-item-image" />
            {!cartItem[id] ? <img src={assets.add_icon_white} className='search-item-add' onClick={()=>addToCart(id)} alt=''/>: 
            
              <div className='search-food-item-counter'>
                <img src={assets.remove_icon_red} onClick={()=>removeCartItem(id)} alt=''/>
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt='' />
                

                
                </div>}
        </div>
        <div className="search-food-item-info">
            <div className="search-food-item-name-rating">

                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='search-food-item-desc'> {description}</p>
            <p className="search-food-item-price">₹{price}</p>

        </div>
       

    </div>
  )
}

export default SearchItem;
