import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const BusinessProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [businessData, setBusinessData] = useState({
    businessName: "Tasty Restaurant",
    businessType: "Fine Dining Restaurant",
    address: "123 Food Street, Miami, FL 33101",
    phone: "+1 (305) 555-0123",
    email: "hello@tastyrestaurant.com",
    openDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    openFrom: "08:00",
    openTo: "22:00",
    description: "Crafted for your cravings - Serving delicious meals with love since 2023.",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34b4"
  });

  const [formData, setFormData] = useState(businessData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleDay = (day) => {
    setFormData(prev => ({
      ...prev,
      openDays: prev.openDays.includes(day)
        ? prev.openDays.filter(d => d !== day)
        : [...prev.openDays, day]
    }));
  };

  const handleSave = () => {
    setBusinessData(formData);
    setIsEditing(false);
    alert("Business profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(businessData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-white border-r flex flex-col items-center py-8 space-y-8">
        <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">T</div>
        
        <div className="space-y-6 text-gray-400">
          <div className="cursor-pointer hover:text-amber-600">☰</div>
          <div className="cursor-pointer text-amber-600">🏪</div>
          <div className="cursor-pointer hover:text-amber-600">🍽️</div>
          <div className="cursor-pointer hover:text-amber-600">📊</div>
          <div className="cursor-pointer hover:text-amber-600">🛎️</div>
        </div>
      </div>

      <div className="ml-16 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold">Business Profile</h1>
              <p className="text-gray-600 mt-1">Manage your restaurant information</p>
            </div>
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>

          {/* Cover Image */}
          <div className="relative h-64 rounded-3xl overflow-hidden mb-8">
            <img 
              src={businessData.coverImage} 
              alt="Restaurant Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-bold">{businessData.businessName}</h2>
              <p className="text-amber-400">{businessData.businessType}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Business Information</h3>

              {isEditing ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Business Type</label>
                    <input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Open Days</label>
                    <div className="flex flex-wrap gap-3">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <button
                          key={day}
                          onClick={() => toggleDay(day)}
                          className={`px-6 py-2.5 rounded-full text-sm font-medium ${
                            formData.openDays.includes(day)
                              ? 'bg-amber-600 text-white'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Opening Time</label>
                      <input
                        type="time"
                        name="openFrom"
                        value={formData.openFrom}
                        onChange={handleChange}
                        className="w-full p-4 border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Closing Time</label>
                      <input
                        type="time"
                        name="openTo"
                        value={formData.openTo}
                        onChange={handleChange}
                        className="w-full p-4 border rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-gray-700">
                  <p><strong>Business Type:</strong> {businessData.businessType}</p>
                  <p><strong>Address:</strong> {businessData.address}</p>
                  <p><strong>Phone:</strong> {businessData.phone}</p>
                  <p><strong>Email:</strong> {businessData.email}</p>
                  <p><strong>Hours:</strong> {businessData.openFrom} - {businessData.openTo} ({businessData.openDays.join(", ")})</p>
                  <p><strong>Description:</strong> {businessData.description}</p>
                </div>
              )}
            </div>

            {/* Contact & Status Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8">
                <h4 className="font-semibold mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p>{businessData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p>{businessData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p>{businessData.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Status</h4>
                  <span className="px-4 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600">Your business profile is live and visible to customers.</p>
              </div>

              {isEditing && (
                <div className="flex gap-4">
                  <Button variant="secondary" onClick={handleCancel} className="flex-1">
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="flex-1">
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;