import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white border-r flex flex-col items-center py-8 space-y-8">
        <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold">T</div>
        <div className="space-y-6 text-gray-500">
          <div className="cursor-pointer hover:text-amber-600">☰</div>
          <div className="cursor-pointer hover:text-amber-600">🌐</div>
          <div className="cursor-pointer hover:text-amber-600">👥</div>
          <div className="cursor-pointer hover:text-amber-600">⚙️</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">New Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <span>Hello, Username</span>
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-semibold tracking-widest">GETTING STARTED</h2>
          <h3 className="text-3xl font-bold mt-2">Welcome to Tasty.<br />Let's build your Business.</h3>
          <p className="text-gray-600 mt-3">Your are just a few steps from managing your menu, orders, and analytics all in one place.</p>
        </div>

        {/* Progress Steps */}
        <div className="flex gap-4 mb-10">
          <div className="bg-amber-100 text-amber-700 px-6 py-3 rounded-xl font-medium">1 Business Profile</div>
          <div className="bg-white border px-6 py-3 rounded-xl">2 Menu Setup</div>
          <div className="bg-white border px-6 py-3 rounded-xl">3 Go Live</div>
        </div>

        {/* Registration Card */}
        <div className="bg-black text-white rounded-3xl p-8 flex items-center justify-between mb-10">
          <div>
            <h4 className="text-xl font-semibold">Register your business</h4>
            <p className="text-gray-400 mt-1">Add your business name, address, cuisine type, and contact details</p>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-xl font-semibold">
            Start Registration
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border">
            <div className="text-3xl mb-3">📊</div>
            <h5 className="font-semibold">Live Analytics</h5>
            <p className="text-sm text-gray-500">Track revenue, orders, and peak hours in real time.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border">
            <div className="text-3xl mb-3">📋</div>
            <h5 className="font-semibold">Menu Management</h5>
            <p className="text-sm text-gray-500">Add, update, and highlight dishes with ease.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border">
            <div className="text-3xl mb-3">🛎️</div>
            <h5 className="font-semibold">Order Notifications</h5>
            <p className="text-sm text-gray-500">Get instant alerts for every new order placed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;