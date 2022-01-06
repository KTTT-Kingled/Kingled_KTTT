import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import QRCodeimg from "../assets/images/QRCodeimg.png";
import HeaderComponent from '../screens/component/headerComponent.js';

const LoginScreen =  ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComponent/>
            <View style={styles.Logo}>
                <Image source={QRCodeimg} style={{width: "100%",height: "100%",resizeMode: 'contain',}}/>
            </View>
            <Text style={styles.text1}>Đặt mã QR trong vùng quét</Text>
            <View style={{top: "60%"}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <View style={{flexDirection:"column", alignItems:"center"}}>
                        <Icon
                            name="camera"
                            color="white"
                            size={60}
                        />
                        <Text style={styles.textQR}>Quét mã QR</Text>
                    </View>
                    <View style={styles.verticleLine}></View>
                    <View style={{flexDirection:"column", alignItems:"center"}}>
                        <Icon
                            name="qr-code"
                            color="white"
                            size={60}
                        />
                        <Text style={styles.textQR}>QR/Barcode</Text>
                    </View>
                </View>
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
        height:"38%",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:"18%"
    },
    textQR:{
        color: "white",
        fontSize: 11,
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: "white",
        marginLeft: 20,
        marginRight: 20,
    },
    text1: {
        top: "43%",
        color: "white",
        fontSize: 11,
    },
})
