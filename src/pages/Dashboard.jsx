import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartRegistration = () => {
    navigate('/business-registration');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white border-r flex flex-col items-center py-8 space-y-8 z-50">
        <div className="w-10 h-10 bg-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">T</div>
        
        <div className="space-y-8 text-gray-400">
          <div className="cursor-pointer hover:text-amber-600 text-xl">☰</div>
          <div className="cursor-pointer text-amber-600 text-xl">🌐</div>
          <div className="cursor-pointer hover:text-amber-600 text-xl">👥</div>
          <div className="cursor-pointer hover:text-amber-600 text-xl">📊</div>
          <div className="cursor-pointer hover:text-amber-600 text-xl">🛎️</div>
          <div className="cursor-pointer hover:text-amber-600 text-xl">⚙️</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16 p-8">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">New Dashboard</h1>
          
          <div className="flex items-center gap-3">
            <span className="text-gray-700">Hello, {user?.name || "Username"}</span>
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer">
              {user?.name ? user.name[0] : "U"}
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-amber-600">
              <span className="text-xl">◆</span>
              <span className="font-semibold tracking-widest text-lg">GETTING STARTED</span>
              <span className="text-xl">◆</span>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900">Welcome to Tasty.</h2>
          <h3 className="text-3xl font-bold text-gray-900 mt-1">Let's build your Business.</h3>
          
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            You are just a few steps from managing your menu, orders, and analytics all in one place. 
            Begin by registering your business.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex gap-4 mb-12 justify-center">
          <div className="bg-amber-100 text-amber-700 px-8 py-3 rounded-2xl font-medium flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            Business Profile
          </div>
          <div className="bg-white border border-gray-200 px-8 py-3 rounded-2xl flex items-center gap-2 text-gray-500">
            <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center text-sm font-bold">2</div>
            Menu Setup
          </div>
          <div className="bg-white border border-gray-200 px-8 py-3 rounded-2xl flex items-center gap-2 text-gray-500">
            <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center text-sm font-bold">3</div>
            Go Live
          </div>
        </div>

        {/* Register Business Card */}
        <div className="bg-black text-white rounded-3xl p-8 mb-12 flex items-center justify-between">
          <div className="max-w-md">
            <h4 className="text-2xl font-semibold">Register your business</h4>
            <p className="text-gray-400 mt-3">
              Add your business name, address, cuisine type, and contact details to get your profile live and ready
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <button 
              onClick={handleStartRegistration}
              className="bg-amber-600 hover:bg-amber-700 px-10 py-4 rounded-2xl font-semibold transition-all active:scale-95"
            >
              Start Registration
            </button>
            <button className="text-gray-400 hover:text-gray-300 text-sm underline">
              Remind me later
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
            <div className="text-4xl mb-6">📊</div>
            <h5 className="font-semibold text-xl mb-2">Live Analytics</h5>
            <p className="text-gray-600">Track revenue, orders, and peak hours in real time.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
            <div className="text-4xl mb-6">🍽️</div>
            <h5 className="font-semibold text-xl mb-2">Menu Management</h5>
            <p className="text-gray-600">Add, update, and highlight dishes with ease.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
            <div className="text-4xl mb-6">🛎️</div>
            <h5 className="font-semibold text-xl mb-2">Order Notifications</h5>
            <p className="text-gray-600">Get instant alerts for every new order placed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;