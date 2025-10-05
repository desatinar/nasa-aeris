import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useRef } from 'react';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { getColorByAQI } from '../utils/getColorByAQI';
import { getAQILevel } from '../utils/getAQILevel';
import './Map.css';

// Fix para os ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


const Map = () => {
    const [position, setPosition] = useState([-8.057958, -34.949519]);
    const markerRef = useRef(null);

    const [airQualityData, setAirQualityData] = useState([
        { position: [-8.057958, -34.949519], aqi: 50, name: 'Recife Centro' },
        { position: [-8.067958, -34.959519], aqi: 150, name: 'Zona Norte' },
        { position: [-8.047958, -34.939519], aqi: 80, name: 'Boa Viagem' },
    ]);

    const eventHandlers = {
        dragend() {
            const marker = markerRef.current;
            if (marker != null) {
                const newPos = marker.getLatLng();
                setPosition([newPos.lat, newPos.lng]);
            }
        },
    };

    return (
        <div className="map-wrapper">
            <div className="map-search">
                <MapPin size={18} />
                <input type="text" placeholder="Buscar localização..." />
            </div>

            <MapContainer
                center={position}
                zoom={13}
                className="map-container"
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={position}
                    draggable={true}
                    eventHandlers={eventHandlers}
                    ref={markerRef}
                >
                    <Popup>
                        <div className="popup-content">
                            <strong>Sua Localização</strong>
                            <p>Lat: {position[0].toFixed(6)}, Lng: {position[1].toFixed(6)}</p>
                        </div>
                    </Popup>
                </Marker>

                {/* Círculos coloridos para cada ponto de medição de qualidade do ar */}
                {airQualityData.map((data, index) => (
                    <Circle
                        key={index}
                        center={data.position}
                        radius={2000}
                        pathOptions={{
                            color: getColorByAQI(data.aqi),
                            fillColor: getColorByAQI(data.aqi),
                            fillOpacity: 0.4,
                            weight: 2
                        }}
                    >
                        <Popup>
                            <div className="popup-content">
                                <strong>{data.name}</strong>
                                <p>AQI: {data.aqi}</p>
                                <p>Qualidade: {getAQILevel(data.aqi)}</p>
                            </div>
                        </Popup>
                    </Circle>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;