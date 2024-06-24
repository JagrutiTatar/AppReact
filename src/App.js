// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/profile/1">Profile</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
