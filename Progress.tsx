import React from 'react';
import { BarChart, Calendar, Award, ArrowUp } from 'lucide-react';

export default function Progress() {
  const subjects = [
    { name: 'Mathematics', progress: 75 },
    { name: 'Programming', progress: 60 },
    { name: 'Data Structures', progress: 45 },
    { name: 'Algorithms', progress: 30 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Learning Progress</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Subject Progress</h2>
          <div className="space-y-6">
            {subjects.map((subject, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{subject.name}</span>
                  <span className="text-sm text-gray-600">{subject.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Weekly Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span className="text-sm text-gray-600">Study Time</span>
              </div>
              <p className="text-xl font-semibold">12.5 hrs</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <ArrowUp className="w-3 h-3" />
                15% increase
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <p className="text-xl font-semibold">8 topics</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <ArrowUp className="w-3 h-3" />
                20% increase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}