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
import { OrderContext } from '../../../contexts/orderContext.js';
import { UserContext } from '../../../contexts/userContext.js';
import numberWithCommas from '../../../utils/thousandSeperator.js';
import HeaderComponent from '../headerComponent.js';
import Circle3 from './ProgressLine/Circle3';
import Circle4Gr from './ProgressLine/Circle4Gr';
import CircleBackground from './ProgressLine/CircleBackground.js';
import Line from './ProgressLine/Line.js';
import LineCart from './ProgressLine/LineCart.js';
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
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginTop: 8, marginBottom: 8}}>
          <Text style={{color: '#425C59', fontSize: 24}}>
            THÔNG TIN NHẬN HÀNG
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
          <LineCart />

          <Text
            style={{
              color: '#425C59',
              marginBottom: 12,
              marginTop: 12,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Chọn phương thức thanh toán
          </Text>

          <LineCart />
          <Text style={{color: '#425C59', marginTop: 8, fontWeight: 'bold'}}>
            Thanh toán khi nhận hàng
          </Text>
          <Pressable
            style={{
              backgroundColor: '#425C59',
              paddingTop: 12,
              paddingBottom: 12,
              width: '100%',
              alignItems: 'center',
              borderRadius: 2,
              marginTop: 12,
              marginBottom: 12,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>
              THANH TOÁN KHI NHẬN HÀNG
            </Text>
          </Pressable>
          <Text style={{color: '#FF792E', marginBottom: 12, fontSize: 18}}>
            Sản phẩm của tôi
          </Text>
          <LineCart />
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
          <View style={{paddingTop: 20}} />
          <LineCart />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={[styles.totalAmountText, styles.totalAmountFlex]}>
              Tổng tiền tạm tính
            </Text>
            <Text style={styles.totalAmountText}>
              {numberWithCommas(total)}
            </Text>
            <Text style={styles.totalAmountText}> VNĐ</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
          <Pressable
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
            onPress={() => {
                console.log('Pressed confirm');
                sendOrder({
                    orderUser:{
                        fullName: route.params.info.fullName,
                        username: user.auth ? user.userLogged.username : '',
                        email: route.params.info.email,
                        phone: route.params.info.phone,
                    },
                    orderAddress: user.auth ? user.userLogged.address.address : route.params.info.address,
                    orderProducts : order,
                    totalPrice: total,
                });
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>XÁC NHẬN</Text>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 65,
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
    // backgroundColor: "#f9c2ff",
    marginVertical: 8,
    borderColor: '#425C59',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
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
    color: '#425C59',
    fontWeight: 'bold',
  },
  cost: {
    fontSize: 15,
    color: '#FF792E',
    fontWeight: 'bold',
  },

  codeText: {
    color: '#818181',
  },
});
export default AbateCart;
