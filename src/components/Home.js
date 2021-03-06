import React from 'react';
import Hero from '../images/hero.jpg';
import Products from './Products';

const Home = () => {
  return (
    <>
      <div className='  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative '>
        <img className=' ' src={Hero} alt='' />

        <div className='p-5 absolute top-10 right-10 pr-20'>
          <a href='#f'>
            <h5 className='mb-2 lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white '>
              NEW STOCK ARRIVALS
            </h5>
          </a>
          <p className='mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href='#f'
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mt-3 transition-all ease-in duration-400'
          >
            Read more
            <svg
              className='ml-2 -mr-1 w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
