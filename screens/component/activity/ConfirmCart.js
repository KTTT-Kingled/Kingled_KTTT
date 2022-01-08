import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../headerComponent.js';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';
import LineCart from './ProgressLine/LineCart.js';
import SectionListAbate from './SectionList/SectionListAbate.js';

const ConfirmCart = ({ navigation }) => {
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
            <CircleBackground />
            <Line />
            <CircleBackground />
            <Line />
            <CircleBackground />
        </View>
        <View style={styles.progressTextContainer}>
            <Text style={{marginLeft:'7%',color:'#4cb71a'}}>Giỏ hàng</Text>
            <Text style={{marginLeft:'10%',color:'#4cb71a'}}>Địa chỉ</Text>
            <Text style={{marginLeft:'8%',color:'#4cb71a'}}>Thanh toán</Text>
            <Text style={{marginLeft:'6%',color:'#4cb71a'}}>Xác nhận</Text>
        </View>
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
        backgroundColor:"white",
      paddingBottom:50,paddingTop:10

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
      textConfirm:{
          color:"#585757",
      },
      progressTextContainer:{
        width:'100%',
        marginBottom:0,
        flexDirection:'row',
    },
  });
  export default ConfirmCart;