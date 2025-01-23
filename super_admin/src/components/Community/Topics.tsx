import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faEdit,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopicProps } from "./type";
import { useEffect, useState } from "react";
import TopicModal from "./TopicModel";
import { axiosInstance } from "../../api/axiosInstance";
import { config } from "../../utils/axiosConfig";
import { Icon } from "@iconify/react";
const Topics: React.FC<TopicProps> = ({
  topics,
  setTopics,
  setActiveTopic,
  activeTopic,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axiosInstance("/admin/topics", config)
      .then((response) => {
        console.log(response);
        setTopics(response.data);
        setActiveTopic(response.data[0]); // Set first topic as active
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const addTopic = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative border-b border-gray-200 ">
        <button
          onClick={moveLeft}
          className="absolute left-2 top-[50%] -translate-y-[50%] hover:scale-105"
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        <div className="flex overflow-x-hidden w-[85%] ml-[5%] ">
          {topics.map((topic) => (
            <button
              key={topic._id}
              onClick={() => setActiveTopic(topic)}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors text-nowrap ${
                activeTopic._id === topic._id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}

            >
              <Icon icon={topic.icon} className="text-2xl" />

              <span>{topic.name}</span>
            </button>
          ))}
        </div>
        <div className="absolute right-2 top-[50%] -translate-y-[50%] space-x-3">
          <button
            className="bg-green-500 rounded-full px-1 hover:scale-105"
            onClick={addTopic}
          >
            {" "}
            <FontAwesomeIcon icon={faPlus} />{" "}
          </button>
          <button onClick={moveRight} className="hover:scale-105">
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </button>
        </div>
      </div>
      {/* Chat Header */}
      <div className="flex justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex before: items-center space-x-2 ">
        <Icon icon= {activeTopic.icon} className="text-2xl" />
         
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {activeTopic.name}
            </h1>
            <p className="text-sm text-gray-600">
              {activeTopic.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="text-red-600 hover:scale-105">
            {" "}
            <FontAwesomeIcon icon={faTrash} />{" "}
          </button>
          <button className="text-yellow-800 hover:scale-105">
            {" "}
            <FontAwesomeIcon icon={faEdit} />{" "}
          </button>
        </div>
      </div>
      <TopicModal isOpen={isModalOpen} onClose={onClose} />
    </>
  );
};

export default Topics;
