import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import BusinessRegistration from './pages/BusinessRegistration';
import Menu from './pages/Menu';
import Tables from './pages/Tables';
import Orders from './pages/Orders';
import Clients from './pages/Clients';
import Trends from './pages/Trends';
import Settings from './pages/Settings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/business-registration" element={<BusinessRegistration />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/tables' element={<Tables />} />
          <Route path="/orders" element={<Orders />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;