import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className='py-3 mb-4 z-20 border-b-2 sticky top-0 bg-black font-bold w-full flex items-center'>
      <Link
        to='/'
        className='ml-6 mr-8 self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white'
      >
        <span className='text-4xl'>
          Shop.io
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;