import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black text-white flex flex-col z-50">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-600 rounded-2xl flex items-center justify-center text-white font-bold">T</div>
          <div>
            <h1 className="font-bold text-xl">Tasty</h1>
            <p className="text-xs text-gray-400">Restaurant Dashboard</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-1">
        <NavLink to="/dashboard" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
          <span>🏠</span> Overview
        </NavLink>
        
        <NavLink to="/menu" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
          <span>🍽️</span> Menu
        </NavLink>

        <NavLink to="/tables" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
          <span>🪑</span> Tables
        </NavLink>

        <NavLink to="/orders" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
          <span>📋</span> Orders
        </NavLink>

        <NavLink to="/clients" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
          <span>👥</span> Clients
        </NavLink>
      </div>

      <div className="p-4 border-t border-white/10 mt-auto">
        <div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl cursor-pointer">
          ⚙️ Settings
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl cursor-pointer">
          ⬅️ Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;