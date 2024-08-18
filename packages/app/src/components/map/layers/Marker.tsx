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
    const marker = L.marker([51.505, -0.091])
      .addTo(map)
      .bindPopup(new L.Popup({
        offset: new L.Point(12, 10),
        content: 'This is a marker',
      }));

    console.log('marker: ', marker);
  }, [map]);

  return <div />;
}

export default Marker;
