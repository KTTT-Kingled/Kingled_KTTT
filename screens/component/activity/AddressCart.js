import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Image,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text, View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../../../contexts/orderContext.js';
import { UserContext } from '../../../contexts/userContext.js';
import numberWithCommas from '../../../utils/thousandSeperator.js';
import Circle2 from '../activity/ProgressLine/Circle2';
import HeaderComponent from '../headerComponent.js';
import Circle3Gr from './ProgressLine/Circle3Gr';
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

const AddressCart = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const {order, total} = useContext(OrderContext);
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (user.auth) {
      setFullName(user.userLogged.fullName);
      setEmail(user.userLogged.email);
      setPhone(user.userLogged.phone);
      setAddress(user.userLogged.address.address);
    }
  }, [user]);

  function HandlePayment() {
    // check if fullName, email, phone, address is empty and alert
    if (fullName === '') {
      Alert.alert('Đã có lỗi phát sinh', 'Vui lòng nhập họ tên');
    } else if (phone === '') {
      Alert.alert('Đã có lỗi phát sinh', 'Vui lòng nhập số điện thoại');
    } else if (address === '') {
      Alert.alert('Đã có lỗi phát sinh', 'Vui lòng nhập địa chỉ');
    } else {
      navigation.replace('AbateCart', {info: {
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        note: note,
      }});
    }
  }

  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.titleTab}>
        <Icon
          name="create-outline"
          color="#f0ad00"
          size={22}
          style={{left: 0}}
        />
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
          <Circle2 />
          <Text style={{color: '#4cb71a', fontSize: 12, textAlign: 'center'}}>
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
          <View style={{width: '100%', marginBottom: 12, padding: 18}}>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Họ tên</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>An</Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Email</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>ANguyen@gamil.com</Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Điện thoại</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>0111337767</Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Địa chỉ</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>93A Tô Ngọc Vân</Text>
              </View>
            </View>
            <View style={styles.nameAndInput}>
              <View style={styles.nameView}>
                <Text style={styles.nameText}>Ghi chú</Text>
              </View>
              <View style={styles.inputInfor}>
                <Text style={styles.TextInput}>Hàng dễ hỏng, giao cẩn thận</Text>
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
            <Pressable onPress={() => HandlePayment()}>
              <Text style={styles.paymentText}>{'Tiến hành\nthanh toán'}</Text>
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
    backgroundColor: '#fff',
    paddingBottom: 50,
    paddingTop: 10,
    //width: "100%",
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
    width: '100%',
    //padding:16,
  },
  totalAmountFlex: {
    flex: 1,
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
    borderBottomWidth: 0.2,
    borderBottomColor: '#b0b0b0',
    borderRadius: 4,
    marginBottom: 3,
    flex: 1,
    flexDirection: 'row',
    height: 55,
  },
  payment: {
    flex: 1,
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
    textAlign: 'center',
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
    flexDirection: 'row',
    borderTopWidth: 7,
    borderTopColor: '#f3f3f3',
    borderBottomWidth: 3,
    borderBottomColor: '#f3f3f3',
    borderRadius: 4,
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
  itemInformation: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
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
    color: '#a1a1a1',
    fontSize: 12,
  },
  images: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginLeft: '7%',
    // right:10
  },

  inforContainer: {
    flex: 7,
    height: '100%',
  },
  TextInput: {
    color: '#363636',
    fontSize: 13,
  },
});
export default AddressCart;
