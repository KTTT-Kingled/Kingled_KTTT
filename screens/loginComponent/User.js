import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import numberWithCommas from '../../utils/thousandSeperator.js';
import LineCart from '../component/activity/ProgressLine/LineCart.js';
import HeaderComponent from '../component/headerComponent.js';


const User = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent />
      <View style={styles.container}>
         <View style={styles.notFlex}>
         <Text style={styles.infor}>THÔNG TIN ĐẠI LÝ</Text>
          <View style={styles.containerInline}>
              <Text style={styles.textLeft}>Tên đại lý       : </Text>
              <Text style={styles.textRight}>NGUYEN VAN THANH</Text>
          </View>
          <View style={styles.containerInline}>
              <Text style={styles.textLeft}>Họ và tên        : </Text>
              <Text style={styles.textRight}>NGUYEN VAN THANH</Text>
          </View>
          <View style={styles.containerInline}>
              <Text style={styles.textLeft}>Số điện thoại : </Text>
              <Text style={styles.textRight}>037-656-7321</Text>
          </View>
          <View style={styles.containerInline}>
              <Text style={styles.textLeft}>Email               : </Text>
              <Text style={styles.textRight}>thanh2k1582@gmail.com</Text>
          </View>
          <View style={styles.containerInline2}>
              <Text style={styles.textLeft}>Địa chỉ             : </Text>
              <Text style={styles.textRight}>Thôn Tây Thuận , xã Bình Trung , huyện Bình Sơn, tỉnh Quảng Ngãi</Text>
          </View>
          <View style={[styles.containerInline2,styles.mt4]}>
             <View style={styles.changePassword}>
                  <Icon
                        name="key"
                        color="white"
                        size={18}
                        style={{right: 14,position:"absolute",left:10,top:10}}
                  />
                  <Text style={styles.textBtn}>Đổi mật khẩu</Text>
             </View>
             <View style={[styles.changePassword,styles.btnLogout]}>
                  <Icon
                        name="log-out"
                        color="white"
                        size={18}
                        style={{right: 14,position:"absolute",left:10,top:10}}
                  />
                  <Text style={[styles.textBtn,styles.textLogout]}>Đăng xuất</Text>
             </View>
          </View>
          
         </View>
      </View>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingBottom: 40,
  },
  infor:{
    color:"#425C59",fontSize:30,fontWeight:"bold",marginBottom:32,
  },
  containerInline:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:6
  },
  containerInline2:{
    flexDirection: 'row',
    marginTop:6
  },
  textLeft:{
    color:"#425C59",fontSize:16,fontWeight:"bold"
  },
  textRight:{
    color:"#425C59",width:220
  },
  notFlex:{
    width: "90%",
    marginTop: 40
    // backgroundColor:"pink",
  },
  changePassword:{
    width:140,
    height:40,
    backgroundColor: "#425C59",
    borderRadius: 20
  },
  textBtn:{
    position: "absolute",
    top:9,right:16,color: "white",
  },
  mt4:{
    marginTop:66
  },
  btnLogout:{
    width:120,
    marginLeft:20
  },
});

export default User;
