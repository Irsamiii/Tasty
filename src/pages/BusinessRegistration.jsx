import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    openDays: [],
    openFrom: '08:00',
    openTo: '22:00',
    businessName: '',
    address: '',
    contactPhone: '',
    contactEmail: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleDay = (day) => {
    setFormData(prev => ({
      ...prev,
      openDays: prev.openDays.includes(day)
        ? prev.openDays.filter(d => d !== day)
        : [...prev.openDays, day]
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    console.log('Business Registration Data:', formData);
    // TODO: Send to API
    alert('Business Registered Successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r flex flex-col items-center py-8">
        <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold mb-12">T</div>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Create your business profile</h1>
          <p className="text-gray-600">Step {step} of 2 - {step === 1 ? 'Business Type & Timing' : 'Business Information'}</p>

          {step === 1 && (
            <div className="bg-white rounded-2xl p-8 mt-6">
              <h2 className="text-xl font-semibold mb-6">Business Type & Timing</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                >
                  <option value="">Select a business type...</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                  <option value="fastfood">Fast Food</option>
                  <option value="bakery">Bakery</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Open Days</label>
                <div className="flex flex-wrap gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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
                    className="w-full p-4 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Closing Time</label>
                  <input
                    type="time"
                    name="openTo"
                    value={formData.openTo}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <button onClick={() => navigate('/dashboard')} className="px-8 py-3 text-gray-600">Cancel</button>
                <button onClick={nextStep} className="bg-amber-600 text-white px-8 py-3 rounded-xl hover:bg-amber-700">
                  NEXT STEP →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl p-8 mt-6">
              <h2 className="text-xl font-semibold mb-6">Business Information</h2>

              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg mb-4"
              />

              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg mb-4 h-24"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="contactPhone"
                  placeholder="Contact Phone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="p-4 border rounded-lg"
                />
                <input
                  type="email"
                  name="contactEmail"
                  placeholder="Contact Email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="p-4 border rounded-lg"
                />
              </div>

              <div className="flex justify-between mt-10">
                <button onClick={prevStep} className="px-8 py-3 border rounded-xl">← Back</button>
                <button onClick={handleSubmit} className="bg-amber-600 text-white px-8 py-3 rounded-xl hover:bg-amber-700">
                  COMPLETE REGISTRATION
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistration;