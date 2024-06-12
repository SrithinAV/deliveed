import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
import axios from 'axios'
import Order from '../Order/Order'


const PlaceOrder = ({setSignIn}) => {
  
  const  { getTotalCartAmount, tocken, Url, cartItem, food_list} = useContext(StoreContext)

 let orderItem = [];


  // console.log(orderItem);
  let Amount = getTotalCartAmount() + 60; //cart + delivery charge

  for(const item of food_list)
  {
    if(cartItem[item._id]>0)
    {
      const itemWithTotal = { ...item, total: item.price * cartItem[item._id] };
     orderItem.push(itemWithTotal);
    }
  }
  const [address, SetAddress] =useState({
  
     firstName:"",
     lastName:"",
     email:"",
     street:"",
     city:"",
     state:"",
     zipCode:"",
     country:"",
     phone:""

  })
  const [orderData, setOrderData] = useState(
    {
       orderItem:cartItem,
       address:address,
       amount:Amount,
       items:orderItem
      
    }
  )
  

  const onClickHandle = (event)=>
  {
     const {name, value} = event.target;

     SetAddress((prev)=>({...prev, [name]:value}));
    //  console.log(address);
     
  }

  const onSubmitHandler = async(event)=>
  {
  event.preventDefault();
  if(tocken)

  { 
    // setOrderData((prev)=>({...prev, address:address}));
    console.log(orderData);

    const response = await axios.post(`${Url}/api/order/place`,{orderData},{headers:{tocken}});
    console.log(response.data.success);

    if(response.data.success)
    {
      <Order />
      window.location.replace('http://localhost:3000/orders');
    }
    else
    {
      window.alert(response.data.message);
    }
  }
  else
  {
    setSignIn(true);
  }


  }
  useEffect(() => {
    setOrderData((prev) => ({ ...prev, address: address }));
  }, [address]);


  return (
    <div className='placeorder'>
      <div className="placeorder-container">

        <div className="delivery-info">
          <h1>Delivery Information</h1>
          <form onSubmit={onSubmitHandler} className='delivery-info-form'>
            <div className="first-last-name">
            <input onChange={onClickHandle} type='text' placeholder='first name' name='firstName' value={address.firstName} required />
            <input onChange={onClickHandle} type='text' placeholder='last name' name='lastName' value={address.lastName} required />
            </div>
            {/* <div className="email-street"> */}
              <input onChange={onClickHandle} type='email' placeholder='email address' value={address.email} name='email' required />
              <input onChange={onClickHandle} type='text' placeholder='street' value={address.street} name='street' required />

            {/* </div> */}
            <div className="city-state">
            <input onChange={onClickHandle} type="text" placeholder='city' value={address.city} name='city' required />
            <input onChange={onClickHandle} type="text"placeholder='state' value={address.state} name='state' required/>
            </div>
            <div className="zip-country">
            <input onChange={onClickHandle} type="text" placeholder='zipcode' value={address.zipCode} name='zipCode' required />
            <input onChange={onClickHandle}type="text" placeholder='country' value={address.country} name='country' required/>
            </div>
            <input onChange={onClickHandle} type="phone" placeholder='phone' value={address.phone} name='phone' required />
            <button type='submit' >PLACE ORDER  (CASH ON DELIVERY)</button>

            
          </form>
        </div>
        <div className="placeorder-right">
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
            <b className='address-total'>Total </b>
            <b className='address-total'> ₹{getTotalCartAmount()===0?'0':getTotalCartAmount() + 60}</b>
          </div>
          
        </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
