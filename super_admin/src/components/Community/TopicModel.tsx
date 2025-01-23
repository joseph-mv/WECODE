import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { axiosInstance } from "../../api/axiosInstance";
import { config } from "../../utils/axiosConfig";
interface AddTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TopicModal: React.FC<AddTopicModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState({ name: "", description: "", icon: "" });
  const [icons, setIcons] = useState([]);
  const [error, setError] = useState("");
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null; // Hide modal if not open

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        
      const response = await axiosInstance.post("/admin/add_topic",  topic,config );
      if(response.status ===201) onClose()
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        setError(error.response?.data.message || "Network Error"); // Safe access
      } else {
        setError("Unexpected error");
      }
    }
  };

  // Fetch icons dynamically from Iconify API
  const fetchIcons = async (query: string) => {
    if (!query) return setIcons([]);
    const res = await axios.get(
      `https://api.iconify.design/search?query=${query}`
    );
    setIcons(res.data.icons.slice(0, 24)); // Show first 10 results
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl text-black font-bold mb-4">Add New Topic</h2>
        <p className="text-red-700 text-center">{error}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            name="name"
            autoFocus
            value={topic.name}
            onChange={onChange}
            placeholder="Enter topic name"
            required
          />
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            name="description"
            value={topic.description}
            onChange={onChange}
            placeholder="Enter topic description"
            required
          />
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            name="icon"
            onChange={(e) => fetchIcons(e.target.value)}
            placeholder="Search icons"
          />

          {/* Display Matching Icons */}
          {icons.length > 0 && (
            <div className="mt-2 flex justify-center flex-wrap gap-2  border p-2 rounded ">
              {icons.map((icon, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setTopic({ ...topic, icon: icon })}
                  className={`p-2 border rounded bg-black hover:bg-gray-600 ${
                    icon === topic.icon && "bg-blue-600 hover:bg-blue-800"
                  }`}
                >
                  <Icon icon={icon} className="text-2xl" />
                </button>
              ))}
            </div>
          )}

          <div className="flex justify-end mt-4 space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopicModal;
