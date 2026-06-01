import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const userData = { id: 1, name: "John Smith", email: formData.email };
      login(userData);
      navigate('/dashboard');
    } catch (error) {
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* LEFT SIDE - Black Background */}
      <div className="hidden lg:flex w-1/2 bg-black flex-col items-center justify-center relative p-8">
        
        {/* Top Right Food Image */}
        <img 
          src="/food-top.png" 
          alt="Food" 
          className="absolute top-8 right-8 w-36 h-36 object-cover rounded-full"
        />

        {/* Bottom Left Food Image */}
        <img 
          src="/food-bottom.png" 
          alt="Food" 
          className="absolute bottom-12 left-12 w-32 h-32 object-cover rounded-full"
        />

        {/* Main Logo */}
        <div className="text-center z-10">
          <img 
            src="/tasty-logo.svg" 
            alt="Tasty Logo" 
            className="w-72 mx-auto drop-shadow-2xl"
          />
        </div>

        <p className="text-gold-default text-xl italic tracking-widest mt-6 font-light">
          Crafted for your cravings
        </p>
      </div>

      {/* RIGHT SIDE - White Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-12">
        <div className="max-w-md w-full">
          <div className="mb-10">
            <h2 className="text-gold-default font-semibold tracking-widest text-sm">WELCOME BACK</h2>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              Sign in to <br /> <span className="text-gold-default">Tasty.</span>
            </h1>
            <p className="text-gray-600 mt-3">
              Enter your credentials to access your restaurant dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Link to="#" className="text-gold-default text-sm hover:text-gold-light hover:underline">Forgot Password?</Link>
              </div>
              <Input
                type="password"
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4 text-gold-default"
              />
              <span className="text-sm text-gray-600">Remember for 30 days</span>
            </label>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gold-default hover:bg-gold-light text-black font-semibold py-3.5 text-base tracking-wider"
            >
              {isLoading ? "SIGNING IN..." : "SIGN IN →"}
            </Button>
          </form>

          <div className="text-center mt-8 text-sm">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-gold-default font-semibold hover:text-gold-light hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;