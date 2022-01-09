import React, { useEffect, useState } from 'react';
export const OrderContext = React.createContext({});

export const OrderProvider = ({children}) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (order.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    // set total = all order.price*order.quantity
    let totalPrice = 0;
    order.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
    console.log(isEmpty, order.length, total);
    console.log(order);
  }, [order, isEmpty, total]);

  const addOrder = product => {
    // increase quantity of product if it is already in order, else add new product
    let newOrder = [...order];
    let index = newOrder.findIndex(item => item.code === product.code);
    if (index !== -1) {
      newOrder[index].quantity += 1;
    } else {
      newOrder.push(product);
    }
    setOrder(newOrder);
    console.log('Thêm thành công');
  };

  const deleteOrder = code => {
    let newOrder = [...order];
    let index = newOrder.findIndex(item => item.code === code);
    if (index !== -1) {
      newOrder.splice(index, 1);
    }
    setOrder(newOrder);
    console.log('Xóa thành công');
  };

  const AddOne = code => {
    setOrder(
      order.map(res =>
        res.code === code ? {...res, quantity: res.quantity + 1} : res
      )
    );
    console.log('Added One to ' + code);
  };

  const MinusOne = code => {
    // if quantity of product is 1, delete product
    let newOrder = [...order];
    let index = newOrder.findIndex(item => item.code === code);
    if (index !== -1) {
      if (newOrder[index].quantity === 1) {
        deleteOrder(code);
      } else {
        setOrder(
          order.map(res =>
            res.code === code ? {...res, quantity: res.quantity - 1} : res
          )
        );
      }
    }
    console.log('Minus One to ' + code);
  };

  const DeleteAll = () => {
    setOrder([]);
    console.log('Deleted All');
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        addOrder,
        deleteOrder,
        DeleteAll,
        isEmpty,
        total,
        AddOne,
        MinusOne,
      }}>
      {children}
    </OrderContext.Provider>
  );
};
