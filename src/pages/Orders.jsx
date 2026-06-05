import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');

  const orders = [
    {
      id: 1,
      item: "Blue Lagoon X 2",
      client: "Amara Niusi",
      table: "Garden 01",
      time: "18:32",
      status: "Delivered",
      total: 5000
    },
    {
      id: 2,
      item: "Sushi",
      client: "Jean Pierre",
      table: "Garden 03",
      time: "18:45",
      status: "Pending",
      total: 12000
    },
    {
      id: 3,
      item: "Chicken Sandwich",
      client: "Diane Uwase",
      table: "Indoor 02",
      time: "19:01",
      status: "Delivered",
      total: 7500
    },
    {
      id: 4,
      item: "Beef Steak",
      client: "Eric Mugabo",
      table: "RoofTop 01",
      time: "19:15",
      status: "Pending",
      total: 4500
    },
    {
      id: 5,
      item: "Pizza X 2",
      client: "Nadia Ruzibiza",
      table: "Indoor 04",
      time: "19:30",
      status: "Rejected",
      total: 9000
    },
    {
      id: 6,
      item: "Matcha Iced Latte & Mocha",
      client: "Charlote Butera",
      table: "Indoor 01",
      time: "19:44",
      status: "Delivered",
      total: 3000
    },
  ];

  const filteredOrders = activeTab === 'All' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-amber-100 text-amber-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Order</h1>
        </div>

        {/* Status Tabs */}
        <div className="flex gap-2 mb-8 border-b pb-4">
          {['All', 'Delivered', 'Rejected'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-2xl font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white border hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-5 px-8 font-medium text-gray-500">ITEM</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">CLIENT</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">TABLE</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">TIME</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">STATUS</th>
                <th className="text-right py-5 px-8 font-medium text-gray-500">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50 transition-all">
                  <td className="py-6 px-8 font-medium">{order.item}</td>
                  <td className="py-6 px-8">
                    <div>
                      <div>{order.client}</div>
                      <div className="text-sm text-gray-500">Table {order.table}</div>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-gray-600">{order.table}</td>
                  <td className="py-6 px-8 text-gray-600">{order.time}</td>
                  <td className="py-6 px-8">
                    <span className={`inline-block px-5 py-1.5 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-6 px-8 text-right font-semibold">
                    Frw {order.total.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No orders found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;