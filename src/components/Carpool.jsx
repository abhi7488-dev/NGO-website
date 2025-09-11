import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom icons
const createCustomIcon = (color, emoji) => {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color: ${color}; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
};

const StudentGamingPlatform = () => {
  const [game, setGame] = useState("Basketball");
  const [playerName, setPlayerName] = useState("Player1");
  const [location, setLocation] = useState(null);
  const [nearbyPlayers, setNearbyPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isConnected, setIsConnected] = useState(true);
  const [activeTab, setActiveTab] = useState("map");
  const [map, setMap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [locationError, setLocationError] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [showPreferences, setShowPreferences] = useState(true);
  const chatContainerRef = useRef(null);

  // Preferences state
  const [preferences, setPreferences] = useState({
    gender: "any",
    grade: "any",
    radius: 5,
  });

  // Available games for selection
  const popularGames = [
    "Basketball",
    "Football",
    "Cricket",
    "Tennis",
    "Badminton",
  ];

  // Grades options
  const grades = [
    "any",
    "Freshman",
    "Sophomore",
    "Junior",
    "Senior",
    "Graduate",
  ];

  // Sample location data for demonstration
  const locationDatabase = {
    10001: { lat: 40.7505, lng: -73.9964, name: "New York, NY" },
    90001: { lat: 33.974, lng: -118.2488, name: "Los Angeles, CA" },
    60601: { lat: 41.8855, lng: -87.6215, name: "Chicago, IL" },
    77001: { lat: 29.7805, lng: -95.3863, name: "Houston, TX" },
    85001: { lat: 33.4484, lng: -112.074, name: "Phoenix, AZ" },
    98101: { lat: 47.6062, lng: -122.3321, name: "Seattle, WA" },
    "02101": { lat: 42.3601, lng: -71.0589, name: "Boston, MA" },
    20001: { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
    94101: { lat: 37.7749, lng: -122.4194, name: "San Francisco, CA" },
    33101: { lat: 25.7617, lng: -80.1918, name: "Miami, FL" },
  };

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            lat: latitude,
            lng: longitude,
            name: "Your Current Location",
          });
          setLocationError("");
          setIsLoading(false);
          generateNearbyPlayers(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError(
            "Unable to retrieve your location. Using default location."
          );
          // Fallback to default location
          const defaultLocation = locationDatabase["10001"];
          setLocation(defaultLocation);
          setIsLoading(false);
          generateNearbyPlayers(defaultLocation.lat, defaultLocation.lng);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      setLocationError(
        "Geolocation is not supported by this browser. Using default location."
      );
      const defaultLocation = locationDatabase["10001"];
      setLocation(defaultLocation);
      setIsLoading(false);
      generateNearbyPlayers(defaultLocation.lat, defaultLocation.lng);
    }
  };

  // Generate mock nearby players based on user's location and preferences
  const generateNearbyPlayers = (lat, lng) => {
    const mockPlayers = [
      {
        id: 1,
        name: "GameMaster42",
        game: "Basketball",
        location: {
          lat: lat + (Math.random() - 0.5) * 0.02,
          lng: lng + (Math.random() - 0.5) * 0.02,
        },
        distance: (Math.random() * preferences.radius).toFixed(1),
        avatar: "🎮",
        color: "#3B82F6",
        gender: "male",
        grade: "Senior",
      },
      {
        id: 2,
        name: "ProPlayer99",
        game: "Basketball",
        location: {
          lat: lat + (Math.random() - 0.5) * 0.02,
          lng: lng + (Math.random() - 0.5) * 0.02,
        },
        distance: (Math.random() * preferences.radius).toFixed(1),
        avatar: "🦸",
        color: "#10B981",
        gender: "male",
        grade: "Junior",
      },
      {
        id: 3,
        name: "NoobSlayer",
        game: "Football",
        location: {
          lat: lat + (Math.random() - 0.5) * 0.02,
          lng: lng + (Math.random() - 0.5) * 0.02,
        },
        distance: (Math.random() * preferences.radius).toFixed(1),
        avatar: "⚔️",
        color: "#EF4444",
        gender: "female",
        grade: "Sophomore",
      },
      {
        id: 4,
        name: "DarkKnight",
        game: "Tennis",
        location: {
          lat: lat + (Math.random() - 0.5) * 0.02,
          lng: lng + (Math.random() - 0.5) * 0.02,
        },
        distance: (Math.random() * preferences.radius).toFixed(1),
        avatar: "🦇",
        color: "#8B5CF6",
        gender: "female",
        grade: "Freshman",
      },
      {
        id: 5,
        name: "QueenGamer",
        game: "Badminton",
        location: {
          lat: lat + (Math.random() - 0.5) * 0.02,
          lng: lng + (Math.random() - 0.5) * 0.02,
        },
        distance: (Math.random() * preferences.radius).toFixed(1),
        avatar: "👑",
        color: "#EC4899",
        gender: "female",
        grade: "Graduate",
      },
    ];

    // Filter players based on preferences
    let filteredPlayers = mockPlayers;

    if (preferences.gender !== "any") {
      filteredPlayers = filteredPlayers.filter(
        (player) => player.gender === preferences.gender
      );
    }

    if (preferences.grade !== "any") {
      filteredPlayers = filteredPlayers.filter(
        (player) => player.grade === preferences.grade
      );
    }

    // Filter by radius
    filteredPlayers = filteredPlayers.filter(
      (player) => parseFloat(player.distance) <= preferences.radius
    );

    setNearbyPlayers(filteredPlayers);
  };

  // Initialize with current location
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Connect to a player
  const connectToPlayer = (player) => {
    setSelectedPlayer(player);
    // Initialize with some sample messages
    setMessages([
      {
        sender: player.name,
        text: `Hey there! I also play ${player.game}!`,
        time: "10:30 AM",
        avatar: player.avatar,
      },
      {
        sender: "You",
        text: "Nice to meet a fellow player!",
        time: "10:32 AM",
        avatar: "😊",
      },
      {
        sender: player.name,
        text: "Want to team up sometime?",
        time: "10:33 AM",
        avatar: player.avatar,
      },
    ]);
  };

  // Send a message
  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: "😊",
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Auto-scroll to bottom of chat
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }, 100);
    }
  };

  // Handle pressing Enter to send message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Fly to location when it changes
  useEffect(() => {
    if (map && location) {
      map.flyTo([location.lat, location.lng], 13, {
        duration: 2,
      });
    }
  }, [location, map]);

  // Refresh location and players
  const refreshLocation = () => {
    getCurrentLocation();
  };

  // Apply preferences and refresh players
  const applyPreferences = () => {
    if (location) {
      generateNearbyPlayers(location.lat, location.lng);
    }
  };

  // Start a call with the selected player
  const startCall = () => {
    setIsCalling(true);
    // Simulate call for 5 seconds
    setTimeout(() => {
      setIsCalling(false);
    }, 5000);
  };

  // End the call
  const endCall = () => {
    setIsCalling(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-white text-gray-800 p-4 text-center border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Student Gaming Connect
          </h1>
          <p className="text-gray-600">
            Find nearby players and connect through gaming
          </p>
        </div>

        <div className="p-3">
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <div className="text-center">
                <svg
                  className="animate-spin h-12 w-12 text-gray-600 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p className="mt-4 text-gray-600">Getting your location...</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Sidebar - Preferences and Players List */}
              <div className="lg:w-1/4 bg-white rounded-xl shadow-md p-4 overflow-hidden flex flex-col">
                {/* Preferences Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Preferences
                    </h3>
                    <button
                      onClick={() => setShowPreferences(!showPreferences)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {showPreferences && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Gender
                        </label>
                        <select
                          value={preferences.gender}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              gender: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                        >
                          <option value="any">Any Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Grade
                        </label>
                        <select
                          value={preferences.grade}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              grade: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                        >
                          {grades.map((grade) => (
                            <option key={grade} value={grade}>
                              {grade === "any" ? "Any Grade" : grade}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Search Radius: {preferences.radius} km
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="20"
                          value={preferences.radius}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              radius: parseInt(e.target.value),
                            })
                          }
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <button
                        onClick={applyPreferences}
                        className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      >
                        Apply Filters
                      </button>
                    </div>
                  )}
                </div>

                {/* Location Info */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-black font-medium">
                        Your location:
                      </span>
                      <div className="text-sm text-gray-600">
                        {location?.name || "Unknown"}
                      </div>
                    </div>
                    <button
                      onClick={refreshLocation}
                      className="text-gray-600 hover:text-gray-800 text-sm p-1"
                      title="Refresh location"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                  </div>
                  {locationError && (
                    <div className="text-red-500 text-xs mt-1">
                      {locationError}
                    </div>
                  )}
                </div>

                {/* Players List */}
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
                  Nearby Players ({nearbyPlayers.length})
                </h3>
                <div className="overflow-y-auto flex-1 max-h-80">
                  {nearbyPlayers.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No players found matching your preferences.
                      <button
                        onClick={() => setShowPreferences(true)}
                        className="block mt-2 text-purple-600 hover:text-purple-800 text-sm"
                      >
                        Adjust preferences
                      </button>
                    </div>
                  ) : (
                    nearbyPlayers.map((player) => (
                      <div
                        key={player.id}
                        className={`p-3 rounded-lg mb-2 cursor-pointer transition-all flex items-center ${
                          selectedPlayer?.id === player.id
                            ? "bg-gray-100 border-l-4 border-gray-600"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => connectToPlayer(player)}
                      >
                        <span className="text-2xl mr-3">{player.avatar}</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-gray-900">
                              {player.name}
                            </span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {player.distance} km
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {player.game}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {player.gender} • {player.grade}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Main Content Area - Map and Chat */}
              <div className="lg:w-3/4 flex flex-col gap-6">
                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-md h-96">
                  {location && (
                    <MapContainer
                      center={[location.lat, location.lng]}
                      zoom={13}
                      style={{ height: "100%", width: "100%" }}
                      whenCreated={setMap}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                      />

                      {/* User Marker */}
                      <Marker
                        position={[location.lat, location.lng]}
                        icon={createCustomIcon("#8B5CF6", "😊")}
                      >
                        <Popup>
                          <div className="text-center">
                            <div className="font-bold">You ({playerName})</div>
                            <div className="text-sm text-gray-600">
                              {location.name}
                            </div>
                          </div>
                        </Popup>
                      </Marker>

                      {/* Nearby Players Markers */}
                      {nearbyPlayers.map((player) => (
                        <Marker
                          key={player.id}
                          position={[player.location.lat, player.location.lng]}
                          icon={createCustomIcon(player.color, player.avatar)}
                          eventHandlers={{
                            click: () => connectToPlayer(player),
                          }}
                        >
                          <Popup>
                            <div className="text-center">
                              <div className="font-bold">{player.name}</div>
                              <div className="text-sm text-gray-600">
                                {player.game}
                              </div>
                              <div className="text-xs text-gray-500">
                                {player.distance} km away
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {player.gender} • {player.grade}
                              </div>
                              <button
                                className="mt-2 px-3 py-1 bg-gray-600 text-white rounded-lg text-sm hover:bg-gray-700"
                                onClick={() => connectToPlayer(player)}
                              >
                                Chat with {player.name}
                              </button>
                            </div>
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  )}
                </div>

                {/* Chat Box (Below Map) */}
                {selectedPlayer && (
                  <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    {/* Chat Header */}
                    <div className="bg-gray-700 p-3 text-white flex justify-between items-center rounded-t-xl">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">
                          {selectedPlayer.avatar}
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold">
                            Chat with {selectedPlayer.name}
                          </h3>
                          <span className="text-xs text-gray-200">
                            {selectedPlayer.game}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={startCall}
                          className="text-white p-1 rounded-full hover:bg-gray-600 transition-colors"
                          title="Call"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Messages */}
                    <div
                      ref={chatContainerRef}
                      className="h-70 p-3 overflow-y-auto flex flex-col gap-2 bg-gray-50"
                    >
                      {messages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex max-w-xs ${
                            msg.sender === "You" ? "ml-auto" : "mr-auto"
                          }`}
                        >
                          {msg.sender !== "You" && (
                            <span className="text-xl mr-1">{msg.avatar}</span>
                          )}
                          <div
                            className={`flex flex-col ${
                              msg.sender === "You" ? "items-end" : "items-start"
                            }`}
                          >
                            <div className="text-xs text-gray-500 mb-1">
                              {msg.sender}
                            </div>
                            <div
                              className={`rounded-lg px-3 py-2 text-sm ${
                                msg.sender === "You"
                                  ? "bg-gray-600 text-white rounded-br-none"
                                  : "bg-white border border-gray-200 rounded-bl-none"
                              }`}
                            >
                              {msg.text}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {msg.time}
                            </div>
                          </div>
                          {msg.sender === "You" && (
                            <span className="text-xl ml-1">{msg.avatar}</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-3 border-t border-gray-200 flex gap-2 bg-white rounded-b-xl">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent text-sm"
                      />
                      <button
                        onClick={sendMessage}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call Modal */}
      {isCalling && selectedPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <div className="text-4xl mb-4">{selectedPlayer.avatar}</div>
            <h3 className="text-xl font-semibold mb-2">
              Calling {selectedPlayer.name}
            </h3>
            <p className="text-gray-600 mb-6">Ringing...</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={endCall}
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentGamingPlatform;
