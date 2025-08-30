import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// // Fix for default markers in react-leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// User Icon
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  iconSize: [35, 35],
});

// Sport-specific icons
const sportIcons = {
  Basketball: "🏀",
  Football: "⚽",
  Cricket: "🏏",
  Badminton: "🏸",
  Tennis: "🎾",
  Running: "🏃‍♂️"
};

const SportsBuddy = () => {
  const [sport, setSport] = useState("");
  const [chatPlayer, setChatPlayer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [activeTab, setActiveTab] = useState("find"); // "find" or "chat"

  // Dummy Players Data
  const players = [
    { 
      id: 1, 
      name: "Ravi", 
      sport: "Basketball", 
      lat: 28.6139, 
      lng: 77.209, 
      level: "Intermediate",
      availability: "Weekends",
      distance: "1.2 km",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    { 
      id: 2, 
      name: "Amit", 
      sport: "Football", 
      lat: 28.7041, 
      lng: 77.1025, 
      level: "Advanced",
      availability: "Evenings",
      distance: "0.8 km",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    { 
      id: 3, 
      name: "Neha", 
      sport: "Basketball", 
      lat: 28.5355, 
      lng: 77.391, 
      level: "Beginner",
      availability: "Weekdays",
      distance: "2.1 km",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    { 
      id: 4, 
      name: "Simran", 
      sport: "Cricket", 
      lat: 28.4595, 
      lng: 77.0266, 
      level: "Intermediate",
      availability: "Mornings",
      distance: "3.5 km",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    { 
      id: 5, 
      name: "Raj", 
      sport: "Badminton", 
      lat: 28.6129, 
      lng: 77.229, 
      level: "Advanced",
      availability: "Afternoons",
      distance: "0.5 km",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    { 
      id: 6, 
      name: "Priya", 
      sport: "Tennis", 
      lat: 28.6039, 
      lng: 77.249, 
      level: "Intermediate",
      availability: "Weekends",
      distance: "1.8 km",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
  ];

  const filteredPlayers = sport
    ? players.filter((p) => p.sport.toLowerCase() === sport.toLowerCase())
    : players;

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const newMsg = { sender: "You", text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMsg]);
    setNewMessage("");
    
    // Simulate reply after a short delay
    setTimeout(() => {
      const replies = [
        "Hey there! I'd love to play sometime.",
        "I'm available this weekend if you're free?",
        "That sounds great! What time were you thinking?",
        "I know a good place we could meet up.",
        "I've been looking for someone to play with!"
      ];
      const replyMsg = { 
        sender: chatPlayer.name, 
        text: replies[Math.floor(Math.random() * replies.length)], 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages(prev => [...prev, replyMsg]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gry-200 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            🎮 Sports Buddy Finder
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with sports enthusiasts near you. Find your perfect match for basketball, football, cricket and more!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Form & Results */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex border-b border-gray-200 mb-6">
              <button 
                className={`flex-1 py-2 font-medium ${activeTab === "find" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("find")}
              >
                Find Players
              </button>
              <button 
                className={`flex-1 py-2 font-medium ${activeTab === "chat" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => setActiveTab("chat")}
              >
                Messages
              </button>
            </div>

            {activeTab === "find" ? (
              <>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Find Your Sports Buddy
                </h2>
                <form className="flex flex-col gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
                    <input
                      type="text"
                      value={userLocation}
                      onChange={(e) => setUserLocation(e.target.value)}
                      placeholder="Enter your location"
                      className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sport Interest</label>
                    <select
                      value={sport}
                      onChange={(e) => setSport(e.target.value)}
                      className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    >
                      <option value="">-- Select Sport --</option>
                      <option value="Basketball">Basketball 🏀</option>
                      <option value="Football">Football ⚽</option>
                      <option value="Cricket">Cricket 🏏</option>
                      <option value="Badminton">Badminton 🏸</option>
                      <option value="Tennis">Tennis 🎾</option>
                      <option value="Running">Running 🏃‍♂️</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                  >
                    Find Matches
                  </button>
                </form>

                {/* Match List */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">🎯</span>
                    {sport ? `${sport} Players` : "Nearby Players"}
                    <span className="ml-2 text-sm font-normal text-gray-500">({filteredPlayers.length})</span>
                  </h3>
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {filteredPlayers.map((player) => (
                      <div key={player.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                        <div className="flex items-start">
                          <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full object-cover mr-3" />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-gray-800">{player.name}</h4>
                              <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
                                {player.distance}
                              </span>
                            </div>
                            <div className="flex items-center mt-1">
                              <span className="text-lg mr-1">{sportIcons[player.sport]}</span>
                              <span className="text-sm text-gray-600">{player.sport}</span>
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-sm text-gray-600">{player.level}</span>
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              {player.availability}
                            </div>
                          </div>
                        </div>
                        <button
                          className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition flex items-center justify-center"
                          onClick={() => {
                            setChatPlayer(player);
                            setMessages([]);
                            setActiveTab("chat");
                          }}
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                          </svg>
                          Connect
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="h-96 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Your Conversations
                </h3>
                <div className="flex-1 overflow-y-auto space-y-3">
                  {players.slice(0, 4).map(player => (
                    <div 
                      key={player.id} 
                      className={`p-3 rounded-xl cursor-pointer transition-all ${chatPlayer?.id === player.id ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                      onClick={() => {
                        setChatPlayer(player);
                        setMessages([]);
                      }}
                    >
                      <div className="flex items-center">
                        <img src={player.image} alt={player.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{player.name}</h4>
                          <p className="text-sm text-gray-500 truncate">Last message preview...</p>
                        </div>
                        <span className="text-xs text-gray-400">2h ago</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Map + Chat */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Nearby Players
              </h2>
              <div className="ml-auto flex items-center">
                <span className="text-sm text-gray-500 mr-2">New Delhi, India</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="h-80 w-full">
              <MapContainer
                center={[28.6139, 77.209]}
                zoom={11}
                scrollWheelZoom={true}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {filteredPlayers.map((player) => (
                  <Marker
                    key={player.id}
                    position={[player.lat, player.lng]}
                    icon={userIcon}
                  >
                    <Popup>
                      <div className="p-2">
                        <div className="flex items-center mb-2">
                          <img src={player.image} alt={player.name} className="w-10 h-10 rounded-full object-cover mr-2" />
                          <div>
                            <strong>{player.name}</strong>
                            <div className="flex items-center">
                              <span className="mr-1">{sportIcons[player.sport]}</span>
                              <span>{player.sport}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">Level: {player.level}</p>
                        <p className="text-sm">Available: {player.availability}</p>
                        <button
                          className="w-full mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
                          onClick={() => {
                            setChatPlayer(player);
                            setMessages([]);
                            setActiveTab("chat");
                          }}
                        >
                          Connect
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Chat Below Map */}
            {chatPlayer ? (
              <div className="border-t border-gray-200 p-4 h-80 flex flex-col">
                <div className="flex items-center mb-4">
                  <img src={chatPlayer.image} alt={chatPlayer.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Chat with {chatPlayer.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="mr-1">{sportIcons[chatPlayer.sport]}</span>
                        {chatPlayer.sport}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {chatPlayer.distance} away
                      </span>
                    </div>
                  </div>
                  <button 
                    className="ml-auto text-gray-400 hover:text-gray-600"
                    onClick={() => setChatPlayer(null)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-lg mb-3 flex flex-col space-y-3">
                  {messages.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center flex-col text-gray-400">
                      <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                      <p>No messages yet. Start the conversation!</p>
                    </div>
                  ) : (
                    messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-xs rounded-2xl px-4 py-2 ${msg.sender === "You" ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-200 text-gray-800 rounded-bl-none"}`}>
                          <p>{msg.text}</p>
                          <div className={`text-xs mt-1 ${msg.sender === "You" ? "text-blue-200" : "text-gray-500"}`}>
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={newMessage.trim() === ""}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-80 flex items-center justify-center flex-col p-4 text-center text-gray-500">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <h3 className="text-lg font-medium text-gray-600 mb-1">No conversation selected</h3>
                <p className="text-sm">Select a player from the list to start chatting</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsBuddy;