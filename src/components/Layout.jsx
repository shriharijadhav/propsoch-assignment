import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/layout.css'; // Create corresponding CSS file
import Header from './Header';

const Layout = () => {
    
  return (
    <div className='layout'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <div className='desktop-message'>
        <p>Please switch to mobile or tablet view</p>
        <p>
          As of now, we support only mobile and tablet devices. Desktop app
          coming soon!
        </p>
      </div>
      <Navbar />
    </div>
  );
};

export default Layout;
