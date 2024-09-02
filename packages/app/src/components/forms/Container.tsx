import { ChangeEvent, useEffect, useState } from 'react';
import L from 'leaflet';
import { BASEMAPS } from '../../utils/constants';
import html2canvas from 'html2canvas';
import figmaMessenger from '../../utils/figma';

export function FormContainer({
  initDimensions, onGenerate, map
} : {
  initDimensions: { width: number; height: number }; onGenerate: (g: boolean) => void; map?: L.Map;
}) {
  const [basemap, setBasemap] = useState(BASEMAPS[0]);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>(initDimensions);

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
  };

  function handleDimensionChange(e: ChangeEvent<HTMLInputElement>) {
    const { target: { name, value } } = e;
    if (['width', 'height'].includes(name) && value) {
      setDimensions((prev) => ({ ...prev, [name]: value }));
    }
  }

  console.log(dimensions);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='basemaps'>Basemaps</label>
        <select id='basemaps' onChange={handleChange}>
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='dimensions'>Dimensions</label>
          <div>
            <input
              id='dimensions-width'
              name='width'
              type='number'
              value={dimensions.width}
              onChange={handleDimensionChange}
            />
            <input
              id='dimensions-height'
              name='height'
              type='number'
              value={dimensions.height}
              onChange={handleDimensionChange}
            />
          </div>
      </div>
      <button onClick={handleGenerate}>Generate PNG</button>
    </div>
  );
}

export default FormContainer;
