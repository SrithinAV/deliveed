import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { food_list,
    cartItem,
    removeCartItem,
    getTotalCartAmount,Url
  } = useContext(StoreContext)

  const url = `${Url}/images/`;

const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove </p>
        </div>
        <br />
        <hr />

        {
          food_list.map((item, index)=>
          {
            if(cartItem[item._id] > 0)
            {
              return (
              <div>
                <div className="cart-item-title cart-items-item">
                  <img src={url+item.image} alt=''/>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>₹{item.price * cartItem[item._id]}</p>
                  <p onClick={()=>removeCartItem(item._id)} className='cross'>X</p>
                </div>
                <hr/>
                </div>
              )
            }
          })
        }
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount()===0?'0':'60'}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total </b>
            <b>₹{getTotalCartAmount()===0? '0':getTotalCartAmount() + 60}</b>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
 
      <div className="promo-code">
        <div>
          <p className='promo-text'>If you have a promo code, Enter it here</p>
          <div className="promo-code-input">
            <input type="text" placeholder=' promo code' />
            <button>Submit</button>
          </div>

        </div>
      </div>

      </div>

    </div>
  )
}

export default Cart
