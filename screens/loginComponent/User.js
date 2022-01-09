import * as React from 'react';
import {
  SafeAreaView, StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../component/headerComponent.js';


const User = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent />
      <View style={styles.titleTab}>
        <Icon name="business" color="#f0ad00" size={22} style={{left: 0}} />
        <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
          Thông tin đại lý
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Tên đại lý</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>Đại lý ABC</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Họ và tên</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>Nguyễn Văn A</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Username</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>ANguyen</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Số điện thoại</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>0983 222 196</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Email</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>anguyen@gmail.com</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Tỉnh/Thành phố</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>Thái Nguyên</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Quận/Huyện</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>Thái Nguyên</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Số điện thoại</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>0983 222 196</Text>
          </View>
        </View>
        <View style={styles.AreaInfo}>
          <View style={styles.AreaLeft}>
            <Text style={styles.TextLeft}>Địa chỉ</Text>
          </View>
          <View style={styles.AreaRight}>
            <Text style={styles.TextRight}>93A Tô Ngọc Vân</Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <View style={styles.changePassword}>
            <Text style={styles.textBtn}>Đổi mật khẩu</Text>
          </View>
          <View style={styles.logout}>
            <Text style={styles.textBtn}>Đăng xuất</Text>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 40,

  },
  AreaInfo:{
    //flex: 1,
    flexDirection: 'row',
    padding: 19,
    //alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#b0b0b0',
    borderRadius: 20,

  },
  containerInline:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:6,
    borderBottomWidth: 2,
  },
  containerInline2:{
    flexDirection: 'row',
    marginTop:6
  },
  AreaLeft:{
    flex: 1,
    //fontSize: 12,
    //backgroundColor: 'orange',
    //justifyContent: 'flex-start'
  },
  AreaRight:{
    flex: 1,
    //fontSize: 12,
    //backgroundColor: 'red',
    alignItems: 'flex-end',
  },

  TextLeft:{
    fontSize: 13,
    color: '#363636',
  },
  TextRight: {
    fontSize: 13,
    color: '#888888',
  },

  buttonArea:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  changePassword:{
    backgroundColor: '#417a76',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
    marginRight: 10,
  },
  logout: {
    backgroundColor: '#417a76',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
    marginLeft: 10,
  },
  textBtn:{
    color: "white",
    fontSize: 15
  },
  mt4:{
    marginTop:66
  },
  btnLogout:{
    width:120,
    marginLeft:20
  },
  titleTab: {
    backgroundColor: 'white',
    padding: 15,
    height: 55,
    //borderBottomWidth: 0.2,
    //borderBottomColor: '#b0b0b0',
    borderRadius: 4,
    marginBottom: 5,
    flexDirection: 'row',
  },
});

export default User;
