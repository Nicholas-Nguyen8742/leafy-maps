import { ReactElement, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map({ onMapUpdate, children } : { children?: ReactElement; onMapUpdate: (m: L.Map | undefined) => void}) {
  const [leafletMap, setLeafletMap] = useState<L.Map | undefined>();

  const handleMapUpdate = (m: L.Map | undefined) => {
    onMapUpdate(m);
    setLeafletMap(m);
  };

  useEffect(() => {
    if (!leafletMap) {
      const map = L.map('map').setView([51.505, -0.09], 13);

      handleMapUpdate(map);
    }
    return () => {
      handleMapUpdate(undefined);
    }
  }, []);

  useEffect(() => {
    if (leafletMap) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" onclick="handleLeafletClick(event)">OpenStreetMap</a> contributors' })
        .addTo(leafletMap);
    }
  }, [leafletMap]);

  return (
    <div id="map" style={{ height: '100%', width: '100%' }}>
      {children}
    </div>
  );
}

export default Map;
