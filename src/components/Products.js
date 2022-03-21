import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isActive, setIsActive] = useState('0');

  const [loading, setLoading] = useState(false);
  const [mountProduct, setMountProduct] = useState(true);
  //   let ProductMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get('http://fakestoreapi.com/products');
      if (mountProduct) {
        setData(await res.data);
        setFilter(await res.data);
        setLoading(false);
        console.log(data);
        console.log(filter);
        console.log(loading);
      }
      return setMountProduct(false);
      //   return () => {
      //     ProductMounted = false;
      //   };
    };
    getProducts();
  }, []);
  console.log(loading);
  console.log(data);
  console.log(filter);

  const Loading = () => {
    return (
      <>
        <div className='flex flex-wrap justify-center mx-auto '>
          <div className='h-72 mr-9 mb-5 w-3/12 bg-gray-100 rounded-lg shadow-md'>
            <Skeleton />
          </div>
          <div className=' mr-9 mb-5 w-3/12 bg-gray-100 rounded-lg shadow-md '>
            <Skeleton />
          </div>
          <div className='mr-9 mb-5 w-3/12 bg-gray-100    rounded-lg shadow-md'>
            <Skeleton />
          </div>
          {/* <Skeleton height={350} />
          <Skeleton height={350} />
          <Skeleton height={350} /> */}
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    const filterProduct = (pr) => {
      const updateFilter = data.filter((product) => {
        return product.category === pr;
      });
      setFilter(updateFilter);
    };

    return (
      <>
        <div className='flex flex-wrap mt-5 border-b border-gray-200 dark:border-gray-700 justify-center'>
          <button
            className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center  hover:text-teal-600 hover:bg-gray-50  dark:bg-gray-800 dark:text-teal-500 ${
              isActive === '0' ? 'text-teal-600 bg-gray-100 rounded-t-lg ' : ''
            }`}
            onClick={(e) => {
              setFilter(data);
              setIsActive(e.target.dataset.tab);
            }}
            data-tab='0'
          >
            All
          </button>

          <button
            className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
              isActive === '1' ? 'text-teal-600 bg-gray-100 rounded-t-lg' : ''
            }`}
            onClick={(e) => {
              filterProduct("men's clothing");
              setIsActive(e.target.dataset.tab);
            }}
            data-tab='1'
          >
            Men's Clothing
          </button>
          <button
            className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
              isActive === '2' ? 'text-teal-600 bg-gray-100 rounded-t-lg' : ''
            }`}
            onClick={(e) => {
              filterProduct("women's clothing");
              setIsActive(e.target.dataset.tab);
            }}
            data-tab='2'
          >
            Women's Clothing
          </button>
          <button
            className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
              isActive === '3' ? 'text-teal-600 bg-gray-100 rounded-t-lg' : ''
            }`}
            onClick={(e) => {
              filterProduct('jewelery');
              setIsActive(e.target.dataset.tab);
            }}
            data-tab='3'
          >
            Jewelery
          </button>
          <button
            className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
              isActive === '4' ? 'text-teal-600 bg-gray-100 rounded-t-lg' : ''
            }`}
            onClick={(e) => {
              filterProduct('electronics');
              setIsActive(e.target.dataset.tab);
            }}
            data-tab='4'
          >
            Electronics
          </button>
        </div>
        <div className='flex flex-wrap flex-row justify-center mx-auto'>
          {filter.map((product) => {
            return (
              <div
                className='max-w-sm mr-9 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'
                key={product.id}
              >
                <img
                  className='p-8 rounded-t-lg w-8/12'
                  src={product.image}
                  alt='product'
                />

                <div className='px-5 pb-5'>
                  <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                    {product.title}
                  </h5>

                  <div className='flex items-center mt-2.5 mb-5'>
                    <svg
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                      {product.rating.rate}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                      ${product.price}
                    </span>
                    <a
                      href='#y'
                      className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className='px-20 py-10  text-center'>
        <h1 className='text-4xl mb-4'>Latest Products</h1>
        <hr />
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
};

export default Products;
