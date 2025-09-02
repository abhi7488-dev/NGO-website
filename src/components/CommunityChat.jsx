import { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical, 
  Users, 
  Search, 
  Video,
  Phone,
  Menu,
  ThumbsUp,
  Heart,
  Laugh,
  AlertCircle,
  Pin
} from "lucide-react";

const CommunityChat = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      user: "Admin", 
      text: "Welcome to our NGO Community Chat! 💬", 
      time: "10:00 AM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      role: "Admin",
      isPinned: true
    },
    { 
      id: 2, 
      user: "Rahul", 
      text: "Hi everyone! Glad to be here.", 
      time: "10:05 AM",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      reactions: { thumbsUp: 2 }
    },
    { 
      id: 3, 
      user: "Priya", 
      text: "This is such a great initiative! How can I volunteer?", 
      time: "10:15 AM",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
      reactions: { heart: 3, laugh: 1 }
    },
  ]);
  const [input, setInput] = useState("");
  const [onlineUsers, setOnlineUsers] = useState(12);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMsg = {
      id: Date.now(),
      user: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
    };
    setMessages([...messages, newMsg]);
    setInput("");
    
    // Simulate someone typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        user: "Volunteer",
        text: "Thanks for your message! We'll get back to you soon.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=40&h=40&fit=crop&crop=face"
      }]);
    }, 2000);
  };

  const addReaction = (messageId, reaction) => {
    setMessages(messages.map(msg => {
      if (msg.id === messageId) {
        const currentReactions = msg.reactions || {};
        const currentCount = currentReactions[reaction] || 0;
        return {
          ...msg,
          reactions: { ...currentReactions, [reaction]: currentCount + 1 }
        };
      }
      return msg;
    }));
  };

  const members = [
    { name: "Admin", role: "Admin", status: "online", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
    { name: "Rahul", role: "Volunteer", status: "online", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
    { name: "Priya", role: "Donor", status: "online", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face" },
    { name: "Amit", role: "Volunteer", status: "away", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=40&h=40&fit=crop&crop=face" },
    { name: "Sneha", role: "Beneficiary", status: "offline", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face" },
    { name: "Vikram", role: "Partner", status: "online", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face" },
  ];

  const reactionIcons = {
    thumbsUp: <ThumbsUp size={14} />,
    heart: <Heart size={14} />,
    laugh: <Laugh size={14} />
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl my-5 h-[calc(100vh-50px)] flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-gradient-to-b from-blue-50 to-gray-50 rounded-l-2xl border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">NGO Connect</h1>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu size={20} />
            </button>
          </div>
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages or members..."
              className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white">
          <button 
            className={`flex-1 py-3 text-sm font-medium ${activeTab === "chat" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("chat")}
          >
            Conversations
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium ${activeTab === "members" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("members")}
          >
            Members
          </button>
        </div>
        
        {/* Content based on active tab */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "chat" ? (
            <div className="p-2">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 mb-2">
                <div className="flex items-start">
                  <Pin size={16} className="text-blue-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm font-medium">Welcome to our community!</p>
                    <p className="text-xs text-gray-600">Important announcements will be pinned here</p>
                  </div>
                </div>
              </div>
              
              {/* Conversation list would go here */}
              <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                      alt="Community" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Community Chat</p>
                      <span className="text-xs text-gray-500">10:15 AM</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">Priya: This is such a great initiative!</p>
                    <div className="flex items-center mt-1">
                      <div className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">12 online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-2">
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Members ({members.length})</h3>
                {members.map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        member.status === "online" ? "bg-green-500" : 
                        member.status === "away" ? "bg-yellow-500" : "bg-gray-400"
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{member.name}</p>
                        {member.role === "Admin" && (
                          <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">Admin</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-3 px-5 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative mr-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                alt="Community" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="font-semibold">Community Chat</h1>
              <p className="text-xs text-gray-500">{onlineUsers} members online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full">
              <Phone size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full">
              <Video size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-blue-50">
          <div className="text-center mb-4">
            <span className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full shadow-sm">Today</span>
          </div>
          
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex mb-4 ${msg.user === "You" ? "justify-end" : "justify-start"}`}
            >
              {msg.user !== "You" && (
                <img 
                  src={msg.avatar} 
                  alt={msg.user} 
                  className="w-8 h-8 rounded-full object-cover self-end mr-2"
                />
              )}
              <div className={`max-w-md ${msg.user === "You" ? "ml-2" : "mr-2"}`}>
                {msg.user !== "You" && (
                  <span className="text-xs font-medium text-gray-700 ml-2 flex items-center gap-1">
                    {msg.user}
                    {msg.role && (
                      <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                        {msg.role}
                      </span>
                    )}
                  </span>
                )}
                <div
                  className={`px-4 py-2 rounded-2xl shadow-sm text-sm relative group ${
                    msg.user === "You"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-900 border border-gray-100 rounded-bl-none"
                  }`}
                >
                  {msg.isPinned && (
                    <div className="absolute -top-2 -left-2 bg-blue-100 text-blue-800 p-1 rounded-full">
                      <Pin size={12} />
                    </div>
                  )}
                  {msg.text}
                  {msg.reactions && Object.keys(msg.reactions).length > 0 && (
                    <div className={`flex mt-2 ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
                      <div className="flex bg-white rounded-full border border-gray-200 px-1 py-0.5 gap-1">
                        {Object.entries(msg.reactions).map(([reaction, count]) => (
                          <div key={reaction} className="flex items-center text-xs text-gray-600">
                            {reactionIcons[reaction]} {count}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-xs text-gray-500 ${msg.user === "You" ? "text-right" : "text-left"}`}>
                    {msg.time}
                  </span>
                  {msg.user !== "You" && (
                    <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        className="text-gray-400 hover:text-blue-500 ml-2"
                        onClick={() => addReaction(msg.id, 'thumbsUp')}
                      >
                        <ThumbsUp size={14} />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-red-500 ml-2"
                        onClick={() => addReaction(msg.id, 'heart')}
                      >
                        <Heart size={14} />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-yellow-500 ml-2"
                        onClick={() => addReaction(msg.id, 'laugh')}
                      >
                        <Laugh size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {msg.user === "You" && (
                <img 
                  src={msg.avatar} 
                  alt={msg.user} 
                  className="w-8 h-8 rounded-full object-cover self-end ml-2"
                />
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex mb-4 justify-start">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=40&h=40&fit=crop&crop=face" 
                alt="Typing" 
                className="w-8 h-8 rounded-full object-cover self-end mr-2"
              />
              <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-none">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce mr-1"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce mr-1 delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t p-4 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100">
              <Paperclip size={18} />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100">
              <Smile size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={input.trim() === ""}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 text-white p-3 rounded-xl shadow transition-all transform hover:scale-105 disabled:scale-100"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;
