import React, { useState } from 'react';

const StatusDropdown = ({ currentStatus, onChangeStatus }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleStatusChange = async (newStatus) => {
       await onChangeStatus(newStatus);
        setShowDropdown(false);
    };

    return (
        <div className="status-dropdown-container">
            <p className={currentStatus==='Cancelled'?"cancelled":""} onClick={() => setShowDropdown(!showDropdown)}>{currentStatus}</p>
            {showDropdown && (
                <div className="dropdown">
                    <a href="#" onClick={() => handleStatusChange('Order Placed')}>Order Placed</a>
                    <a href="#" onClick={() => handleStatusChange('Out For Delivery')}>Out For Delivery</a>
                    <a href="#"  className="cancelled" onClick={() => handleStatusChange('Cancelled')}>Cancelled</a>
                </div>
            )}
        </div>
    );
};

export default StatusDropdown;
 
