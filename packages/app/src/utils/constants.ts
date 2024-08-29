import L from 'leaflet';

export const BASEMAPS = [
  {
    key: 'standard',
    label: 'Standard',
    layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      crossOrigin: true,
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    })
  },
  {
    key: 'humanitarian',
    label: 'Humanitarian',
    layer: L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      crossOrigin: true,
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
    })
  },
  {
    key: 'topo',
    label: 'Topo',
    layer: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      crossOrigin: true,
      maxZoom: 19,
      attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
    })
  },
  {
    key: 'carto-positron',
    label: 'Carto Positron',
    layer: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
      crossOrigin: true,
      attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
      minZoom: 0
    })
  },
  {
    key: 'carto-voyager',
    label: 'Carto Voyager',
    layer: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
      crossOrigin: true,
      attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
      minZoom: 0
    })
  },
  {
    key: 'carto-dark',
    label: 'Carto Dark',
    layer: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
      crossOrigin: true,
      attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
      minZoom: 0
    })
  },
];
