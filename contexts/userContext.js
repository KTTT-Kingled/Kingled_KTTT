import React, { useState } from 'react';
import { Alert } from 'react-native';
export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({userLogged: {}, token: '', auth: false});

  const login = (userLogged, token) => {
    Alert.alert('Đăng nhập thành công','Xin chào ' + userLogged.fullName);
    setUser({userLogged, token, auth: true});
  };

  const logout = () => {
    Alert.alert('Đăng xuất thành công','Bạn đã đăng xuất');
    setUser({userLogged: {}, token: '', auth: false});
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};
