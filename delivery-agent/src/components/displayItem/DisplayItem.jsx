import React, { useState } from 'react';
import './DisplayItem.css';

const DisplayItem = ({currentStatus, onChangeStatus }) => {
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
                    <a href="#revert" onClick={() => handleStatusChange('Out For Delivery')}>Out For Delivery</a>
                    <a href="#delivered" onClick={() => handleStatusChange('Delivered')}>Delivered</a>
                    <a href="#cancell"  className="cancelled" onClick={() => handleStatusChange('Cancelled')}>Cancelled</a>
                </div>
            )}
        </div>
    );
}

export default DisplayItem
