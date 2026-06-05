import React from 'react';
import Sidebar from '../components/common/Sidebar';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Settings</h1>
          <div className="text-gray-600">Le Grand Chalet</div>
        </div>

        <div className="max-w-4xl space-y-8">
          {/* Business Section */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-xl font-semibold mb-6">Business</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">Le Grand Chalet</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium">Restaurant</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">Gisenyi, Rubavu</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <p className="font-medium">8:00 - 22:00</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>
            </div>
          </div>

          {/* Account Section */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-xl font-semibold mb-6">Account</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">lechalet03@gmail.com</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+250 785 694 312</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Password</p>
                  <p className="font-medium">••••••••••••</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-xl font-semibold mb-6">Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Currency</p>
                  <p className="font-medium">Frw</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Notification</p>
                  <p className="font-medium">On</p>
                </div>
                <button className="bg-amber-600 text-white px-6 py-2.5 rounded-2xl text-sm font-medium hover:bg-amber-700">
                  EDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;