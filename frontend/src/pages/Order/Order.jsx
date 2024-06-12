import React, { useContext, useEffect, useState } from 'react'
import './Order.css'
import { StoreContext } from '../../context/storeContext';
import axios from 'axios';
import OrderDisplay from '../../components/OrderDisplay/OrderDisplay';



const Order = () => {

  const [orderData, setOrderData]= useState([]);
  const {Url} = useContext(StoreContext);

  const getOrder = async (tocken)=>
  {
    const response = await axios.post(`${Url}/api/order/orders`,{},{headers:{tocken}});
    if(response.data.success)
    {
      setOrderData(response.data.data);
    }
  }

  useEffect(()=>{

      const loadOrderData = async()=>
      {
        if(localStorage.getItem("tocken"))
        {
            
           await getOrder(localStorage.getItem("tocken"));

          
        }
      }
      loadOrderData();

      
  },[]);


  return (
    <div className='order'>
        <div className="order-container">
            <div className="order-title">
            <b>Item</b>
          <b>Title</b>
          <b>Total</b>
          {/* <p>Quantity</p> */}
          <b>Status</b>
          <b>Time</b>
          
            </div>
            <hr/>

            <div className="order-item">
              {orderData.slice().reverse().map((item,index)=>
              {
                return <OrderDisplay name={item.name} image={item.image} total={item.total} status={item.status} time={item.time} />
              })}
            </div>


        </div>
      
    </div>
  )
}

export default Order
