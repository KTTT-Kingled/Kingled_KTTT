import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Circle2 from '../activity/ProgressLine/Circle2';
import HeaderComponent from '../headerComponent.js';
import Circle3Gr from './ProgressLine/Circle3Gr';
import Circle4Gr from './ProgressLine/Circle4Gr';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';
import LineCart from './ProgressLine/LineCart.js';
import LineGray from './ProgressLine/LineGray';
import SectionListAddress from './SectionList/SectionListAddress.js';

const AddressCart = ({ navigation }) => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <ScrollView>
            <HeaderComponent/>
            <View style={styles.container}>
            <View style={{alignItems: 'center',marginTop:8,marginBottom:8}}>
                <Text style={{color:"#425C59",fontSize:24}}>THÔNG TIN NHẬN HÀNG</Text>
            </View>
            <View style={styles.progress}>
                <CircleBackground />
                <Line />
                <Circle2 />
                <LineGray />
                <Circle3Gr />
                <LineGray />
                <Circle4Gr />
            </View>
            <View style={styles.progressTextContainer}>
                <Text style={{marginLeft:'7%',color:'#4cb71a'}}>Giỏ hàng</Text>
                <Text style={{marginLeft:'10%',color:'#4cb71a'}}>Địa chỉ</Text>
                <Text style={{marginLeft:'8%',color:'#dddddd'}}>Thanh toán</Text>
                <Text style={{marginLeft:'6%',color:'#dddddd'}}>Xác nhận</Text>
            </View>
            <View style={styles.containerList}>

                <LineCart ></LineCart>
                
                <Text style={{color:"#425C59",marginBottom:12,marginTop:12,fontSize:18,fontWeight:"bold"}}>
                     hàng
                </Text>

                <View style={{width:"100%",marginBottom:12}}>
                        <View style={styles.nameAndInput}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>Họ tên</Text>
                                </View>
                                <TextInput
                                style={styles.inputInfor}
                                placeholder="Điền họ và tên..."
                                placeholderTextColor="#313131"
                                // keyboardType="numeric"
                                 />
                        </View>
                        <View style={styles.nameAndInput}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>Email</Text>
                                </View>
                                <TextInput
                                style={styles.inputInfor}
                                placeholder="Điền email..."
                                placeholderTextColor="#313131"
                                // keyboardType="numeric"
                                 />
                        </View>
                        <View style={styles.nameAndInput}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>Điện thoại</Text>
                                </View>
                                <TextInput
                                style={styles.inputInfor}
                                placeholder="Điền số điện thoại..."
                                placeholderTextColor="#313131"
                                keyboardType="numeric"
                                 />
                        </View>
                        <View style={styles.nameAndInput}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>Ngày nhận</Text>
                                </View>
                                <TextInput
                                style={styles.inputInfor}
                                placeholder="Ghi rõ ngày nhận hàng..."
                                placeholderTextColor="#313131"
                                // keyboardType="numeric"
                                 />
                        </View>
                        <View style={styles.nameAndInput}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>Quận huyện</Text>
                                </View>
                                <TextInput
                                style={styles.inputInfor}
                                placeholder="Quận huyện nhận hàng..."
                                placeholderTextColor="#313131"
                                // keyboardType="numeric"
                                 />
                        </View>
                        <View style={styles.nameAndInput}>
                                <View style={styles.nameView}>
                                    <Text style={styles.nameText}>Địa chỉ</Text>
                                </View>
                                <TextInput
                                style={styles.inputInfor}
                                placeholder="Địa chỉ nhận hàng..."
                                placeholderTextColor="#313131"
                                // keyboardType="numeric"
                                 />
                        </View>
                        <View style={{flexDirection:"row"}}>
                                <View style={{flex:1}}>
                                    <Text style={styles.nameText}>Ghi chú</Text>
                                </View>
                                <TextInput
                                multiline
                                numberOfLines={8}
                                onChangeText={onChangeNumber}
                                value={number}
                                style={{flex:2.3,borderWidth:1,borderRadius:4,borderColor:"#313131",paddingLeft:10}}
                                placeholder="Địa chỉ nhận hàng..."
                                placeholderTextColor="#313131"
                                // keyboardType="numeric"
                                 />
                        </View>
                </View>
                <LineCart ></LineCart>

                <View 
                style={{backgroundColor:"#425C59",paddingTop:12,paddingBottom:12,width:"100%",alignItems:"center",borderRadius:2,marginTop:12,marginBottom:12}}
                onStartShouldSetResponder={
                () => ('OnPress', navigation.navigate('AbateCart'))
                }>
                    <Text style={{color:"#FFFFFF",fontSize:18}}>CẬP NHẬP GIỎ HÀNG</Text>
                </View>
                <Text style={{color:"#FF792E",marginBottom:12,fontSize:18}}>Sản phẩm của tôi</Text>
                <LineCart ></LineCart>
                <SectionListAddress/>
                <View style={{paddingTop:20}}></View>
                <LineCart ></LineCart>
                <View style={{flexDirection: 'row',marginTop:10}}>
                    <Text style={[styles.totalAmountText,styles.totalAmountFlex]}>Tổng tiền tạm tính</Text>
                    <Text style={styles.totalAmountText}>3,444,000</Text>
                    <Text style={styles.totalAmountText}> VNĐ</Text>
                </View>


                <View 
                style={{backgroundColor:"#FF792E",paddingTop:12,paddingBottom:12,width:"100%",alignItems:"center",borderRadius:2,marginTop:12,marginBottom:12}}
                onStartShouldSetResponder={
                () => ('OnPress', navigation.navigate('AbateCart'))
                }>
                    <Text style={{color:"#FFFFFF",fontSize:18}}>TIẾN HÀNH THANH TOÁN</Text>
                </View>

            </View>
        </View>
        </ScrollView>
    
    )
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor:"#fff",
      paddingBottom:50,paddingTop: 10

    },
    progress:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle:{
        width:22,
        height:22,
        backgroundColor:"#E9E9E9",
        borderRadius:100,
        marginTop:"-3.2%",
        marginLeft:"16%",
        borderColor:"#FF792E",
        borderWidth:2
    },
    circle2:{
        marginTop:"-6.2%",
        marginLeft:"38%",
    },
    circle3:{
        marginTop:"-6.2%",
        marginLeft:"60%",
    },
    circle4:{
        marginTop:"-6.2%",
        marginLeft:"82%",
    },
    circleColor:{
        backgroundColor:"#FF792E"
    },
    containerList:{
        width:"100%",
        padding:16
    },
    totalAmountFlex:{
        flex:1,
    },
    totalAmountText:{
        color:"#FF2E2E",
        fontSize:15
    },
    nameAndInput:{
        width:"100%",
        justifyContent:"center",
        flexDirection:"row",
        marginBottom: 12
    },
    nameView:{
        color:"#313131",
        flex:1,
        justifyContent:"center"
    },
    nameText:{
        color:"#313131",
        fontSize:16
    },
    inputInfor:{
        borderColor:"black",
        borderWidth:1,
        flex:2.3,
        height:40,
        borderRadius:4,
        paddingLeft:10,
        color:"#313131"
    },
    progressTextContainer:{
        width:'100%',
        // height:30,
        // backgroundColor:"black",
        marginBottom:0,
        flexDirection:'row',
    },

  });
  export default AddressCart;