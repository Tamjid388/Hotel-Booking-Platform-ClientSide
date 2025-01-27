import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const HotelMap = () => {
  const position = [23.8103, 90.4125];
  return (
    <div>
       <div className="w-full h-56 md:h-96">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          {/* Tile layer from OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker for the hotel location */}
          <Marker position={position}>
            <Popup>
              Kanam Homes, Holding No. 23, Ward No. 3, Hospital Road, Nalchity,
              Jhalokati, Bangladesh.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}
