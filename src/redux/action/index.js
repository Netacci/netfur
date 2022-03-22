// add item

export const addCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

// delete item
export const delCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};
