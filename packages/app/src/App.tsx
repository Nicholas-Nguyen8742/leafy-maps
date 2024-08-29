import { useState } from 'react';
import L from 'leaflet';
import MapContainer from './components/map/Container';
import FormContainer from './components/forms/Container';
import 'leaflet/dist/leaflet.css';
import './styles/App.css';

export function App() {
  const [leafletMap, setLeafletMap] = useState<L.Map | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main style={{ display: 'flex', height: '100%', width: '100%', overflow: 'hidden' }}>
    {isLoading ? (
      <span className="linear-progress">
        <span className="bar bar1" />
        <span className="bar bar2" />
      </span>
    ) : (
      <>
        <div style={{ width: '75%' }}>
          <MapContainer map={leafletMap} onMapUpdate={setLeafletMap} />
        </div><div style={{ width: '25%', overflowY: 'scroll', margin: '8px 8px 8px 16px' }}>
          <FormContainer map={leafletMap} onGenerate={setIsLoading} />
        </div>
      </>
    )}
    </main>
  );
}

export default App;
