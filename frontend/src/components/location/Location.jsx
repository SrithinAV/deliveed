// src/Location.js
import React, { useState } from 'react';
import './Location.css';
import Map from '../map/Map';
import axios from 'axios';

const Location = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError('Geolocation is not supported by this browser.');
    }

    const response = await axios.get('http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}');
    

  };

  const showPosition = (position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    setError(null);
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        setError('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        setError('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        setError('An unknown error occurred.');
        break;
      default:
        setError('An unknown error occurred.');
    }
  };

  return (
    <div>
      <h1>Get Current Location</h1>
      <button onClick={getLocation}>Get Location</button>
      {error && <p>Error: {error}</p>}
      {location.latitude && (
        <>
        <p>
          Latitude: {location.latitude}
          <br />
          Longitude: {location.longitude}

        </p>
        
        </>
      )}
    </div>
  );
};

export default Location;
