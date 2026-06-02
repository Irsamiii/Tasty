import React from 'react';

const Input = ({ label, type = 'text', placeholder, value, onChange, name, error, ...props }) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-medium text-gray-600 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-5 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} 
                   rounded-xl focus:ring-1 focus:ring-gold-light 
                   transition-all text-gray-900 text-base`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;