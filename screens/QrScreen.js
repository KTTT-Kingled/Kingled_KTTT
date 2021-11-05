import React from "react";
import { View , Text , Button,StyleSheet,TextInput,Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import Register from "./Register"
import logo from "../assets/images/logo.png"

const LoginScreen =  ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Image source={logo} style={{width: "80%",height: "80%",resizeMode: 'contain'}}/>
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
        height:"22%",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:"18%"
    },
   
})
