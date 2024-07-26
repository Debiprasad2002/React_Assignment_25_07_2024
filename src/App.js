import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import MapDisplay from './components/MapDisplay';
import SearchForm from './components/SearchForm';
import './styles/App.css';

const App = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 51.505, longitude: -0.09 });

  return (
    <div className="App">
      <h1>Weather and Map Application</h1>
      <SearchForm setCoordinates={setCoordinates} />
      <WeatherDisplay latitude={coordinates.latitude} longitude={coordinates.longitude} />
      <MapDisplay latitude={coordinates.latitude} longitude={coordinates.longitude} zoom={13} />
    </div>
  );
};

export default App;
