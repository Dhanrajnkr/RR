import React, { useState } from 'react';
import './ListBikeDataEnter.css';

const ListBikeDataEnter = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showRentPrice, setShowRentPrice] = useState(false);
  const [showSellPrice, setShowSellPrice] = useState(false);
  const [rentPrice, setRentPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [kmsDriven, setKmsDriven] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({
    image: '',
    manufacturer: '',
    model: '',
    year: '',
    kmsDriven: '',
    phoneNo: '',
    email: '',
    description: '',
    rentPrice: '',
    sellPrice: '',
    checkbox: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const manufacturers = [
    'Honda', 'Yamaha', 'Suzuki', 'Royal Enfield', 'KTM', 'Bajaj', 'TVS', 'Hero', 'BMW', 'Kawasaki', 'Ather', 'Ola', 'Others'
  ];

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setErrors({ ...errors, image: '' });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!selectedImage) newErrors.image = 'Please upload a bike image*';
    if (!selectedManufacturer) newErrors.manufacturer = 'Please select a manufacturer*';
    if (!model.trim()) newErrors.model = 'Please enter bike model*';
    if (!year) newErrors.year = 'Please enter manufacturing year*';
    if (year && year.length !== 4) newErrors.year = 'Please enter a valid 4-digit year*';
    if (!kmsDriven) newErrors.kmsDriven = 'Please enter kilometers driven*';

    if (!phoneNo && !email) newErrors.phoneNo = 'Please enter either phone no or email*';
    if (phoneNo && phoneNo.length !== 10) newErrors.phoneNo = 'Please enter a valid 10-digit phone number*';
    if (email && !validateEmail(email)) newErrors.email = 'Please enter a valid email*';

    if (!description.trim()) newErrors.description = 'Please enter bike description*';
    if (showRentPrice && !rentPrice) newErrors.rentPrice = 'Please enter rent price*';
    if (showSellPrice && !sellPrice) newErrors.sellPrice = 'Please enter selling price*';
    if (!showRentPrice && !showSellPrice) newErrors.checkbox = 'Please select either Rent or Sell*';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const bikeData = {
      id: Date.now(),
      image: selectedImage,
      manufacturer: selectedManufacturer,
      model,
      year,
      kmsDriven,
      phoneNo,
      email,
      description,
      rentPrice: showRentPrice ? rentPrice : null,
      sellPrice: showSellPrice ? sellPrice : null
    };

    const existingBikes = JSON.parse(localStorage.getItem('listedBikes')) || [];
    existingBikes.push(bikeData);
    localStorage.setItem('listedBikes', JSON.stringify(existingBikes));

    // Clear form fields
    setSelectedImage(null);
    setSelectedManufacturer('');
    setModel('');
    setYear('');
    setKmsDriven('');
    setPhoneNo('');
    setEmail('');
    setDescription('');
    setRentPrice('');
    setSellPrice('');
    setShowRentPrice(false);
    setShowSellPrice(false);

    
    setShowThankYou(true);

    
    setTimeout(() => {
     
    }, 2000); 
  };

  return (
    <div className="bikedetail-container">
      <div className="bikedetail-img" onClick={handleImageClick}>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        {selectedImage ? (
          <img src={selectedImage} alt="bike" className="uploaded-image" />
        ) : (
          <div className="default-image-container">
            <img src="./assets/addphoto-img.png" alt="addphoto" />
            <p>Tap to add photos</p>
          </div>
        )}
        {errors.image && <p className="error-message-img">{errors.image}</p>}
      </div>

      <form className="bikedetail-info" onSubmit={handleSubmit}>
        <select
          className="bike-input-select"
          value={selectedManufacturer}
          onChange={(e) => setSelectedManufacturer(e.target.value)}
        >
          <option value="" disabled>Select Manufacturer</option>
          {manufacturers.map((manufacturer, index) => (
            <option key={index} value={manufacturer}>
              {manufacturer}
            </option>
          ))}
        </select>
        {errors.manufacturer && <p className="error-message">{errors.manufacturer}</p>}

        <input
          className="bike-input"
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        {errors.model && <p className="error-message">{errors.model}</p>}

        <input
          className="bike-input"
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {errors.year && <p className="error-message">{errors.year}</p>}

        <input
          className="bike-input"
          type="text"
          placeholder="Kms Driven"
          value={kmsDriven}
          onChange={(e) => setKmsDriven(e.target.value)}
        />
        {errors.kmsDriven && <p className="error-message">{errors.kmsDriven}</p>}

        <input
          className="bike-input"
          type="text"
          placeholder="Owner phone no (optional)"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        {errors.phoneNo && <p className="error-message">{errors.phoneNo}</p>}

        <input
          className="bike-input"
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <textarea
          className="bike-description"
          placeholder="Description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <p className="error-message">{errors.description}</p>}

        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showRentPrice}
              onChange={(e) => setShowRentPrice(e.target.checked)}
            />
            <span>Rent item</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showSellPrice}
              onChange={(e) => setShowSellPrice(e.target.checked)}
            />
            <span>Sell item</span>
          </label>
        </div>

        {errors.checkbox && <p className="error-message">{errors.checkbox}</p>}

        {showRentPrice && (
          <div>
            <input
              type="text"
              className="bike-input"
              placeholder="Rent Price per Day"
              value={rentPrice}
              onChange={(e) => setRentPrice(e.target.value)}
            />
            {errors.rentPrice && <p className="error-message">{errors.rentPrice}</p>}
          </div>
        )}

        {showSellPrice && (
          <div>
            <input
              type="text"
              className="bike-input"
              placeholder="Selling Price"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
            />
            {errors.sellPrice && <p className="error-message">{errors.sellPrice}</p>}
          </div>
        )}

        <button type="submit" className="submit-button">
          List Your Bike
        </button>
      </form>

      {showThankYou && (
        <div className="thank-you-message">
          listing successful!
        </div>
      )}
    </div>
  );
};

export default ListBikeDataEnter;
