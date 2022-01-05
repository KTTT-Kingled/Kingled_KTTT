import React , {useState}from "react";
import { View , Text, StyleSheet,Image ,TextInput,ScrollView,Modal,TouchableOpacity,SafeAreaView} from "react-native"
import DropdownMenu from 'react-native-dropdown-menu';
import {ModalPicker} from './modal/ModalPicker.js'
import {ModalPickerProvince} from './modal/ModalPickerProvin.js'
import {ModalPickerVillage} from './modal/ModalPickerVillage.js'
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
//   import "@reach/combobox/styles.css";
const Register =  ({navigation}) => {
    const [chooseData,setchooseData] = useState('Tỉnh/Thành phố');
    const [isModalVisible,setisModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }
    const setData = (option) => {
        setchooseData(option)
    }

    const [chooseData1,setchooseData1] = useState('Quận/Huyện');
    const [isModalVisible1,setisModalVisible1] = useState(false);
    const changeModalVisibility1 = (bool) => {
        setisModalVisible1(bool)
    }
    const setData1 = (option) => {
        setchooseData1(option)
    }
    const [chooseData2,setchooseData2] = useState('Xã/Phường');
    const [isModalVisible2,setisModalVisible2] = useState(false);
    const changeModalVisibility2 = (bool) => {
        setisModalVisible2(bool)
    }
    const setData2 = (option) => {
        setchooseData2(option)
    }
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
                    {/*  */}
                        <View style={[styles.phone1,styles.elevation]} >
                            <SafeAreaView style={styles.container1}>
                                <TouchableOpacity
                                    onPress={()=>changeModalVisibility(true)}
                                    style={styles.touchableOpacity}
                                >
                                    <Text style={styles.text}>{chooseData}</Text>
                                </TouchableOpacity>
                                <Modal
                                    transparent= {true}
                                    animationType="fade"
                                    visible={isModalVisible}
                                    nRequestClose={()=>changeModalVisibility(false)}
                                >
                                    <ModalPicker
                                        changeModalVisibility={changeModalVisibility}
                                        setData = {setData}
                                    />
                                </Modal>
                            </SafeAreaView>
                        </View>
                        <View style={[styles.phone1,styles.elevation]}>
                        <SafeAreaView style={styles.container1}>
                            <TouchableOpacity
                                onPress={()=>changeModalVisibility1(true)}
                                style={styles.touchableOpacity}
                                
                            >
                                <Text style={styles.text}>{chooseData1}</Text>
                            </TouchableOpacity>
                            <Modal
                                transparent= {true}
                                animationType="fade"
                                visible={isModalVisible1}
                                nRequestClose={()=>changeModalVisibility1(false)}
                            >
                                <ModalPickerProvince
                                    changeModalVisibility={changeModalVisibility1}
                                    setData = {setData1}
                                />
                            </Modal>
                        </SafeAreaView>
                        </View>
                        <View style={[styles.phone1,styles.elevation]}>
                        <SafeAreaView style={styles.container1}>
                            <TouchableOpacity
                                onPress={()=>changeModalVisibility2(true)}
                                style={styles.touchableOpacity}
                            >
                                <Text style={styles.text}>{chooseData2}</Text>
                            </TouchableOpacity>
                            <Modal
                                transparent= {true}
                                animationType="fade"
                                visible={isModalVisible2}
                                nRequestClose={()=>changeModalVisibility2(false)}
                            >
                                <ModalPickerVillage
                                    changeModalVisibility={changeModalVisibility2}
                                    setData = {setData2}
                                />
                            </Modal>
                        </SafeAreaView>
                        </View>
                    {/*  */}
                    <View style={[styles.phone2,styles.elevation]}>
                        <TextInput style={styles.input} placeholder="Địa chỉ nhà..."   placeholderTextColor="black"/>  
                    </View>
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Đăng ký</Text>
                    </View>
                    {/* <View style={styles.loginBtn} onStartShouldSetResponder={
              () => ('OnPress', navigation.navigate('ComboBox'))
            }>
                        <Text style={styles.loginBtnText}>Trang combobox</Text>
                    </View> */}

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
        height:980,
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
        height:826,
        borderTopLeftRadius: 90,
        backgroundColor:"#F5F5F5",alignItems:"center",
        justifyContent:"center",
    },
    login:{
        width:"84%",
        height:"64%",
        // backgroundColor:"red",
        position:"absolute",
        top: "4%",
        alignItems:"center",
        // justifyContent:"center",
        
    },
    phone:{
        width:"100%",
        height:"18%",
        // backgroundColor:"blue",
        paddingLeft: 10,
        paddingTop:4,
        borderRadius:14,
        boxShadow:"22 22 10 22  #15ad9b",
        marginTop:14,
        borderColor: "#425C59",
        borderWidth: 0.5,
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
        marginTop: 16,
        marginBottom:6
        // justifyContent:"center",
    },
    loginBtnText:{
        fontSize:18,
        top:"20%",
        color:"white",
    },
    text:{
        // marginVertical: 20,
        fontSize:16,color:"black",marginLeft: 10
    },
    touchableOpacity:{
        // backgroundColor: "orange",
        alignSelf: 'stretch',
        // paddingHorizontal: 20,
    },
    phone1:{
        width:"100%",
        height:"7%",
        // backgroundColor:"blue",
        paddingLeft: 10,
        paddingTop:4,
        borderRadius:14,
        boxShadow:"22 22 10 22  #15ad9b",
        marginTop:14,
        borderColor: "#425C59",
        borderWidth: 0.5,
        borderRadius: 10

    },
    phone2:{
        width:"100%",
        height:"9%",
        // backgroundColor:"blue",
        paddingLeft: 10,
        paddingTop:4,
        borderRadius:14,
        boxShadow:"22 22 10 22  #15ad9b",
        marginTop:14,
        borderColor: "#425C59",
        borderWidth: 0.5,
        borderRadius: 10

    },
})
