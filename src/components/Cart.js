import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/action/index.js';
import { NavLink } from 'react-router-dom';
import { addCart } from '../redux/action/index.js';

import { Icon } from '@iconify/react';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const increaseItem = (item) => {
    dispatch(addCart(item));
  };
  const decreaseItem = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <>
        <div className='px-20 py-10' key={cartItem.id}>
          <div className='flex justify-center relative  '>
            <div className='absolute right-56 cursor-pointer'>
              <Icon icon='bi:x-lg' onClick={() => handleClose(cartItem)} />
            </div>
            <div className='w-2/12 mr-10'>
              <img src={cartItem.image} alt='cart' className='' />
            </div>
            <div className='ml-10 items-center'>
              <h3 className='text-2xl font-semibold'>{cartItem.title}</h3>
              <div className='flex'>
                <p className='text-xl font-bold mr-4'>Qty: {cartItem.qty}</p>
                {console.log(cartItem.qty)}
                <p className='text-xl font-bold'>${cartItem.price}</p>
              </div>

              <div>
                <button
                  className='text-3xl mr-5'
                  onClick={() => decreaseItem(cartItem)}
                >
                  -
                </button>
                <button
                  className='text-3xl'
                  onClick={() => increaseItem(cartItem)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className='px-20 py-10'>
          <h1 className='text-3xl font-bold'>CART IS EMPTY.. Add something</h1>
        </div>
      </>
    );
  };
  const checkOut = () => {
    return (
      <>
        <div className='px-20 text-center mx-auto'>
          <NavLink
            to='/cart'
            className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium transition-all ease-in duration-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
          >
            Proceed to checkout
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkOut()}
    </>
  );
};

export default Cart;
