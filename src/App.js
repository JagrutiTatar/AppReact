// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const Cart = () => {
  return <h1>Cart Page</h1>;
};
 
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/:cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
