// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Papa from 'papaparse';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    Papa.parse('/restaurants.csv', {
      header: true,
      download: true,
      complete: (results) => {
        setRestaurants(results.data);
      }
    });

    Papa.parse('/menu.csv', {
      header: true,
      download: true,
      complete: (results) => {
        setMenu(results.data);
      }
    });
  }, []);

  const findRestaurantById = (id) => {
    const restaurant = restaurants.find((r) => r.id === id);
    restaurant.menu = menu.filter((dish) => dish.restaurantId === id);
    return restaurant;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RestaurantList restaurants={restaurants} />} />
        <Route path="/restaurant/:id" element={({ match }) => {
          const restaurant = findRestaurantById(match.params.id);
          return <RestaurantDetail restaurant={restaurant} />;
        }} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;