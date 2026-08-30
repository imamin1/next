import React from 'react';
import ThemeToggle from '../../redux/theme/ThemeToggle';
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-700 flex justify-around items-center h-12'>
      <ThemeToggle/>
      hello
    </div>
  );
};

export default Navbar;