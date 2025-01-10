import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle,faPlus } from '@fortawesome/free-solid-svg-icons';
import './ListBikesAdd.css';
import { Link } from 'react-router-dom';

const ListBikeAdd = () => {
  const [listedBikes, setListedBikes] = useState([]);
  

  useEffect(() => {
    const bikes = JSON.parse(localStorage.getItem('listedBikes')) || [];
    setListedBikes(bikes);
  }, []);

  const handleDelete = (id) => {
    const updatedBikes = listedBikes.filter(bike => bike.id !== id);
    localStorage.setItem('listedBikes', JSON.stringify(updatedBikes));
    setListedBikes(updatedBikes);
  };
const handleEdit = (bike) => {
    localStorage.setItem('bikeToEdit', JSON.stringify(bike));
    navigate('/listbikedataenter', { state: { isEditing: true } });
  };
  return (
    <div className="listed-bikes-container">
      

      {listedBikes.length === 0 ? (

<div className="no-bikes-message">
<p><FontAwesomeIcon icon={faMotorcycle} /></p>
<p>No bikes listed yet.</p>
<Link to="/listbikedataenter">
  <button>+</button>
</Link>
</div>
      ) : (
       

        <div className="bikes-grid">
          <div className="header-container">
             <Link to="/listbikedataenter">
                <button className="list-bike-button">
                 <FontAwesomeIcon icon={faPlus} /> Add New
               </button>
              </Link>
          </div>
          {listedBikes.map((bike) => (
            <div key={bike.id} className="bike-card">
              <div className="bike-image-container">
                <img src={bike.image} alt={bike.model} className="bike-image" />
              </div>
              <div className="bike-info">
                <h3>{bike.manufacturer} {bike.model}</h3>
                <div className="bike-details">
                  <p className="description"> {bike.description}</p>
                  {bike.rentPrice && <p><strong>Rent Price:</strong> ₹{bike.rentPrice}/day</p>}
                  {bike.sellPrice && <p><strong>Sell Price:</strong> ₹{bike.sellPrice}</p>}
                </div>
               
                <button 
                  className="delete-button"
                  onClick={() => handleDelete(bike.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListBikeAdd;
                 
                 
                
