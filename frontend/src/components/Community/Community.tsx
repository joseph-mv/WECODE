import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faComment,
  faCode,
  faBriefcase,
  faLanguage,
  faSitemap,
  faChalkboardTeacher,
  faLaptopCode,
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Message, Topic } from "./type";
import { axiosInstance } from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function Community() {
const navigate=useNavigate()

  const initialTopics: Topic[] = [
    {
      id: "general",
      name: "General",
      icon: <FontAwesomeIcon icon={faComment} />,
      description: "General discussion",
    },
    {
      id: "programming",
      name: "Programming",
      icon: <FontAwesomeIcon icon={faCode} />,
      description: "Coding and tech talk",
    },
    {
      id: "english-community",
      name: "English Community",
      icon: <FontAwesomeIcon icon={faLanguage} />,
      description: "Discuss and improve English skills",
    },
    {
      id: "data-structures-algorithms",
      name: "DS & Algo",
      icon: <FontAwesomeIcon icon={faSitemap} />,
      description: "Data Structures and Algorithms discussions",
    },
    {
      id: "skill-development",
      name: "Skill Development",
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      description: "Personal and professional skill development",
    },
    {
      id: "job",
      name: "Jobs",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      description: "Job opportunities and career discussions",
    },
    {
      id: "hackathons",
      name: "Hackathons",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      description: "Hackathon announcements and participation",
    },
  ];
  const [topics, setTopics] = useState<Topic[]>(initialTopics);

  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  useEffect(()=>{
    axiosInstance.get('/user/community', { withCredentials: true }).then((response)=>console.log(response)).catch(()=>navigate('/')
  )
  },[])

  // Move left:remove last and unshift to the start
  const moveLeft = () => {
    if (topics.length > 1) {
      const lastTopic = topics.pop(); // Remove last
      if (lastTopic) topics.unshift(lastTopic); // Add it to the start

      setTopics([...topics]); // Update state
    }
  };

  // Move right: remove first and push to the end
  const moveRight = () => {
    if (topics.length > 1) {
      const firstTopic = topics.shift(); // Remove first
      if (firstTopic) topics.push(firstTopic); // Push it to the end
      setTopics([...topics]); // Update state
    }
  };

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
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        user: "You",
        content: newMessage,
        timestamp: new Date(),
        topic: activeTopic,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
    
  };
  const filteredMessages = messages.filter(
    (message) => message.topic === activeTopic
  );

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8  bg-white flex h-[800px] rounded-lg shadow-lg overflow-hidden ">
        {/* Main Chat Area */}
        <div className="mx-auto bg-gray-100 flex flex-col max-w-min w-[80vw] ">
          {/* Topic Tabs */}
          <div className="relative border-b border-gray-200 ">
            <button
              onClick={moveLeft}
              className="absolute left-2 top-[50%] -translate-y-[50%]"
            >
              <FontAwesomeIcon icon={faCircleArrowLeft} />
            </button>
            <div className="flex overflow-x-hidden w-[90%] ml-[5%]">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors text-nowrap ${
                    activeTopic === topic.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {topic.icon}
                  <span>{topic.name}</span>
                </button>
              ))}
            </div>
            <button
              onClick={moveRight}
              className="absolute right-2 top-[50%] -translate-y-[50%]"
            >
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
          </div>

          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-2">
              {topics.find((t) => t.id === activeTopic)?.icon}
              <div>
                <h1 className="text-xl font-semibold text-gray-800">
                  {topics.find((t) => t.id === activeTopic)?.name}
                </h1>
                <p className="text-sm text-gray-600">
                  {topics.find((t) => t.id === activeTopic)?.description}
                </p>
              </div>
            </div>
          </div>

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
            <div className="flex space-x-4 bg-red-100">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={`Message in #${topics
                  .find((t) => t.id === activeTopic)
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
