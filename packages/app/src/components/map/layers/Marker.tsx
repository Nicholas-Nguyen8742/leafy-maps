import { useEffect } from 'react';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export function Marker({ map }: { map: L.Map; }) {
  useEffect(() => {
    L.marker([29.749907,  -95.358421])
      .addTo(map);
  }, [map]);

  return null;
}

export default Marker;
