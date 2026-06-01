import React, { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', formData);
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 bg-black flex-col items-center justify-center">
        <img src="/logo-tasty.png" alt="Tasty" className="w-48 mb-6" />
        <p className="text-amber-400 italic">Crafted for your cravings</p>
      </div>

      <div className="w-full lg:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <h2 className="text-amber-600 font-semibold mb-1">GET STARTED</h2>
          <h1 className="text-3xl font-bold mb-2">Let's build your account.</h1>
          <p className="text-gray-600 mb-8">Set up your Tasty Profile to start managing your business.</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
            <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
            
            <div className="col-span-2">
              <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="col-span-2">
              <Input label="Phone Number" type="tel" name="phone" placeholder="+250 7XXXXXXXX" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="col-span-2">
              <Input label="Password" type="password" name="password" placeholder="Min. 8 characters" value={formData.password} onChange={handleChange} />
            </div>

            <div className="col-span-2">
              <Input label="Confirm Password" type="password" name="confirmPassword" placeholder="Repeat Password" value={formData.confirmPassword} onChange={handleChange} />
            </div>

            <div className="col-span-2 mt-4">
              <Button type="submit" className="w-full text-lg">
                CREATE ACCOUNT →
              </Button>
            </div>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-amber-600 font-semibold hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;