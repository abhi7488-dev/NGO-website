import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons
const createCustomIcon = (color, emoji) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
};

const StudentGamingPlatform = () => {
  const [game, setGame] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [location, setLocation] = useState(null);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [nearbyPlayers, setNearbyPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [activeTab, setActiveTab] = useState('map');
  const [map, setMap] = useState(null);
  const chatContainerRef = useRef(null);

  // Available games for selection
  const popularGames = [
    'Fortnite', 'Minecraft', 'League of Legends', 'Valorant', 
    'Call of Duty: Warzone', 'Apex Legends', 'Rocket League', 
    'Among Us', 'Genshin Impact', 'Dota 2'
  ];

  // Sample location data for demonstration
  const locationDatabase = {
    "10001": { lat: 40.7505, lng: -73.9964, name: "New York, NY" },
    "90001": { lat: 33.9740, lng: -118.2488, name: "Los Angeles, CA" },
    "60601": { lat: 41.8855, lng: -87.6215, name: "Chicago, IL" },
    "77001": { lat: 29.7805, lng: -95.3863, name: "Houston, TX" },
    "85001": { lat: 33.4484, lng: -112.0740, name: "Phoenix, AZ" },
    "98101": { lat: 47.6062, lng: -122.3321, name: "Seattle, WA" },
    "02101": { lat: 42.3601, lng: -71.0589, name: "Boston, MA" },
    "20001": { lat: 38.9072, lng: -77.0369, name: "Washington, DC" },
    "94101": { lat: 37.7749, lng: -122.4194, name: "San Francisco, CA" },
    "33101": { lat: 25.7617, lng: -80.1918, name: "Miami, FL" },
  };

  // Simulate getting user location
  useEffect(() => {
    if (useCurrentLocation && navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            name: "Your Current Location"
          });
          setLocationError('');
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocationError('Unable to retrieve your location. Please enter manually.');
          setIsLoading(false);
        }
      );
    }
  }, [useCurrentLocation]);

  // Handle location input
  const handleLocationInput = () => {
    if (!locationInput.trim()) {
      setLocationError('Please enter a location or pincode');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to geocode the location
    setTimeout(() => {
      // Check if input is a pincode from our database
      if (locationDatabase[locationInput]) {
        setLocation(locationDatabase[locationInput]);
        setLocationError('');
      } else {
        // For demo purposes, generate a random location near a known city
        const knownCities = Object.values(locationDatabase);
        const randomCity = knownCities[Math.floor(Math.random() * knownCities.length)];
        
        setLocation({
          lat: randomCity.lat + (Math.random() - 0.5) * 0.1,
          lng: randomCity.lng + (Math.random() - 0.5) * 0.1,
          name: `Area near ${randomCity.name}`
        });
        setLocationError('');
      }
      setIsLoading(false);
    }, 1000);
  };

  // Simulate finding nearby players
  const findNearbyPlayers = () => {
    if (!game || !playerName) {
      setLocationError('Please enter your name and select a game');
      return;
    }

    if (!location) {
      setLocationError('Please set your location first');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Generate mock nearby players
      const mockPlayers = [
        {
          id: 1,
          name: 'GameMaster42',
          game: game,
          location: {
            lat: location.lat + (Math.random() - 0.5) * 0.02,
            lng: location.lng + (Math.random() - 0.5) * 0.02
          },
          distance: (Math.random() * 5).toFixed(1),
          avatar: '🎮',
          color: '#3B82F6'
        },
        {
          id: 2,
          name: 'ProPlayer99',
          game: game,
          location: {
            lat: location.lat + (Math.random() - 0.5) * 0.02,
            lng: location.lng + (Math.random() - 0.5) * 0.02
          },
          distance: (Math.random() * 5).toFixed(1),
          avatar: '🦸',
          color: '#10B981'
        },
        {
          id: 3,
          name: 'NoobSlayer',
          game: game,
          location: {
            lat: location.lat + (Math.random() - 0.5) * 0.02,
            lng: location.lng + (Math.random() - 0.5) * 0.02
          },
          distance: (Math.random() * 5).toFixed(1),
          avatar: '⚔️',
          color: '#EF4444'
        },
        {
          id: 4,
          name: 'DarkKnight',
          game: game,
          location: {
            lat: location.lat + (Math.random() - 0.5) * 0.02,
            lng: location.lng + (Math.random() - 0.5) * 0.02
          },
          distance: (Math.random() * 5).toFixed(1),
          avatar: '🦇',
          color: '#8B5CF6'
        }
      ];
      
      setNearbyPlayers(mockPlayers);
      setIsConnected(true);
      setIsLoading(false);
    }, 1500);
  };

  // Connect to a player
  const connectToPlayer = (player) => {
    setSelectedPlayer(player);
    setActiveTab('chat');
    // Initialize with some sample messages
    setMessages([
      { sender: player.name, text: `Hey there! I also play ${player.game}!`, time: '10:30 AM', avatar: player.avatar },
      { sender: 'You', text: 'Nice to meet a fellow player!', time: '10:32 AM', avatar: '😊' },
      { sender: player.name, text: 'Want to team up sometime?', time: '10:33 AM', avatar: player.avatar }
    ]);
  };

  // Send a message
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      sender: 'You',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: '😊'
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
    
    // Auto-scroll to bottom of chat
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Handle pressing Enter to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Fly to location when it changes
  useEffect(() => {
    if (map && location) {
      map.flyTo([location.lat, location.lng], 13, {
        duration: 2
      });
    }
  }, [location, map]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-black text-white p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Student Gaming Connect</h1>
          <p className="text-indigo-100">Find nearby players and connect through gaming</p>
        </div>

        <div className="p-6">
          {!isConnected ? (
            <div className="flex justify-center items-center">
              <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Enter Your Gaming Details</h2>
                
                <div className="mb-5">
                  <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Player Name:
                  </label>
                  <input
                    type="text"
                    id="playerName"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter your gaming username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="gameSelect" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Your Game:
                  </label>
                  <select
                    id="gameSelect"
                    value={game}
                    onChange={(e) => setGame(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">-- Select a Game --</option>
                    {popularGames.map((gameName) => (
                      <option key={gameName} value={gameName}>
                        {gameName}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Location Input Section */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Set Your Location</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="useCurrentLocation"
                        checked={useCurrentLocation}
                        onChange={(e) => setUseCurrentLocation(e.target.checked)}
                        className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                      />
                      <label htmlFor="useCurrentLocation" className="ml-2 block text-sm text-gray-700">
                        Use my current location
                      </label>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-3">- or -</div>
                    
                    <div>
                      <label htmlFor="locationInput" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter location or pincode:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          id="locationInput"
                          value={locationInput}
                          onChange={(e) => setLocationInput(e.target.value)}
                          placeholder="e.g. New York or 10001"
                          disabled={useCurrentLocation}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                        />
                        <button
                          onClick={handleLocationInput}
                          disabled={useCurrentLocation}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Set
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {locationError && (
                    <div className="text-red-500 text-sm mt-2">{locationError}</div>
                  )}
                  
                  {location && (
                    <div className="text-sm text-green-600 mt-2">
                      Location set: {location.name} ({location.lat.toFixed(4)}, {location.lng.toFixed(4)})
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={findNearbyPlayers}
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all
                    ${isLoading 
                      ? 'bg-gray-800 cursor-not-allowed' 
                      : 'bg-black hover:bg-gray-800 hover:shadow-md'}`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching for Players...
                    </span>
                  ) : 'Find Nearby Players'}
                </button>
                
                <div className="text-xs text-gray-500 mt-4 text-center">
                  Tip: Try pincodes like 10001 (NY), 90001 (LA), 60601 (Chicago) for demo
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
              {/* Left Sidebar - Players List */}
              <div className="lg:w-1/4 bg-white rounded-xl shadow-md p-4 overflow-hidden flex flex-col">
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <span className="text-black font-medium">Your location:</span> {location.name}
                  <button 
                    onClick={() => setIsConnected(false)}
                    className="block text-sm text-gray-600 hover:text-gray-800 mt-1"
                  >
                    Change Location
                  </button>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Nearby Players</h3>
                <div className="overflow-y-auto flex-1">
                  {nearbyPlayers.map((player) => (
                    <div 
                      key={player.id} 
                      className={`p-3 rounded-lg mb-2 cursor-pointer transition-all flex items-center ${
                        selectedPlayer?.id === player.id 
                          ? 'bg-gray-100 border-l-4 border-gray-600' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => connectToPlayer(player)}
                    >
                      <span className="text-2xl mr-3">{player.avatar}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-gray-900">{player.name}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {player.distance} km
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">{player.game}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Main Content Area - Map and Chat */}
              <div className="lg:w-3/4 flex flex-col rounded-xl overflow-hidden shadow-md">
                {/* Tabs for Map/Chat */}
                <div className="flex border-b border-gray-200 bg-white">
                  <button
                    className={`px-4 py-3 font-medium text-sm ${activeTab === 'map' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('map')}
                  >
                    Map View
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm ${activeTab === 'chat' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('chat')}
                    disabled={!selectedPlayer}
                  >
                    {selectedPlayer ? `Chat with ${selectedPlayer.name}` : 'Select a player to chat'}
                  </button>
                </div>
                
                {/* Content based on active tab */}
                <div className="flex-1 bg-white">
                  {activeTab === 'map' ? (
                    <div className="h-full rounded-b-xl overflow-hidden">
                      {location && (
                        <MapContainer
                          center={[location.lat, location.lng]}
                          zoom={13}
                          style={{ height: '100%', width: '100%' }}
                          whenCreated={setMap}
                        >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                          />
                          
                          {/* User Marker */}
                          <Marker position={[location.lat, location.lng]} icon={createCustomIcon('#8B5CF6', '😊')}>
                            <Popup>
                              <div className="text-center">
                                <div className="font-bold">You ({playerName})</div>
                                <div className="text-sm text-gray-600">{location.name}</div>
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
                                  <div className="text-sm text-gray-600">{player.game}</div>
                                  <div className="text-xs text-gray-500">{player.distance} km away</div>
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
                  ) : (
                    <div className="h-full flex flex-col">
                      {/* Chat Header */}
                      <div className="bg-gray-700 p-4 text-white flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">{selectedPlayer?.avatar}</span>
                          <h3 className="text-lg font-semibold">Chat with {selectedPlayer?.name}</h3>
                        </div>
                        <span className="bg-gray-600 bg-opacity-20 px-3 py-1 rounded-full text-sm">
                          {selectedPlayer?.game}
                        </span>
                      </div>
                      
                      {/* Messages */}
                      <div 
                        ref={chatContainerRef}
                        className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50"
                      >
                        {messages.map((msg, index) => (
                          <div 
                            key={index} 
                            className={`flex max-w-xs md:max-w-md ${msg.sender === 'You' ? 'ml-auto' : 'mr-auto'}`}
                          >
                            {msg.sender !== 'You' && (
                              <span className="text-2xl mr-2">{msg.avatar}</span>
                            )}
                            <div className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
                              <div className="text-xs text-gray-500 mb-1">{msg.sender}</div>
                              <div className={`rounded-lg px-4 py-2 ${
                                msg.sender === 'You' 
                                  ? 'bg-gray-600 text-white rounded-br-none' 
                                  : 'bg-white border border-gray-200 rounded-bl-none'
                              }`}>
                                {msg.text}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                            </div>
                            {msg.sender === 'You' && (
                              <span className="text-2xl ml-2">{msg.avatar}</span>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Message Input */}
                      <div className="p-4 border-t border-gray-200 flex gap-2 bg-white">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        />
                        <button 
                          onClick={sendMessage}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentGamingPlatform;