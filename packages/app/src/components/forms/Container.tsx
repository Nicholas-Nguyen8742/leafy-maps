import { ChangeEvent, useEffect, useState } from 'react';
import L from 'leaflet';
import { BASEMAPS } from '../../utils/constants';
import html2canvas from 'html2canvas';
import figmaMessenger from '../../utils/figma';

export function FormContainer({
  onGenerate, map
} : {
  onGenerate: (g: boolean) => void; map?: L.Map;
}) {
  const [basemap, setBasemap] = useState(BASEMAPS[0]);
  const [url, setUrl] = useState<string | null>(null);

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

  const handleDelay = async () => {
    try {
      if (!map) {
        throw new Error('No Map!');
      }

      const mapCanvas = map.getContainer();
      const overlayCanvas = await html2canvas(mapCanvas, { useCORS: true });
      const image = overlayCanvas.toDataURL('image/png', );
      setUrl(image);

      setTimeout(() => {
        figmaMessenger({
          type: 'INTERNAL_GENERATE_MAP',
          width: 544,
          height: 577,
          image: image,
        });
      }, 500)
    } catch (e) {
      console.error(e);
    } finally {
      onGenerate(false);
    }
  };

  const handleGenerate = async () => {
   onGenerate(true);
   await handleDelay();
  }

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
      <button onClick={handleGenerate}>Generate PNG</button>
      {url && (
        <p>{url}</p>
      )}
    </div>
  );
}

export default FormContainer;
