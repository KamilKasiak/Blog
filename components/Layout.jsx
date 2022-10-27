import Link from 'next/link';
import React from 'react';
import { Header } from './';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Layout = ({ children }) => {
  return (
    <div id='header'>
      <div className='text-center fixed right-2 bottom-2 z-10'>
        <Link href={`#header`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg rounded-full text-white px-2 py-1 lg:px-4 lg:py-2 cursor-pointer'>
            <KeyboardDoubleArrowUpIcon className='hover:-translate-y-1' />
          </span>
        </Link>
      </div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
