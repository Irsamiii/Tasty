import React from 'react';
import Sidebar from '../components/common/Sidebar';

const Tables = () => {
  const freeTables = [
    { name: "Down Stares", number: "table 004" },
    { name: "Garden", number: "table 002" },
    { name: "Down Stares", number: "table 001" },
    { name: "Up Stares", number: "table 003" },
    { name: "Balcony", number: "table 003" },
    { name: "Garden", number: "table 005" },
    { name: "Up Stares", number: "table 005" },
  ];

  const occupiedTables = [
    { name: "Garden", number: "table 004" },
    { name: "Balcony", number: "table 002" },
    { name: "Garden", number: "table 001" },
    { name: "Down Stares", number: "table 002" },
    { name: "Down Stares", number: "table 005" },
    { name: "Up Stares", number: "table 002" },
    { name: "Down Stares", number: "table 003" },
    { name: "Balcony", number: "table 005" },
  ];

  const bookedTables = [
    { name: "Balcony", number: "table 004" },
    { name: "Up Stares", number: "table 004" },
    { name: "Up Stares", number: "table 005" },
    { name: "Up Stares", number: "table 004" },
    { name: "Up Stares", number: "table 004" },
  ];

  const TableCard = ({ table, status }) => (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-lg">{table.name}</h4>
          <p className="text-gray-500 text-sm">{table.number}</p>
        </div>
        
        <div className={`px-4 py-1 text-xs font-medium rounded-full ${
          status === 'Free' ? 'bg-green-100 text-green-700' :
          status === 'Occupied' ? 'bg-red-100 text-red-700' :
          'bg-blue-100 text-blue-700'
        }`}>
          {status}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Tables</h1>

        {/* Free Tables */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Free Tables</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {freeTables.map((table, index) => (
              <TableCard key={index} table={table} status="Free" />
            ))}
          </div>
        </div>

        {/* Occupied Tables */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Occupied Tables</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {occupiedTables.map((table, index) => (
              <TableCard key={index} table={table} status="Occupied" />
            ))}
          </div>
        </div>

        {/* Booked Tables */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Booked Tables</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bookedTables.map((table, index) => (
              <TableCard key={index} table={table} status="Booked" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;