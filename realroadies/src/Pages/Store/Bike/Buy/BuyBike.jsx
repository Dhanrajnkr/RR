import React, { useState, useEffect } from 'react';
import './BuyBike.css';

const BuyBike = () => {
  const [listedBikes, setListedBikes] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const bikes = JSON.parse(localStorage.getItem('listedBikes')) || [];
    // Filter only bikes that have either sellPrice or rentPrice
    const availableBikes = bikes.filter(bike => bike.sellPrice || bike.rentPrice);
    setListedBikes(availableBikes);
  }, []);

  const filteredBikes = listedBikes.filter(bike => {
    if (filterType === 'rent') return bike.rentPrice;
    if (filterType === 'sell') return bike.sellPrice;
    return true;
  });

  return (
    <div className="buy-bike-container">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
          onClick={() => setFilterType('all')}
        >
          All Available Bikes
        </button>
        <button 
          className={`filter-btn ${filterType === 'rent' ? 'active' : ''}`}
          onClick={() => setFilterType('rent')}
        >
          Rent Only
        </button>
        <button 
          className={`filter-btn ${filterType === 'sell' ? 'active' : ''}`}
          onClick={() => setFilterType('sell')}
        >
          Sale Only
        </button>
      </div>

      <div className="bikes-grid">
        {filteredBikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.image} alt={bike.model} className="bike-image"/>
            <div className="bike-info">
              <h3>{bike.manufacturer} {bike.model}</h3>
              <p>Year: {bike.year}</p>
              <p>Kms Driven: {bike.kmsDriven}</p>
              {bike.rentPrice && (
                <p className="price">Rent: ₹{bike.rentPrice}/day</p>
              )}
              {bike.sellPrice && (
                <p className="price">Price: ₹{bike.sellPrice}</p>
              )}
              <p className="description">{bike.description}</p>
              <div className="contact-info">
                {bike.phoneNo && <p>Phone: {bike.phoneNo}</p>}
                {bike.email && <p>Email: {bike.email}</p>}
              </div>
            </div>
          </div>
        ))}
        
        {filteredBikes.length === 0 && (
          <div className="no-bikes-message">
            No bikes available for {filterType === 'all' ? 'sale or rent' : filterType}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyBike;
