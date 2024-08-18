import L from 'leaflet';
import Map from './Map';
import Marker from './layers/Marker';
import 'leaflet/dist/leaflet.css';

export function MapContainer({
  map, onMapUpdate,
} : {
  map?: L.Map; onMapUpdate: (m?: L.Map ) => void;
}) {

  return (
    <Map onMapUpdate={onMapUpdate}>
      {map && (
        <Marker map={map} />
      )}
    </Map>
  );
}

export default MapContainer;
