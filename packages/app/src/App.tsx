import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function App() {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'    }).addTo(map);

    // Adding a basic marker
    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup('A marker')
      .openPopup();
  }, []);

  return (
    <div id="map" style={{ height: '100%', width: '100%' }} />
  );
}

export default App;
