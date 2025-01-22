import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import './App.css'; // Global CSS
import Wishlist from './components/Wishlist';
import MapComponent from './components/MapComponent';
import Login from './components/Login';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PropertyList />} />
          <Route path="property/:id" element={<PropertyDetail />} />
          <Route path="wishlist" element={<Wishlist/>} />
          <Route path="map" element={<MapComponent/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
