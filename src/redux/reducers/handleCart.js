/* eslint-disable no-unreachable */
const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADDITEM':
      // CHECK IF ITEM EXISTS
      const exist = state.find((x) => x.id === product.id);
      //   if the item exists, map through the state and add qty key and increment value by 1.
      if (exist) {
        return state.map((x) =>
          x.id === product.id
            ? { ...x, qty: x.qty + 1, price: x.price + product.price }
            : x
        );
      } else {
        //   if the item doesn't exist just return the state
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case 'DELITEM':
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
