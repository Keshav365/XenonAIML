import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext'; // Ensure this path is correct
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Landing from './Landing'
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';

export default function App() {
  return (
    <AuthContextProvider> {/* Wrap Routes with AuthContextProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        
      </Router>
    </AuthContextProvider>
  );
}
