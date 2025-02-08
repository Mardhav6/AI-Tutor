import React from 'react';
import { Clock, Book, Target, Award } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { icon: Clock, label: 'Study Time', value: '12.5 hrs' },
    { icon: Book, label: 'Topics Covered', value: '15' },
    { icon: Target, label: 'Goals Completed', value: '8' },
    { icon: Award, label: 'Achievements', value: '12' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome back, Student!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Completed Python Basics</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Upcoming Goals</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm font-medium">Complete Data Structures</p>
                </div>
                <span className="text-xs text-gray-500">Due in 2 days</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}