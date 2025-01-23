import { IconifyIcon } from "@iconify/react/dist/iconify.js";

export interface Message {
  id: number;
  user: string;
  content: string;
  timestamp: Date;
  topic: string;
}


export interface Topic {
  _id: string;
  name: string;
  icon: string | IconifyIcon;
  description: string;
}

export type TopicProps={
  topics:Topic[],
  setTopics: React.Dispatch<React.SetStateAction<Topic[]>>,
  setActiveTopic: React.Dispatch<React.SetStateAction<Topic>>,
  activeTopic: Topic,
}