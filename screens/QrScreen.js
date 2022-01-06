import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import QRCodeimg from "../assets/images/QRCodeimg.png";
import HeaderComponent from '../screens/component/headerComponent.js';

const LoginScreen =  ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComponent/>
            <View style={styles.Logo}>
                <Image source={QRCodeimg} style={{width: "100%",height: "100%",resizeMode: 'contain'}}/>
            </View>
            <View style={{top: "86%"}}>
                <Text style={{fontSize: 16,color:"white"}}>Kingled.vn</Text>
            </View>
        </View>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        backgroundColor:"#425C59",
        height:100,
    },
    Logo:{
        width:"100%",
        height:"40%",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:"18%"
    },
   
})
