import React, { useContext } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../../../contexts/orderContext.js';
import { UserContext } from '../../../contexts/userContext.js';
import numberWithCommas from '../../../utils/thousandSeperator.js';
import HeaderComponent from '../headerComponent.js';
import Circle3 from './ProgressLine/Circle3';
import Circle4Gr from './ProgressLine/Circle4Gr';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';
import LineGray from './ProgressLine/LineGray';

const ItemCard = ({title}) => (
  <View style={styles.item}>
    <View style={styles.itemInformation}>
      <View style={styles.imageContainer}>
        <Image source={{uri: title.img}} style={styles.images} />
      </View>
      <View style={styles.inforContainer}>
        <Text style={styles.name}>{title.name}</Text>
        <Text style={styles.cost}>{numberWithCommas(title.price)} VNĐ</Text>
        <Text style={styles.codeText}>Mã SP: {title.code}</Text>
        <Text style={styles.codeText}>Số lượng: {title.quantity}</Text>
      </View>
    </View>
  </View>
);

const AbateCart = ({navigation, route}) => {
  const {order, total} = useContext(OrderContext);
  const {user} = useContext(UserContext);

  async function sendOrder(ord) {
    const response = await fetch(
      'https://kingled-kttt.herokuapp.com/api/orders/add',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ord),
      }
    );
    const responseJson = await response.json();
    console.log(responseJson);
    const id = responseJson.data._id;
    navigation.replace('ConfirmCart', {id});
  }

  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.titleTab}>
        <Icon
          name="reader-outline"
          color="#f0ad00"
          size={22}
          style={{left: 0}}
        />
        <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
          Thông tin nhận hàng
        </Text>
      </View>
      <View style={styles.container}>
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
            <Circle3 />
            <Text style={{color: '#4cb71a', textAlign: 'center', fontSize: 12}}>
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
        <View style={styles.containerList}>
          <View style={{width: '100%', marginBottom: 12, padding: 18}}>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Họ tên</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>
                  {route.params.info.fullName}
                </Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Email</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>{route.params.info.email}</Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Điện thoại</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>{route.params.info.phone}</Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Địa chỉ</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>
                  {route.params.info.address}
                </Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Ghi chú</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>{route.params.info.note}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.myCart}>
          <Icon
            name="basket-outline"
            color="#f0ad00"
            size={22}
            style={{left: 0}}
          />
          <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
            Giỏ hàng của tôi
          </Text>
        </View>
        <View style={styles.containerList}>
          <View style={{marginTop: 12, marginBottom: 12}}>
            <SectionList
              sections={[
                {
                  title: 'Sản phẩm',
                  data: order,
                },
              ]}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <ItemCard title={item} />}
            />
          </View>
        </View>
        <View style={styles.payment}>
          <View style={styles.total}>
            <View style={styles.rowTotalText}>
              <Text style={styles.totalText1}>Tổng tiền: </Text>
              <Text style={styles.totalText2}>
                {numberWithCommas(total)} VNĐ
              </Text>
            </View>
          </View>
          <View style={styles.paymentBTN}>
            <Pressable
              onPress={() => {
                sendOrder({
                  orderUser: {
                    fullName: route.params.info.fullName,
                    username: user.auth ? user.userLogged.username : '',
                    email: route.params.info.email,
                    phone: route.params.info.phone,
                  },
                  orderAddress: user.auth
                    ? user.userLogged.address.address
                    : route.params.info.address,
                  orderProducts: order,
                  totalPrice: total,
                });
              }}>
              <Text style={styles.paymentText}>Xác nhận</Text>
            </Pressable>
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
    backgroundColor: 'white',
    paddingBottom: 50,
    paddingTop: 10,
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
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 7,
  },
  containerList: {
    width: '100%',
    padding: 16,
  },
  totalAmountFlex: {
    flex: 1,
  },
  totalAmountText: {
    color: '#FF2E2E',
    fontSize: 15,
  },
  colProgress: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //marginRight: -10,
    //marginLeft: -10,
  },
  item: {
    backgroundColor: '#fbf3e7',
    marginVertical: 3,
    borderColor: '#ffba07',
    borderRadius: 4,
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
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
    borderRadius: 4,
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
  },
  cost: {
    fontSize: 17,
    color: '#e7a703',
    fontWeight: 'bold',
  },

  codeText: {
    color: '#818181',
    fontSize: 12,
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
  myCart: {
    color: '#FF792E',
    marginBottom: 12,
    fontSize: 18,
    //backgroundColor: 'black',
    padding: 20,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 7,
    borderTopColor: '#f3f3f3',
    borderBottomWidth: 3,
    borderBottomColor: '#f3f3f3',
    borderRadius: 4,
  },
  inputInfor: {
    //borderColor:"black",
    borderBottomWidth: 0.2,
    flex: 2.7,
    //height: 40,
    borderRadius: 4,
    //paddingLeft:10,
    color: '#363636',
    fontSize: 15,
    padding: 15,
    paddingLeft: 5,
  },
  nameAndInput: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 4,
  },
  nameView: {
    color: '#313131',
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    color: '#e7a703',
    fontSize: 14,
    marginTop: -4,
    fontWeight: 'bold',
  },
  TextInput: {
    color: '#363636',
  },
});
export default AbateCart;
