import { useEffect, useState } from 'react';
import L from 'leaflet';
import { BASEMAPS } from '../../utils/constants';

export function FormContainer({ map }: { map?: L.Map }) {
  const [basemapLayer, setBasemapLayer] = useState<L.TileLayer>(BASEMAPS[0].layer);

  useEffect(() => {
    if (!map) {
      return;
    }

    basemapLayer.addTo(map);
    return () => {
      basemapLayer.remove();
    }
  }, [map, basemapLayer]);

  return (
    <div>
      <label>Basemaps</label>
      {BASEMAPS.map(({ key, label, layer }) => (
        <button
          id={key}
          onClick={() => setBasemapLayer(layer)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FormContainer;
