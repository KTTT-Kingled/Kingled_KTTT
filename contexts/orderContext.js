import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
export const OrderContext = React.createContext({});

export const OrderProvider = ({children}) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        console.log(isEmpty, order.length);
        if (order.length === 0) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }, [order, isEmpty]);

    const addOrder = (product) => {
        setOrder([...order, product]);
        Alert.alert('Thêm thành công');
    };

    const deleteOrder = (id) => {
        setOrder(order.filter(res => res.id !== id));
        Alert.alert('Xóa thành công');
    };

    const editOrder = (id, product) => {
        setOrder(order.map(res => res.id === id ? product : res));
        Alert.alert('Sửa thành công');
    };

    return (
        <OrderContext.Provider value={{order, addOrder, deleteOrder, editOrder, isEmpty}}>
            {children}
        </OrderContext.Provider>
    );
};
