import { useState } from 'react';
import L from 'leaflet';
import MapContainer from './components/map/Container';
import 'leaflet/dist/leaflet.css';
import FormContainer from './components/forms/Container';

export function App() {
  const [leafletMap, setLeafletMap] = useState<L.Map | undefined>();

  return (
    <main style={{ display: 'flex', height: '100%', width: '100%', overflow: 'hidden' }}>
      <div style={{ width: '75%' }}>
        <MapContainer map={leafletMap} onMapUpdate={setLeafletMap} />
      </div>
      <div style={{ width: '25%', overflowY: 'scroll', margin: '8px 8px 8px 16px' }}>
        <FormContainer map={leafletMap} />
      </div>
    </main>
  );
}

export default App;
