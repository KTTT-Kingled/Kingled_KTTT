import React, { useContext } from 'react';
import {
  Image, Pressable, SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../../../contexts/orderContext.js';
import numberWithCommas from '../../../utils/thousandSeperator.js';
import HeaderComponent from '../headerComponent.js';
import Circle1 from './ProgressLine/Circle1';
import Circle2Gr from './ProgressLine/Circle2Gr';
import Circle3Gr from './ProgressLine/Circle3Gr';
import Circle4Gr from './ProgressLine/Circle4Gr';
import LineGray from './ProgressLine/LineGray';

const ItemCard = ({title,add,minus,del}) => (
  <View style={styles.item}>
    <View style={styles.itemInformation}>
      <View style={styles.imageContainer}>
        <Image source={{uri: title.img}} style={styles.images} />
      </View>
      <View style={styles.inforContainer}>
        <Text style={styles.name}>{title.name}</Text>
        <Text style={styles.cost}>{numberWithCommas(title.price)} VNĐ</Text>
        <Text style={styles.codeText}>Mã SP: {title.code}</Text>
        <View style={styles.amount}>
          <View style={styles.btnAmount}>
            <Pressable onPress={() => minus(title.code)}>
            <Icon
              name="remove-circle"
              color="#363636"
              size={24}
              //style={{right: 0}}
            />
            </Pressable>
            <View style={styles.inputView}>
              <Text style={{color: '#363636', fontSize: 12}}>
                {numberWithCommas(title.quantity)}
              </Text>
            </View>
            <Pressable onPress={() => add(title.code)}>
            <Icon
              name="add-circle"
              color="#363636"
              size={24}
              //style={{right: 0}}
            />
            </Pressable>
          </View>
          <Pressable onPress={() => {del(title.code);}}>
          <Icon name="trash" color="#363636" size={23} style={{right: 10}} />
          </Pressable>
        </View>
      </View>
    </View>
  </View>
);

const CartProduct = ({navigation}) => {
  const {order, total, AddOne, MinusOne, deleteOrder} = useContext(OrderContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent />
      <View style={styles.titleTab}>
        <Icon name="cart-outline" color="#f0ad00" size={22} style={{left: 0}} />
        <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
          Thông tin giỏ hàng
        </Text>
      </View>
      <View style={styles.progress}>
        <View style={styles.colProgress}>
          <Circle1 />
          <Text style={{color: '#4cb71a', fontSize: 12, textAlign: 'center'}}>
            Giỏ hàng
          </Text>
        </View>
        <LineGray />
        <View style={styles.colProgress}>
          <Circle2Gr />
          <Text style={{color: '#ddd', fontSize: 12, textAlign: 'center'}}>
            Địa chỉ
          </Text>
        </View>
        <LineGray />
        <View style={styles.colProgress}>
          <Circle3Gr />
          <Text style={{color: '#ddd', textAlign: 'center', fontSize: 12}}>
            Thanh toán
          </Text>
        </View>
        <LineGray />
        <View style={styles.colProgress}>
          <Circle4Gr />
          <Text style={{color: '#ddd', fontSize: 12, textAlign: 'center'}}>
            Xác nhận
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <View style={{marginTop: 12, marginBottom: 12}}>
            <SectionList
              sections={[{title: 'Sản phẩm', data: order}]}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <ItemCard title={item} add={AddOne} minus={MinusOne} del={deleteOrder}/>}
            />
          </View>
        </View>
        <View style={styles.payment}>
          <View style={styles.total}>
            <View style={styles.rowTotalText}>
              <Text style={styles.totalText1}>Tổng tiền: </Text>
              <Text style={styles.totalText2}>{numberWithCommas(total)} VNĐ</Text>
            </View>
          </View>
          <View style={styles.paymentBTN}>
            <Pressable onPress={() => navigation.navigate('AddressCart')}>
              <Text style={styles.paymentText}>Thanh toán</Text>
            </Pressable>
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
    backgroundColor: '#F8f8f8',
    paddingBottom: 50,
    //paddingTop: 10,
    // paddingLeft: 5,
    // paddingRight: 5,
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
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '#b0b0b0',
    borderRadius: 4,
    marginBottom: 3,
    flexDirection: 'row',
  },
  payment: {
    // flex: 1,
    flexDirection: 'row',
    height: 70,
    marginBottom: 14,
  },
  paymentBTN: {
    flex: 4,
    backgroundColor: '#417a76',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderColor: '#417a76',
  },
  paymentText: {
    // alignItems: 'center',
    // justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  total: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#417a76',
    padding: 10,
    justifyContent: 'center',
  },
  totalText1: {
    fontSize: 12,
    color: '#363636',
    marginRight: 5,
  },
  totalText2: {
    fontSize: 17,
    color: '#e7a703',
    fontWeight: 'bold',
  },
  rowTotalText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  item: {
    //backgroundColor: "#fff",
    marginVertical: 3,
    //borderColor:'#425C59',
    //borderWidth:1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    borderBottomWidth: 0.2,
    borderBottomColor: '#c2c2c2',
    //elevation: 3,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    color: 'black',
  },
  title: {
    fontSize: 24,
  },
  images: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginLeft: '7%',
    // right:10
  },
  imageContainer: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  inforContainer: {
    flex: 7,
    height: '100%',
  },
  itemInformation: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 15,
    color: '#363636',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  cost: {
    fontSize: 17,
    color: '#e7a703',
    fontWeight: 'bold',
  },
  amount: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteProduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF4646',
  },
  btnAmount: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 10,
  },
  codeText: {
    color: '#a1a1a1',
    fontSize: 12,
  },
  btnSub: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnText: {
    fontSize: 12,
    color: '#000000',
  },
  inputView: {
    width: '30%',
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3,
    borderWidth: 1,
    borderColor: '#363636',
    borderRadius: 50,
  },
});

export default CartProduct;
