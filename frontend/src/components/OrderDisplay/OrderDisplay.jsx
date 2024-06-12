import React, { useContext } from 'react'
import './OrderDisplay.css'
import { StoreContext } from '../../context/storeContext'

const OrderDisplay = ({name,image,total,status,time}) => {
    const {Url} = useContext(StoreContext);
  return (
    <div className='order-display-container'>
    <div className='order-display'>
      <img src={`${Url}/images/`+image} alt="" />
      <p className='order-name' >{name}</p>
      <p className='order-total'>{total}</p>
      <p className='order-status'>{status}</p>
      <p>{new Date(time).toLocaleString()}</p>

    </div>
    <hr />
    </div>
  )
}

export default OrderDisplay
