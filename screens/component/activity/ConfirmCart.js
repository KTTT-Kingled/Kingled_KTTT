import React, { useContext, useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../../../contexts/orderContext.js';
import HeaderComponent from '../headerComponent.js';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';

const ConfirmCart = ({navigation, route}) => {

    const [id, setId] = useState('');
    const {DeleteAll} = useContext(OrderContext);


    useEffect(() => {
        setId(route.params.id);
    }, []);

  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.titleTab}>
        <Icon name="cart-outline" color="#f0ad00" size={22} style={{left: 0}} />
        <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
          Thông tin nhận hàng
        </Text>
      </View>
      <View style={styles.progress}>
          <View style={styles.colProgress}>
            <CircleBackground />
            <Text style={{color: '#4cb71a', fontSize: 12, textAlign: 'center'}}>
              Giỏ hàng
            </Text>
          </View>
          <Line />
          <View style={styles.colProgress}>
            <CircleBackground />
            <Text style={{color: '#4cb71a', fontSize: 12, textAlign: 'center'}}>
              Địa chỉ
            </Text>
          </View>
          <Line />
          <View style={styles.colProgress}>
            <CircleBackground />
            <Text style={{color: '#4cb71a', textAlign: 'center', fontSize: 12}}>
              Thanh toán
            </Text>
          </View>
          <Line />
          <View style={styles.colProgress}>
            <CircleBackground />
            <Text style={{color: '#4cb71a', fontSize: 12, textAlign: 'center'}}>
              Xác nhận
            </Text>
          </View>
        </View>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <Text
            style={{
              color: '#417a76',
              marginBottom: 4,
              marginTop: 12,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Đơn hàng với mã đơn hàng: {id} của bạn đã được tạo thành công
          </Text>
          <Text style={styles.textConfirm}>
            Thông tin đơn hàng đã được gửi tới công ty.
          </Text>
          <Text style={styles.textConfirm}>
            Chúng tôi sẽ sớm liên hệ đến bạn.
          </Text>
          <Text style={styles.textConfirm}>
            Cảm ơn bạn đã quan tâm và mua hàng của chúng tôi.
          </Text>
          {/* <Text style={{color:"#FF792E",marginBottom:12,fontSize:18,marginTop:12}}>Sản phẩm của tôi</Text> */}
          {/* <SectionListAbate/> */}

          <Pressable
            style={{
              backgroundColor: '#417a76',
              paddingTop: 12,
              paddingBottom: 12,
              width: '100%',
              alignItems: 'center',
              borderRadius: 2,
              marginTop: 50,
              marginBottom: 12,
              borderRadius: 4,
              fontSize: 15,
            }}
            onPress={() => DeleteAll()}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>
              Tiếp tục mua hàng
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: "100%",
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 190,
  },
  progress: {
    // flex: 1,
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
    width: '100%',
    padding: 16,
  },
  textConfirm: {
    color: '#585757',
  },
  colProgress: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //marginRight: -10,
    //marginLeft: -10,
  },
  titleTab: {
    backgroundColor: 'white',
    padding: 15,
    height: 55,
    borderBottomWidth: 0.2,
    borderBottomColor: '#b0b0b0',
    borderRadius: 4,
    marginBottom: 3,
    flexDirection: 'row',
  },
});
export default ConfirmCart;
