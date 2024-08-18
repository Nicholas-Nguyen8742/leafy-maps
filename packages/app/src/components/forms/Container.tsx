import { ChangeEvent, useEffect, useState } from 'react';
import L from 'leaflet';
import { BASEMAPS } from '../../utils/constants';

export function FormContainer({ map }: { map?: L.Map }) {
  const [basemap, setBasemap] = useState(BASEMAPS[0]);

  useEffect(() => {
    if (!map) {
      return;
    }

    basemap.layer.addTo(map);
    return () => {
      basemap.layer.remove();
    }
  }, [map, basemap]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const foundBasemap = BASEMAPS.find((b) => b.key === e.target.value);
    if (foundBasemap) {
      setBasemap(foundBasemap);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="basemaps">Basemaps</label>
      <select id="basemaps" onChange={handleChange}>
        {BASEMAPS.map(({ key, label }) => (
          <option
            id={key}
            value={key}
            selected={basemap.key === key}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormContainer;
