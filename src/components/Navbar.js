import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <>
      <div className='container px-36'>
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-gray-800'>
          <div className='flex  justify-between flex-wrap items-center mx-auto'>
            <a href='#home'>
              <p className='text-3xl'>NetFurnish</p>
            </a>

            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <a
                  href='#h'
                  className='block py-2 pr-4 pl-3 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 dark:text-white'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#h'
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#h'
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href='#h'
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact
                </a>
              </li>
            </ul>

            <input
              type='text'
              id='email-adress-icon'
              className='block p-2 pl-10  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search...'
            />
            <div>
              <a
                href='#siginin'
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-teal-700 border border-teal-700 rounded-lg hover:bg-teal-800 hover:text-white transition-all ease-in duration-400 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mr-10'
              >
                Login
              </a>
              <a
                href='#siginin'
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-teal-700 border border-teal-700 rounded-lg hover:bg-teal-800 hover:text-white transition-all ease-in duration-400 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
              >
                Register
              </a>
            </div>

            <div className='cursor-pointer relative'>
              <Icon icon='bytesize:cart' />
              {/* <p className='text-xs absolute -top-2 left-3'>0</p> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
