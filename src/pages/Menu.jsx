import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Drinks');
  const [addedItems, setAddedItems] = useState([
    { id: 1, name: "Passion fruit lemonade", price: 3000, time: "5 min" },
    { id: 2, name: "Fresh mango juice", price: 2500, time: "5 min" },
    { id: 3, name: "Mocha", price: 5000, time: "5 min" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Menu</h1>
          <div className="text-gray-600">3 items added</div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-10">
          {['Drinks', 'Main', 'Appetizer', 'Dessert'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white border hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="px-6 py-2 border border-dashed border-gray-400 rounded-full text-gray-500 hover:border-gray-600">
            + Add Category
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {/* Add New Item */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">NEW ITEMS DETAILS</h3>
            <div className="bg-white rounded-3xl p-8 space-y-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input type="text" className="w-full p-4 border rounded-2xl" placeholder="Item Name" />
              </div>

              <div>
                <label className="block text-sm mb-2">Details / Ingredients</label>
                <textarea className="w-full p-4 border rounded-3xl h-32" placeholder="Describe the item, list ingredients..." />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Price</label>
                  <input type="number" className="w-full p-4 border rounded-2xl" defaultValue="0" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Prep Time (min)</label>
                  <input type="number" className="w-full p-4 border rounded-2xl" defaultValue="15" />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center">
                  <button className="bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-2 mx-auto">
                    ↑ Upload
                  </button>
                </div>
              </div>

              <button className="w-full py-4 border-2 border-dashed border-gray-400 rounded-3xl text-gray-500 hover:border-gray-600">
                + Add Item to List
              </button>
            </div>
          </div>

          {/* Added Items */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">ADDED ITEMS</h3>
            <div className="space-y-4">
              {addedItems.map(item => (
                <div key={item.id} className="bg-amber-50 rounded-3xl p-5 flex gap-5">
                  <div className="w-16 h-16 bg-white rounded-2xl flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">Drinks • {item.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Frw {item.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">x1</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button className="px-8 py-3 border rounded-2xl">Cancel</button>
              <button className="px-8 py-3 bg-amber-600 text-white rounded-2xl hover:bg-amber-700">
                SAVE MENU →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;