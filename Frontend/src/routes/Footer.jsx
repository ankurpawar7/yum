import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white p-4 text-center relative z-10'>
      <p>&copy; {new Date().getFullYear()} Yum. All rights reserved.</p>
      <p>
        <Link to='/about' className='text-white hover:underline'>
          About Us
        </Link>{' '}
        |
        <Link to='/contact' className='text-white hover:underline'>
          {' '}
          Contact
        </Link>
      </p>
    </div>
  );
};

export default Footer;
