// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import '../styles/MapDisplay.css';


// const LocationMarker = ({ setMarkerPosition }) => {
//   useMapEvents({
//     click(event) {
//       setMarkerPosition(event.latlng);
//     }
//   });

//   return null;
// };

// const MapDisplay = ({ latitude, longitude, zoom }) => {
//   const [markerPosition, setMarkerPosition] = useState([latitude, longitude]);

//   return (
//     <MapContainer center={markerPosition} zoom={zoom} className="map-display">
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={markerPosition} />
//       <LocationMarker setMarkerPosition={setMarkerPosition} />
//     </MapContainer>
//   );
// };

// export default MapDisplay;

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapDisplay.css';
import customMarkerIcon from '../components/—Pngtree—3d location icon clipart in_9095284.png'; // Adjust the path as needed

const LocationMarker = ({ setMarkerPosition }) => {
  useMapEvents({
    click(event) {
      setMarkerPosition(event.latlng);
    }
  });

  return null;
};

const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
});

const MapDisplay = ({ latitude, longitude, zoom }) => {
  const [markerPosition, setMarkerPosition] = useState([latitude, longitude]);

  return (
    <MapContainer center={markerPosition} zoom={zoom} className="map-display">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition} icon={customIcon} />
      <LocationMarker setMarkerPosition={setMarkerPosition} />
    </MapContainer>
  );
};

export default MapDisplay;
