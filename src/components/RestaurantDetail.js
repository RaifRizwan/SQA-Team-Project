// src/components/RestaurantDetail.js

import React from 'react';
import './RestaurantDetail.css';


const RestaurantDetail = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h2>Menu</h2>
      {restaurant.menu.map((dish, index) => (
        <div key={index}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <button>Order</button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetail;