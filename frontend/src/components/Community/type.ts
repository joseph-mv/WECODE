
export interface Message {
  id: number;
  user: string;
  content: string;
  timestamp: Date;
  topic: string;
}


export interface Topic {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}