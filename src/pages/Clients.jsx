import React from 'react';
import Sidebar from '../components/common/Sidebar';

const Clients = () => {
  const clients = [
    {
      initials: "AN",
      color: "bg-amber-500",
      name: "Amara Niusi",
      email: "amara.nius@gmail.com",
      orders: 24,
      spent: "143,500 RWF",
      lastVisit: "Today, 18:32",
      status: "VIP"
    },
    {
      initials: "JP",
      color: "bg-green-500",
      name: "Jean Pierre",
      email: "jeanpierre@gmail.com",
      orders: 18,
      spent: "98,000 RWF",
      lastVisit: "Today, 18:45",
      status: "VIP"
    },
    {
      initials: "DU",
      color: "bg-purple-500",
      name: "Diane Uwase",
      email: "diane.uwase@gmail.com",
      orders: 9,
      spent: "47,500 RWF",
      lastVisit: "Today, 19:01",
      status: "Regular"
    },
    {
      initials: "EM",
      color: "bg-teal-500",
      name: "Eric Mugabo",
      email: "ericmugabo@gmail.com",
      orders: 5,
      spent: "21,000 RWF",
      lastVisit: "Today, 19:15",
      status: "Regular"
    },
    {
      initials: "NR",
      color: "bg-red-500",
      name: "Nadia Ruzibiza",
      email: "nadia.ruzibiza@gmail.com",
      orders: 31,
      spent: "187,000 RWF",
      lastVisit: "Yesterday",
      status: "VIP"
    },
    {
      initials: "CB",
      color: "bg-cyan-500",
      name: "Chantal Butera",
      email: "chantal.butera@gmail.com",
      orders: 3,
      spent: "9,000 RWF",
      lastVisit: "Apr 22",
      status: "Regular"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Clients</h1>
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search client..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-amber-500"
            />
            <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-5 px-8 font-medium text-gray-500">CLIENT</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">ORDERS</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">TOTAL SPENT</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">LAST VISIT</th>
                <th className="text-left py-5 px-8 font-medium text-gray-500">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                  <td className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 ${client.color} text-white rounded-2xl flex items-center justify-center font-bold`}>
                        {client.initials}
                      </div>
                      <div>
                        <div className="font-medium">{client.name}</div>
                        <div className="text-sm text-gray-500">{client.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-8 font-medium">{client.orders}</td>
                  <td className="py-6 px-8 font-medium">{client.spent}</td>
                  <td className="py-6 px-8 text-gray-600">{client.lastVisit}</td>
                  <td className="py-6 px-8">
                    <span className={`px-5 py-1.5 text-xs font-medium rounded-full ${
                      client.status === 'VIP' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clients;