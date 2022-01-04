import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Register =  ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.Logo}>
                <Image source={require('../assets/images/logo.png')} style={{width: "60%",height: "60%",resizeMode: 'contain'}}/>
            </View>
            <View style={styles.loginscreen}>
                <View style={styles.login}>
                    <View style={[styles.phone,styles.elevation]}>

                        <Text style={styles.textPhone}>Họ và tên</Text>
                        <TextInput style={styles.input} placeholder="Nhập họ và tên của bạn"   placeholderTextColor="#D7D7D7"/>  
                    </View>
                    <View style={[styles.phone,styles.elevation]}>

                        <Text style={styles.textPhone}>Số điện thoại</Text>
                        <TextInput style={styles.input} placeholder="Nhập số điện thoại của bạn"  keyboardType="numeric" placeholderTextColor="#D7D7D7"/>  
                    </View>
                    <View style={[styles.phone,styles.elevation]}>

                        <Text style={styles.textPhone}>Mật khẩu</Text>
                        <TextInput style={styles.input} placeholder="Nhập mật khẩu"   placeholderTextColor="#D7D7D7"/>  
                    </View>
                    <View style={[styles.phone,styles.elevation]}>

                        <Text style={styles.textPhone}>Nhập lại mật khẩu</Text>
                        <TextInput style={styles.input} placeholder="Nhập lại mật khẩu"   placeholderTextColor="#D7D7D7"/>  
                    </View>
                    
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Đăng ký</Text>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    );
};

export default Register;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#425C59",
        height:800,
    },
    Logo:{
        width:"100%",
        height:154,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:0
    },
    loginscreen:{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:"80%",
        borderTopLeftRadius: 90,
        backgroundColor:"#F8F8F8",
        alignItems:"center",
        justifyContent:"center",
    },
    login:{
        width:"84%",
        height:"65%",
        //backgroundColor:"red",
        position:"absolute",
        top: "10%",
        alignItems:"center",
        // justifyContent:"center",
        
    },
    phone:{
        width:"100%",
        height:"20%",
        backgroundColor:"white",
        paddingLeft: 10,
        paddingTop:12,
        borderRadius:10,
        elevation: 3,
        marginTop:22,
        paddingBottom: 12,
        //borderColor: "#425C59",
        //borderWidth: 0.5,

    },
    textPhone:{
        color:"black",
        fontSize:15,
    },
    input:{
        // backgroundColor:"black",
        color:"black",
        width:"90%",
    },
    loginBtn:{
        backgroundColor:"#425C59",
        width:200,
        height:44,
        borderRadius:38,
        alignItems:"center",
        marginTop: 16,
        marginBottom:6
        // justifyContent:"center",
    },
    loginBtnText:{
        fontSize:18,
        top:"20%",
        color:"white",
    },
})
