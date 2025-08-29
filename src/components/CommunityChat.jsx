import { useState } from "react";
import { Send } from "lucide-react";

const CommunityChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Admin", text: "Welcome to our NGO Community Chat! 💬" },
    { id: 2, user: "Rahul", text: "Hi everyone! Glad to be here." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMsg = {
      id: Date.now(),
      user: "You",
      text: input,
    };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl my-5 h-[calc(100vh-100px)] flex flex-col">
      {/* Header */}
      <div className="bg-blue-500 text-white text-lg font-semibold py-3 px-5 rounded-t-2xl">
        🌍 Community Chat
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.user === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl shadow text-sm max-w-xs ${
                msg.user === "You"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-900 rounded-bl-none"
              }`}
            >
              <span className="font-semibold">{msg.user}: </span>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl shadow"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default CommunityChat;
