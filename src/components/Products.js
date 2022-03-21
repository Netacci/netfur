import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  const [loading, setLoading] = useState(false);
  //   const [mountProduct, setMountProduct] = useState(true);
  let ProductMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch('http://fakestoreapi.com/products');
      if (ProductMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
        console.log(data);
        console.log(filter);
      }
      //   return setMountProduct(false);
      return () => {
        ProductMounted = false;
      };
    };
    getProducts();
  }, []);
  console.log(data);
  console.log(filter);

  const Loading = () => {
    return <>Loading ...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <ul className='flex flex-wrap mt-5 border-b border-gray-200 dark:border-gray-700 justify-center'>
          <li className='mr-2'>
            <a
              href='#r'
              aria-current='page'
              className='inline-block py-4 px-4 text-sm font-medium text-center text-teal-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-teal-500'
            >
              All
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#h'
              className='inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
            >
              Men's Clothing
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#h'
              className='inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
            >
              Women's Clothing
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#h'
              className='inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
            >
              Jewelery
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#h'
              className='inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
            >
              Electronic
            </a>
          </li>
        </ul>
        <div className='flex flex-wrap flex-row justify-center mx-auto'>
          {filter.map((product) => {
            return (
              <>
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
              </>
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
