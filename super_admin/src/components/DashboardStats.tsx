
import { Users, MessageSquare, Calendar, Crown } from 'lucide-react';

const stats = [
  {
    title: 'Total Members',
    value: '2,532',
    change: '+12.5%',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Active Chat Rooms',
    value: '48',
    change: '+5.2%',
    icon: MessageSquare,
    color: 'green'
  },
  {
    title: 'Upcoming Events',
    value: '12',
    change: '+3.1%',
    icon: Calendar,
    color: 'purple'
  },
  {
    title: 'Premium Members',
    value: '856',
    change: '+4.5%',
    icon: Crown,
    color: 'orange'
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
              <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
            </div>
            <span className="text-sm text-green-600 font-medium">{stat.change}</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
          <p className="text-2xl font-semibold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}