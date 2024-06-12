import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import DisplayItem from '../../components/displayItem/DisplayItem.jsx';
import OrderList from '../orderList/OrderList.jsx';

const Home = () => {

  const Url = 'http://localhost:4000';
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get(`${Url}/api/order/delivery`);
      setOrders(response.data.data);
    
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  }

  useEffect(() => {
    const fetchOrders = async () => {
      await getOrders();
    }
    fetchOrders();
  }, []);

  useEffect(() => {
      console.log(orders);
  }, [orders]); // Run effect when orders or loading state changes


  const handleStatusChange = async(orderIndex, newStatus) => {

    setOrders(prevOrders => {
      const updatedOrders = [...prevOrders];
      updatedOrders[orderIndex].status = newStatus;
      return updatedOrders;
    });
    try {
      const response = await axios.post(`${Url}/api/order/admin/statuschange`,{status:orders[orderIndex].status},{headers:{tocken:orders[orderIndex]._id}});

      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  return (
    <div>
      <div className="home-container">
        <div className="home-title">
          <b>Item</b>
          <b>Title</b>
          <b>Price</b>
          <b>Quantity</b>
          <b>Total</b>
          <b>Address</b>
          <b>Status</b>
          <b>Time</b>
        </div>
        <hr/>

        <div className="orders-items">
          {orders.map((order, orderIndex) => {
            return (
              <div className='orders-and-status' key={orderIndex}>
                <div className='status-time'>
                  <p className='empty'></p>
                  <p className='empty'></p>
                  <p className='empty'></p>
                  <p className='empty'></p>
                  <b className='total'>₹ {order.item.reduce((total, item) => total + item.total, 0)}</b>
                  <div className= 'address'>
                  <b className='firsname-lastname'>First Name:  {order.address.firstName} {order.address.lastName} </b>
                  <br/>
                  <b className="email">e-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {order.address.email}</b>
                  <br/>
                  <b className="street-city-state">Street&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {order.address.street},<br/> City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {order.address.city}, <br/>State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {order.address.state}</b>
                  <br/>
                  <b className="zipcode-country">Zip-code&nbsp;&nbsp;&nbsp;: {order.address.zipCode} <br />Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {order.address.country}</b>
                  <br />
                  <b className="phone">Mobile No&nbsp;: {order.address.phone}</b>
                  </div>
                  <div className='status'>
                    <DisplayItem
                      currentStatus={order.status}
                      onChangeStatus={(newStatus) => handleStatusChange(orderIndex, newStatus)}
                    />
                  </div>
                  <p className='time'>{new Date(order.time).toLocaleString()}</p>
                </div>
                {order.item.map((item, index) => {
                  return (
                    <OrderList
                      key={index}
                      name={item.name}
                      Url={Url}
                      price={item.price}
                      total={item.total}
                      image={item.image}
                    />
                  );
                })}
                <hr />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  )
}

export default Home
