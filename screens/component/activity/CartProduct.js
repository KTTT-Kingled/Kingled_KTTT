import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../headerComponent.js';
import Circle1 from './ProgressLine/Circle1';
import Circle2Gr from './ProgressLine/Circle2Gr';
import Circle3Gr from './ProgressLine/Circle3Gr';
import Circle4Gr from './ProgressLine/Circle4Gr';
import LineCart from './ProgressLine/LineCart.js';
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
      <View style={styles.container}>
        <View style={styles.progress}>
          <View style={styles.colProgress}>
            <Circle1 />
            <Text style={{color:'#ffba07', fontSize: 12,textAlign:'center',}}>Giỏ hàng</Text>
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
        <View style={styles.containerList}>
          <SectionListCard />
          <View
            style={{
              backgroundColor: '#425C59',
              paddingTop: 12,
              paddingBottom: 12,
              width: '100%',
              alignItems: 'center',
              borderRadius: 2,
              marginTop: 12,
              marginBottom: 12,
            }}
            onStartShouldSetResponder={() => (
              'OnPress', navigation.navigate('AddressCart')
            )}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>
              CẬP NHẬP GIỎ HÀNG
            </Text>
          </View>

          <LineCart />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={[styles.totalAmountText, styles.totalAmountFlex]}>
              Tổng tiền tạm tính
            </Text>
            <Text style={styles.totalAmountText}>3,444,000</Text>
            <Text style={styles.totalAmountText}> VNĐ</Text>
          </View>

          <View
            style={{
              backgroundColor: '#FF792E',
              paddingTop: 12,
              paddingBottom: 12,
              width: '100%',
              alignItems: 'center',
              borderRadius: 2,
              marginTop: 12,
              marginBottom: 12,
            }}
            onStartShouldSetResponder={() => (
              'OnPress', navigation.navigate('AddressCart')
            )}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>
              TIẾN HÀNH THANH TOÁN
            </Text>
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
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //width: 65,
    backgroundColor: 'white',
    padding: 30,
    marginBottom: 5,
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
  }
});

export default CartProduct;
