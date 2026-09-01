import React from 'react';
import ThemeToggle from '../../redux/theme/ThemeToggle';
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex justify-around items-center flex-row-reverse h-12'>
      <ThemeToggle/>
      سامانه مدیریتی
    </div>
  );
};

export default Navbar;