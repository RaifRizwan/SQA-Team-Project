// src/components/RestaurantList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantList.css';


const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      <h1>Available Restaurants</h1>
      {restaurants.map((restaurant, index) => (
        <div key={index}>
          <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;