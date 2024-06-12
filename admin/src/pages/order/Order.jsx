import React, { useEffect, useState } from 'react';
import './Order.css';
import axios from 'axios';
import OrderList from '../../components/orderList/OrderList';
import StatusDropdown from '../../components/statusDropdown/StatusDropdown';


const Order = ({ Url }) => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(`${Url}/api/order/admin/orders`, {});
      if (response.data.success) {
        setOrders(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    const callFetchOrders = async () => {
      await fetchOrders();
    };
    callFetchOrders();
  }, []);

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

  };

  return (
    <div className='orders'>
      <div className="orders-container">
        <div className="orders-title">
          <b>Item</b>
          <b>Title</b>
          <b>Price</b>
          <b>Quantity</b>
          <b>Total</b>
          <b>Status</b>
          <b>Time</b>
        </div>
        <hr />
        <div className="orders-items">
          {orders.map((order, orderIndex) => {
            return (
              <div className='orders-and-status' key={orderIndex}>
                <div className='status-time'>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p className='total'>₹ {order.item.reduce((total, item) => total + item.total, 0)}</p>
                  <div className='status'>
                    <StatusDropdown
                      currentStatus={order.status}
                      onChangeStatus={(newStatus) => handleStatusChange(orderIndex, newStatus)}
                    />
                  </div>
                  <p className='time'>{order.time}</p>
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
  );
};

export default Order;
