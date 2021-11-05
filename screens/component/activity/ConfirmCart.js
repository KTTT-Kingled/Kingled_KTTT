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







const ConfirmCart = ({ navigation }) => {
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
            <View style={[styles.circle,styles.circle4,styles.circleColor]}></View>
        </View>
        <ProgressLine></ProgressLine>
        <View style={styles.containerList}>

            <LineCart ></LineCart>
            
            <Text style={{color:"#425C59",marginBottom:4,marginTop:12,fontSize:22,fontWeight:"bold"}}>
                Đơn hàng #1 của bạn đã được tạo thành công
            </Text>
            <Text style={styles.textConfirm}>Thông tin đơn hàng đã được gửi tới công ty</Text>
            <Text style={styles.textConfirm}>Chúng tôi sẽ sớm liên hệ đến bạn</Text>
            <Text style={styles.textConfirm}>Cảm ơn bạn đã quan tâm và mua hàng của chúng tôi</Text>
            <Text style={{color:"#FF792E",marginBottom:12,fontSize:18,marginTop:12}}>Sản phẩm của tôi</Text>
            <LineCart ></LineCart>
            <SectionListAbate/>
            <View style={{paddingTop:20}}></View>


            <View 
            style={{backgroundColor:"#FF792E",paddingTop:12,paddingBottom:12,width:"100%",alignItems:"center",borderRadius:2,marginTop:12,marginBottom:12}}
            onStartShouldSetResponder={
            () => ('OnPress', navigation.navigate('ConfirmCart'))
            }>
                <Text style={{color:"#FFFFFF",fontSize:18}}>TIẾP TỤC MUA HÀNG</Text>
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
      paddingBottom:50,paddingTop:10

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
      textConfirm:{
          color:"#585757",
      }
    
  });
  export default ConfirmCart;