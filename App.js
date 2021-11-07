





import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  Image, Platform, StyleSheet, Text, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import logo from './assets/images/logo.png';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import QrScreen from './screens/QrScreen';


const Tab = createBottomTabNavigator();
 export default class Myapp extends Component
{
   constructor(){
     super();
     this.state = {
     isVisible : true,
    };
  }
   Hide_Splash_Screen=()=>{
    this.setState({
      isVisible : false,
    });
  }

  componentDidMount(){
    var that = this;
    setTimeout(function(){
      that.Hide_Splash_Screen();
    }, 3000);
   }

    render()
    {
        let Splash_Screen = (
          <View style={styles.container}>
              <View style={styles.Logo}>
                  <Image source={logo} style={{width: '80%',height: '80%',resizeMode: 'contain'}}/>
              </View>
              <View style={{top: '86%'}}>
                  <Text style={{fontSize: 16,color:'white'}}>Kingled.vn</Text>
              </View>
          </View>
             );
         return (
          <NavigationContainer>

          <Tab.Navigator


            screenOptions={({ route }) => ({
              tabBarStyle: { position: 'absolute',backgroundColor: '#425C59',height:60,bottom:0,paddingBottom:4},

              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Trang chủ') {
                  iconName = focused
                    ? 'home'
                    : 'home';
                } else if (route.name === 'Đăng nhập') {
                  iconName = focused ? 'sign-in-alt' : 'sign-in-alt';
                } else if (route.name === 'Tra bảo hành') {
                  iconName = focused ? 'qrcode' : 'qrcode';
                  return <Ionicons name={iconName} size={size = 30} color={color} style={{}}
                  />;
                } else if (route.name === 'Giỏ hàng') {
                  iconName = focused ? 'cart-arrow-down' : 'cart-arrow-down';
                } else if (route.name === 'Sản phẩm') {
                  iconName = focused ? 'lightbulb' : 'lightbulb';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size = 25} color={color} style={{}}
                />;
              },


              tabBarActiveTintColor: '#FFD461',
              tabBarInactiveTintColor: '#FFF',
              tabBarActiveBackgroundColor:'#425C59',
              tabBarInactiveBackgroundColor:'#425C59',
              headerShown: false,

            })}
          >
            <Tab.Screen name="Trang chủ" component={HomeScreen} />
            <Tab.Screen name="Sản phẩm" component={ProductScreen} />
            <Tab.Screen name="Tra bảo hành" component={QrScreen} />
            <Tab.Screen name="Giỏ hàng" component={CartScreen} />
            <Tab.Screen name="Đăng nhập" component={LoginScreen} />

          </Tab.Navigator>
          {
                  (this.state.isVisible === true) ? Splash_Screen : null
                }
        </NavigationContainer>
            //  <View style = { styles.MainContainer }>
            //     <Text style={{textAlign: 'center'}}> Splash Screen Example</Text>
            //      {
            //       (this.state.isVisible === true) ? Splash_Screen : null
            //     }
            // </View>
              );
    }
}
 const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    },

    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
      },

    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        flex:1,
    },
    container:{
      position: 'absolute',

      flex: 1,
      alignItems:'center',
      backgroundColor:'#425C59',
      height:'100%',
      width: '100%',
  },
  Logo:{
      width:'100%',
      height:'22%',
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:'18%',
  },
});
