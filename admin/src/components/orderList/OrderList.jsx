import React from 'react'
import './OrderList.css'

const OrderList = ({price,name,total,Url,image,}) => {


  return (
    <div className='order-list'> 
    <div className="order-container">
     <img src={`${Url}/images/`+image} alt="" />
     <p>{name}</p>
     <p>{price}</p>
        <p>{total/price}</p>
        
       
    </div>
    
    </div>
  )
}

export default OrderList
