import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../headerComponent.js';
import Circle1 from './ProgressLine/Circle1';
import Circle2Gr from './ProgressLine/Circle2Gr';
import Circle3Gr from './ProgressLine/Circle3Gr';
import Circle4Gr from './ProgressLine/Circle4Gr';
import LineGray from './ProgressLine/LineGray';
import SectionListCard from './SectionList/SectionListCart.js';

const CartProduct = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <HeaderComponent />
      <View style={styles.titleTab}>
      <Icon
        name="cart-outline"
        color="#f0ad00"
        size={22}
        style={{left: 0}}
      />
        <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
          Thông tin giỏ hàng
        </Text>
      </View>
      <View style={styles.progress}>
          <View style={styles.colProgress}>
            <Circle1 />
            <Text style={{color:'#4cb71a', fontSize: 12,textAlign:'center',}}>Giỏ hàng</Text>
          </View>
          <LineGray />
          <View style={styles.colProgress}>
            <Circle2Gr />
            <Text style={{color:'#ddd', fontSize: 12,textAlign:'center',}}>Địa chỉ</Text>
          </View>
          <LineGray />
          <View style={styles.colProgress}>
            <Circle3Gr />
            <Text style={{color:'#ddd', textAlign:'center', fontSize: 12,}}>Thanh toán</Text>
          </View>
          <LineGray />
          <View style={styles.colProgress}>
            <Circle4Gr />
            <Text style={{color:'#ddd', fontSize: 12,textAlign:'center',}}>Xác nhận</Text>
          </View>
        </View>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <SectionListCard />
        </View>
        <View style={styles.payment}>
          <View style={styles.total}>
            <View style={styles.rowTotalText}>
              <Text style={styles.totalText1}>Tổng tiền</Text>
              <Text style={styles.totalText2}>4.078.000 VNĐ</Text>
            </View>
          </View>
          <View style={styles.paymentBTN}>
            <View onStartShouldSetResponder={() => (
              'OnPress', navigation.navigate('AddressCart')
            )}><Text style={styles.paymentText}>Thanh toán</Text></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8f8f8',
    paddingBottom: 50,
    //paddingTop: 10,
      // paddingLeft: 5,
      // paddingRight: 5,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //width: 65,
    backgroundColor: 'white',
    padding: 30,
    marginBottom: 4,
    borderRadius: 4,
  },

  containerList: {
    flex: 1,
    width: '100%',
    padding: 6,
    backgroundColor: 'white',
  },
  totalAmountFlex: {
    flex: 1,
  },
  totalAmountText: {
    color: '#F32E2E',
    fontSize: 15,
  },
  colProgress:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //marginRight: -10,
    //marginLeft: -10,
  },
  titleTab:{
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#b0b0b0',
    borderRadius: 4,
    marginBottom: 3,
    flex: 1,
    flexDirection: 'row',
  },
  payment:{
    flex: 1,
    flexDirection: 'row',
    height: 70,
    marginBottom: 14,
  },
  paymentBTN:{
    flex: 4,
    justifyContent: 'flex-end',
    backgroundColor: '#417a76',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderColor: '#417a76',
  },
  paymentText:{
    // alignItems: 'center',
    // justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  total:{
    flex: 6,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#417a76',
    padding: 10,
    justifyContent: 'center',
  },
  totalText1:{
    fontSize: 12,
    color: '#363636',
    marginRight: 5,
  },
  totalText2:{
    fontSize: 17,
    color: '#e7a703',
    fontWeight: 'bold',
  },
  rowTotalText:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  }
});

export default CartProduct;
