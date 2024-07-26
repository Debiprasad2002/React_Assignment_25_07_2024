import React, { useState } from 'react';
import '../styles/SearchForm.css';


const SearchForm = ({ setCoordinates }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (latitude && longitude) {
      setCoordinates({ latitude, longitude });
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div>
        <label>Latitude: </label>
        <input 
          type="number" 
          value={latitude} 
          onChange={(e) => setLatitude(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Longitude: </label>
        <input 
          type="number" 
          value={longitude} 
          onChange={(e) => setLongitude(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default SearchForm;
