import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProductScreen from "../screens/ProductScreen";
import QrScreen from "../screens/QrScreen";
import CartScreen from "../screens/CartScreen";

const Tab= createBottomTabNavigator();
const Tabs= ()=>{
    return (
        <Tab.Navigator
            
        >
            <Tab.Screen name="Trang chủ" component={HomeScreen} >
{/* navigation */}
            </Tab.Screen>
            <Tab.Screen name="Sản phẩm" component={ProductScreen} />
            <Tab.Screen name="Tra bảo hành" component={QrScreen} />
            <Tab.Screen name="Giỏ hàng" component={CartScreen} />
            <Tab.Screen name="Đăng nhập" component={LoginScreen} />
        </Tab.Navigator>
    );
};
export default Tabs;