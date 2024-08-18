import { useState } from 'react';
import L from 'leaflet';
import { Map, Marker } from './components';
import 'leaflet/dist/leaflet.css';

export function App() {
  const [leafletMap, setLeafletMap] = useState<L.Map | undefined>();

  return (
    <Map onMapUpdate={setLeafletMap}>
      {leafletMap && (
        <Marker map={leafletMap} />
      )}
    </Map>
  );
}

export default App;
