import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button,Text,View,StyleSheet} from 'react-native'
import Line from './ProgressLine/Line.js'
import CircleBackground from './ProgressLine/CircleBackground.js';
import ProgressLine from './ProgressLine/ProgressLine.js'
import HeaderComponent from '../headerComponent.js'




const EmptyProduct = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderComponent/>
            <View style={{alignItems: 'center',marginTop:36,marginBottom:8}}>
                <Text style={{color:"#425C59",fontSize:24}}>THÔNG TIN GIỎ HÀNG</Text>
            </View>
            <View style={styles.progress}>
                <Line></Line>
                <CircleBackground></CircleBackground>
                <View style={[styles.circle,styles.circle2]}></View>
                <View style={[styles.circle,styles.circle3]}></View>
                <View style={[styles.circle,styles.circle4]}></View>
            </View>
            <ProgressLine></ProgressLine>
            <View style={{padding:20,alignItems: 'center'}}>
                <Text style={{color:"#425C59",fontSize:20}}>Bạn cần nâng cấp tài khoản để có</Text>
                <Text style={{color:"#425C59",fontSize:20}}>thể sử dụng chức năng này</Text>
            </View>
            <View 
            style={{backgroundColor:"#425C59",paddingTop:12,paddingBottom:12,paddingRight:20,paddingLeft:20,borderRadius:2}}
            onStartShouldSetResponder={
              () => ('OnPress', navigation.navigate('CartProduct'))
            }>
                <Text style={{color:"#FFFFFF",fontSize:18}}>NÂNG CẤP NGAY</Text>
            </View>
            
            
        </View>
      );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor:"#E9E9E9"
    },
    progress:{
        marginTop: 15,
        marginBottom: 1,
        width:"100%",
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
    btnNext:{
        backgroundColor:"red"
    }
  });
  export default EmptyProduct;