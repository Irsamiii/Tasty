import React from 'react';
import Sidebar from '../components/common/Sidebar';

const Trends = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Trends</h1>
          
          <div className="flex gap-2 bg-white rounded-2xl p-1">
            {['Today', 'This Week', 'This Month'].map((period) => (
              <button
                key={period}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                  period === 'This Week' 
                    ? 'bg-black text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-8">
            <p className="text-gray-500 text-sm">Total Orders</p>
            <p className="text-5xl font-bold mt-3">60</p>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <p className="text-gray-500 text-sm">Pending Orders</p>
            <p className="text-5xl font-bold mt-3">8</p>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <p className="text-gray-500 text-sm">Revenue (Frw)</p>
            <p className="text-5xl font-bold mt-3 text-amber-600">87,950</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Orders Over Time Chart */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8">
            <h3 className="font-semibold mb-6">Orders over Time</h3>
            
            <div className="h-80 flex items-end gap-4 relative">
              {/* Simple Chart Simulation */}
              <div className="flex-1 flex items-end gap-3 h-full">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                    <div 
                      className="bg-amber-400 rounded-t w-full transition-all"
                      style={{ height: `${30 + Math.random() * 60}%` }}
                    ></div>
                    <div 
                      className="bg-amber-200 rounded-t w-full transition-all"
                      style={{ height: `${20 + Math.random() * 40}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-3">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
          </div>

          {/* Profit Margin */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 flex flex-col items-center justify-center">
            <h3 className="font-semibold mb-6">Profit Margin</h3>
            
            <div className="relative w-52 h-52">
              <svg className="w-full h-full -rotate-12" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#e5e7eb" 
                  strokeWidth="12"
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#d97706" 
                  strokeWidth="12"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold">75%</div>
                <div className="text-sm text-gray-500 mt-1">of revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* New Order Banner */}
        <div className="mt-8 bg-black text-white rounded-3xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-2xl font-semibold">
              NEW ORDER
            </button>
            
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">🍝</div>
                <div>
                  <p className="font-medium">Spaghetti Bolognese</p>
                  <p className="text-sm text-gray-400">Table 04, Indoors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold">Frw 12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;