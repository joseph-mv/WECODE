import { 
  LayoutDashboard, 
  Users, 
  MessageSquare,
  Calendar,
  Settings, 
  BarChart2,
  Shield,
  LogOut 
} from 'lucide-react';

type PropsType = { 
  menuItem: string,  // Current selected menu item
  setMenuItem: React.Dispatch<React.SetStateAction<string>> 
};

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard' },
  { icon: Users, text: 'Members' },
  { icon: MessageSquare, text: 'Chat Rooms' },
  { icon: Calendar, text: 'Events' },
  { icon: Shield, text: 'Membership Plans' },
  { icon: BarChart2, text: 'Analytics' },
  { icon: Settings, text: 'Settings' },
];

export const Sidebar: React.FC<PropsType> = ({menuItem, setMenuItem }) => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8 px-2">
      <div className="rounded-full outline-1 outline-dashed">
        <img
          style={{ width: "40px", height: "auto" }}
          src="images/logo.png"
          alt="logo"
        />
      </div>
        <span className="text-xl font-bold">Wecode_admin</span>
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setMenuItem(item.text)}
            className={` flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors text-gray-300 hover:bg-gray-800 ${item.text===menuItem && "bg-blue-500 hover:bg-blue-600"}`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.text}</span>
          </div>
        ))}
      </nav>

      {/* Logout Section */}
      <div className="mt-auto pt-8">
        <div className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};
