import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Default user icon
const defaultIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  iconSize: [35, 35],
});

// Highlighted (matching sport) icon
const highlightIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
  iconSize: [40, 40],
});

const SportsBuddy = () => {
  const [sport, setSport] = useState("");
  const [userLocation, setUserLocation] = useState([28.6139, 77.209]); // default Delhi
  const [players] = useState([
    { id: 1, name: "Ravi", sport: "Basketball", lat: 28.6139, lng: 77.209 },
    { id: 2, name: "Amit", sport: "Football", lat: 28.7041, lng: 77.1025 },
    { id: 3, name: "Neha", sport: "Basketball", lat: 28.5355, lng: 77.391 },
    { id: 4, name: "Sonia", sport: "Cricket", lat: 28.4595, lng: 77.0266 },
  ]);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  return (
    <div className="max-w-[1180px] mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🏀 Find Sports Buddies Near You
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Form Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            🎯 Choose Your Sport
          </h2>
          <select
            className="w-full border rounded-lg p-3 mb-4"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          >
            <option value="">-- Select Sport --</option>
            <option value="Basketball">Basketball</option>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Badminton">Badminton</option>
          </select>

          <h3 className="text-lg font-semibold text-gray-600 mb-3">
            👥 Nearby Players
          </h3>
          <div className="space-y-3 max-h-[250px] overflow-y-auto">
            {players
              .filter((p) =>
                sport ? p.sport.toLowerCase() === sport.toLowerCase() : true
              )
              .map((player) => (
                <div
                  key={player.id}
                  className="p-3 border rounded-lg hover:bg-blue-50 transition"
                >
                  <p className="font-medium">{player.name}</p>
                  <p className="text-sm text-gray-500">Sport: {player.sport}</p>
                  <button className="mt-2 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg">
                    Connect
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Right Map Section */}
        <div className="h-[500px] w-full shadow-lg rounded-2xl overflow-hidden">
          <MapContainer
            center={userLocation}
            zoom={11}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* User’s own location */}
            <Marker position={userLocation} icon={defaultIcon}>
              <Popup>
                <strong>You are here</strong>
              </Popup>
            </Marker>

            <Circle center={userLocation} radius={2000} color="blue" />

            {/* Other players */}
            {players.map((player) => (
              <Marker
                key={player.id}
                position={[player.lat, player.lng]}
                icon={
                  sport &&
                  player.sport.toLowerCase() === sport.toLowerCase()
                    ? highlightIcon
                    : defaultIcon
                }
              >
                <Popup>
                  <strong>{player.name}</strong> <br />
                  Sport: {player.sport} <br />
                  <button className="bg-green-500 text-white px-2 py-1 rounded mt-2">
                    Connect
                  </button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SportsBuddy;
