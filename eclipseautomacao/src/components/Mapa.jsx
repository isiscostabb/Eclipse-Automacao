
import './Mapa.css'

// Mapa
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// ícones
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Definir os ícones
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

    // Coordenadas
    const position = [-28.523971, -49.327133]
  
    return (
      <>
        <div className='mapa'>
          <MapContainer center={position} zoom={15} className='map'>
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