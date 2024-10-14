
import './Mapa.css'

// Mapa.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Importar os ícones no formato ESM
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Definir os ícones manualmente
const defaultIcon = new L.Icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Mapa() {

    // Coordenadas aproximadas do endereço
    const position = [-28.5161, -49.3233]
  
    return (
      <>
        {/* Mapa com a localização */}
        <div className='mapa'>
          <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={defaultIcon}>
              <Popup>
                Rua 26 de maio, 55 - Sala 01 <br /> Bairro da Figueira - Urussanga-SC
              </Popup>
            </Marker>
          </MapContainer>
        </div>  
      </>    
    )
  }
  
  export default Mapa