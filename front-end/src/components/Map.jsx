import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useRef } from 'react';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


const Map = () => {
    const [position, setPosition] = useState([-8.057958, -34.949519]);
    const markerRef = useRef(null);

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
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '600px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
                position={position}
                draggable={true}
                eventHandlers={eventHandlers}
                ref={markerRef}
            >
                <Popup>
                    Marcador \o/ <br />
                    Lat: {position[0].toFixed(6)}, Lng: {position[1].toFixed(6)}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;