import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Create corresponding CSS file


import { GoHeart, GoSearch } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import { IoPersonOutline } from 'react-icons/io5';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navLinks'>
      <NavLink to='/' className='nav-item'>
        <div className='singleNavDiv'>
          <GoSearch  size={24} />
          <p>Explore</p>
        </div>
      </NavLink>
      <NavLink to='/wishlist' className='nav-item'>
        <div className='singleNavDiv'>
          <GoHeart  size={24}  />
          <p>Wish List</p>
        </div>
      </NavLink>
      <NavLink to='/map' className='nav-item'>
        <div className='singleNavDiv'>
          <SlLocationPin size={24} />
          <p>Show Map</p>
        </div>
      </NavLink>
      <NavLink to='/login' className='nav-item'>
        <div className='singleNavDiv'>
          <IoPersonOutline  size={24} />
          <p>Login</p>
        </div>
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
