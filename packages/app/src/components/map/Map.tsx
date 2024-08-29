import { ReactElement, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map({
  map, onMapUpdate, children,
} : {
  map?: L.Map; children?: ReactElement; onMapUpdate: (m: L.Map | undefined) => void
}) {
  const handleMapUpdate = (m: L.Map | undefined) => {
    onMapUpdate(m);
  };

  useEffect(() => {
    if (!map) {
      const map = L.map('map', {
        zoom: 10,
        center: [29.7, -95.3]
      });

      handleMapUpdate(map);
    }
    return () => {
      handleMapUpdate(undefined);
    }
  }, []);

  return (
    <div id="map" style={{ height: '100%', width: '100%' }}>
      {children}
    </div>
  );
}

export default Map;
