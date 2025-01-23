import {  useMemo, useState } from "react";
import { DashboardStats } from "../components/DashboardStats";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Members from "../components/Members";
import ChatRooms from "../components/Community/ChatRooms";
import Events from "../components/Events";
import MemberShipPlan from "../components/MemberShipPlan";
import Analytics from "../components/Analytics";
import Settings from "../components/Settings";

const components: Record<string, JSX.Element> = {
  "Dashboard": <DashboardStats />,
  "Members": <Members />,
  "Chat Rooms": <ChatRooms />,
  "Events": <Events />,
  "Membership Plans": <MemberShipPlan />,
  "Analytics": <Analytics />,
  "Settings": <Settings />,
};

function AdminDashBoard() {
  const [menuItem, setMenuItem] = useState("Chat Rooms"); 
  // Memoize the selected component to avoid unnecessary re-renders
  const SelectedComponent = useMemo(() => components[menuItem] || <DashboardStats />, [menuItem]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar menuItem={menuItem} setMenuItem={setMenuItem} />

      <div className="flex-1">
        <Header />

        <main className="p-6 text-black">{SelectedComponent}</main>
      </div>
    </div>
  );
}

export default AdminDashBoard;
