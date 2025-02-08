import React, { useState } from 'react';
import { Plus, Check, Clock, Target } from 'lucide-react';

export default function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Master React Fundamentals', deadline: '2024-04-01', completed: false },
    { id: 2, title: 'Complete Algorithm Course', deadline: '2024-04-15', completed: false },
    { id: 3, title: 'Build Portfolio Project', deadline: '2024-05-01', completed: true },
  ]);

  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Learning Goals</h1>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4" />
          Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map(goal => (
          <div key={goal.id} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${
            goal.completed ? 'border-green-500' : 'border-yellow-500'
          }`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold">{goal.title}</h3>
              <button
                onClick={() => toggleGoal(goal.id)}
                className={`p-2 rounded-full ${
                  goal.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Due: {goal.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}