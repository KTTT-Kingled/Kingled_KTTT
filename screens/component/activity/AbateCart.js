import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button,Text,View,StyleSheet,ScrollView,TextInput} from 'react-native'
import Line from './ProgressLine/Line.js'
import CircleBackground from './ProgressLine/CircleBackground.js';
import ProgressLine from './ProgressLine/ProgressLine.js'
import LineCart from './ProgressLine/LineCart.js'
import SectionListAbate from './SectionList/SectionListAbate.js'
import HeaderComponent from '../headerComponent.js'




const AbateCart = ({ navigation }) => {
    return (
        <ScrollView>
        <HeaderComponent/>
        <View style={styles.container}>
        <View style={{alignItems: 'center',marginTop:8,marginBottom:8}}>
            <Text style={{color:"#425C59",fontSize:24}}>THÔNG TIN NHẬN HÀNG</Text>
        </View>
        <View style={styles.progress}>
            <Line></Line>
            <CircleBackground></CircleBackground>
            <View style={[styles.circle,styles.circle2,styles.circleColor]}></View>
            <View style={[styles.circle,styles.circle3,styles.circleColor]}></View>
            <View style={[styles.circle,styles.circle4]}></View>
        </View>
        <ProgressLine></ProgressLine>
        <View style={styles.containerList}>

            <LineCart ></LineCart>
            
            <Text style={{color:"#425C59",marginBottom:12,marginTop:12,fontSize:18,fontWeight:"bold"}}>
                Chọn phương thức thanh toán
            </Text>

            
            <LineCart ></LineCart>
            <Text style={{color:"#425C59",marginTop:8,fontWeight:"bold"}}>Thanh toán khi nhận hàng</Text>
            <View 
            style={{backgroundColor:"#425C59",paddingTop:12,paddingBottom:12,width:"100%",alignItems:"center",borderRadius:2,marginTop:12,marginBottom:12}}
            onStartShouldSetResponder={
            () => ('OnPress', navigation.navigate('ConfirmCart'))
            }>
                <Text style={{color:"#FFFFFF",fontSize:18}}>THANH TOÁN KHI NHẬN HÀNG</Text>
            </View>
            <Text style={{color:"#FF792E",marginBottom:12,fontSize:18}}>Sản phẩm của tôi</Text>
            <LineCart ></LineCart>
            <SectionListAbate/>
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
            () => ('OnPress', navigation.navigate('ConfirmCart'))
            }>
                <Text style={{color:"#FFFFFF",fontSize:18}}>XÁC NHẬN</Text>
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
        backgroundColor:"#E9E9E9",
      paddingBottom:50,paddingTop: 10

      },
      progress:{
          marginTop: 15,
          width:"100%"
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
  });
  export default AbateCart;