import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Message, Topic } from "./type";
import Topics from "./Topics";

function Community() {
  const initialTopics: Topic = {
    _id: "",
    name: "",
    icon: "",
    description: "",
  };

  const [topics, setTopics] = useState<Topic[]>([initialTopics]);
  const [activeTopic, setActiveTopic] = useState<Topic>(initialTopics);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: "Joseph M V",
      content: "Hey everyone! How's it going?",
      timestamp: new Date(Date.now() - 3600000),
      topic: "general",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && topics.length > 0) {
      const message: Message = {
        id: messages.length + 1,
        user: "You",
        content: newMessage,
        timestamp: new Date(),
        topic: activeTopic._id,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };
  const filteredMessages = messages.filter(
    (message) => message.topic === activeTopic._id
  );

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100  w-[80vw]">
      <div className="container mx-auto px-4 py-8  bg-white flex h-[700px] rounded-lg shadow-lg overflow-hidden ">
        {/* Main Chat Area */}
        <div className="mx-auto bg-gray-200 flex flex-col  w-[100%] rounded-md">
          {/* Topic Tabs */}
          <Topics
            topics={topics}
            setTopics={setTopics}
            setActiveTopic={setActiveTopic}
            activeTopic={activeTopic}
          />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.user === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] ${
                    message.user === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  } rounded-lg px-4 py-2`}
                >
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">{message.user}</p>
                    <span className="text-xs opacity-75">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p
                    className={`mt-1 ${
                      message.user === "You" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {/* Invisible div to auto-scroll to bottom */}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Message Input */}
          <form
            onSubmit={handleSendMessage}
            className=" p-4 border-t border-gray-200"
          >
            <div className="flex space-x-4 ">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={`Message in #${topics
                  .find((t) => t._id === activeTopic._id)
                  ?.name.toLowerCase()}`}
                className="text-white flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Community;
