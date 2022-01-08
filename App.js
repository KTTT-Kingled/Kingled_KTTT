import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import logo from './assets/images/logo.png';
import { UserContext } from './contexts/userContext';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import QrScreen from './screens/QrScreen';
import UserScreen from './screens/UserScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const {user} = useContext(UserContext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#ffba07',
            height: 60,
            paddingBottom: 6,
          },

          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Đăng nhập') {
              iconName = focused ? 'sign-in-alt' : 'sign-in-alt';
            } else if (route.name === 'Tra bảo hành') {
              iconName = focused ? 'qrcode' : 'qrcode';
              return (
                <Ionicons
                  name={iconName}
                  size={(size = 30)}
                  color={color}
                />
              );
            } else if (route.name === 'Giỏ hàng') {
              iconName = focused ? 'cart-arrow-down' : 'cart-arrow-down';
            } else if (route.name === 'Sản phẩm') {
              iconName = focused ? 'lightbulb' : 'lightbulb';
            } else if (route.name === 'Người dùng') {
              iconName = focused ? 'user-alt' : 'user-alt';
            }
            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={(size = 25)}
                color={color}
                style={{}}
              />
            );
          },

          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#FFF',
          tabBarActiveBackgroundColor: '#ffba07',
          tabBarInactiveBackgroundColor: '#425C59',
          headerShown: false,
        })}>
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Sản phẩm" component={ProductScreen} />
        <Tab.Screen name="Tra bảo hành" component={QrScreen} />
        <Tab.Screen name="Giỏ hàng" component={CartScreen} />
        {
          user.auth ? (
        <Tab.Screen name="Người dùng" component={UserScreen} />
          ) : (
        <Tab.Screen name="Đăng nhập" component={LoginScreen} />
          )
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image
          source={logo}
          style={{width: '80%', height: '80%', resizeMode: 'contain'}}
        />
      </View>
      <View style={{top: '86%'}}>
        <Text style={{fontSize: 16, color: 'white'}}>Kingled.vn</Text>
      </View>
    </View>
  );
}

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 666);
  }, []);

  return (
    <View style={{flex: 1}}>
      {isVisible ? <SplashScreen /> : <TabNavigator />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    flex: 1,
  },
  container: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#425C59',
    height: '100%',
    width: '100%',
  },
  Logo: {
    width: '100%',
    height: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '18%',
  },
});
