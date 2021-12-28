import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../../assets/images/logo.png";

const Login =  ({navigation}) => {
    return (
        <ScrollView>
            {/* scrollView */}
        <View style={styles.container}>
        <View style={styles.Logo}>
            <Image source={logo} style={{width: "60%",height: "60%",resizeMode: 'contain'}}/>
        </View>
        <View style={styles.loginscreen}>
            <View style={styles.login}>
                <View style={[styles.phone,styles.elevation]}>

                    <Text style={styles.textPhone}>Số điện thoại</Text>
                    <TextInput style={styles.input} placeholder="Nhập số điện thoại của bạn"  keyboardType="numeric" placeholderTextColor="#D7D7D7"/>  
                </View>
                <View style={[styles.phone,styles.elevation]}>

                    <Text style={styles.textPhone}>Mật khẩu</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TextInput style={styles.input} placeholder="Nhập mật khẩu"  placeholderTextColor="#D7D7D7"/>  
                        
                        <Icon
                        name="eye-off"
                        color="#425C59"
                        size={25}
                        style={{right:14}}
                        />

                    </View>
                </View>
                <View style={{width:"100%",marginTop:8}}>
                    <Text style={{color:"black",left:"66%"}}>Quên mật khẩu?</Text>
                </View>
                <View style={styles.loginBtn} onStartShouldSetResponder={
              () => ('OnPress', navigation.navigate('HomeScreen'))
            }>
                    <Text style={styles.loginBtnText}>Đăng nhập</Text>
                </View>
                <View style={[styles.register]}>
                    <Text style={styles.noAccText}>Chưa có tài khoản ? </Text>
                    <View onStartShouldSetResponder={
              () => ('OnPress', navigation.navigate('Register'))
            }>
                     <Text style={styles.textRegister} >Đăng ký</Text>
                    </View>
                </View>

            </View>
        </View>
    </View>
</ScrollView>
    );
};

export default Login;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#425C59",
        height:700,
    },
    Logo:{
        width:"100%",
        height:"22%",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:0
    },
    loginscreen:{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:"76%",
        borderTopLeftRadius: 90,
        backgroundColor:"#F8F8F8",
        alignItems:"center",
        justifyContent:"center",
    },
    login:{
        width:"84%",
        height:"80%",
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
        //borderColor: "#425C59",
        //borderWidth: 0.5,
        borderRadius: 10

    },
    textPhone:{
        color:"black",
        fontSize:22,
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
        marginTop: 30,
        marginBottom:6
        // justifyContent:"center",
    },
    loginBtnText:{
        fontSize:18,
        top:"20%",
        color:"white",
    },
    register:{
        flexDirection: "row"
    },
    noAccText:{
        color:"#425C59",
    },
    textRegister:{
        color:"#425C59",

    },
    elevation: {
        // elevation: 10,
        shadowColor: '#656565',
        
      },
})
