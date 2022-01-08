import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
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
    Alert.alert('Thêm thành công');
  };

  const deleteOrder = id => {
    setOrder(order.filter(res => res.id !== id));
    Alert.alert('Xóa thành công');
  };

  const editOrder = (id, product) => {
    setOrder(order.map(res => (res.id === id ? product : res)));
    Alert.alert('Sửa thành công');
  };

  return (
    <OrderContext.Provider
      value={{order, addOrder, deleteOrder, editOrder, isEmpty, total}}>
      {children}
    </OrderContext.Provider>
  );
};
