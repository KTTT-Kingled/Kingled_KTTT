import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import numberWithCommas from '../../utils/thousandSeperator.js';
import HeaderComponent from '../component/headerComponent.js';
import ModalBuyProduct from '../modal/modalBuyProduct.js';
import { ModalPicker } from '../modal/Modalimage';
import { ModalPickerImage2 } from '../modal/Modalimage2.js';
import { ModalPickerImage3 } from '../modal/Modalimage3';

const DetailProduct = ({navigation, route}) => {
  const [chooseData, setchooseData] = useState('Tỉnh/Thành phố');
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = bool => {
    setisModalVisible(bool);
  };
  const setData = option => {
    setchooseData(option);
  };

  const [chooseData1, setchooseData1] = useState('Quận/Huyện');
  const [isModalVisible1, setisModalVisible1] = useState(false);
  const changeModalVisibility1 = bool => {
    setisModalVisible1(bool);
  };
  const setData1 = option => {
    setchooseData1(option);
  };

  const [chooseData2, setchooseData2] = useState('Xã/Phường');
  const [isModalVisible2, setisModalVisible2] = useState(false);
  const changeModalVisibility2 = bool => {
    setisModalVisible2(bool);
  };
  const setData2 = option => {
    setchooseData2(option);
  };

  const {data} = route.params;

  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={styles.imgProduct}>
          <Image
            source={{
              uri: 'https://i.ytimg.com/vi/51523kt-x-A/maxresdefault.jpg',
            }}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <Text style={{fontSize: 18, color: '#425C59'}}>{data.name}</Text>
        <Text style={{fontSize: 22, color: '#FF792E'}}>
          {numberWithCommas(data.price) + ' VND'}
        </Text>
        <View style={styles.containerImg}>
          {/*  */}

          {/*  */}
          <View style={styles.img}>
            <SafeAreaView style={styles.container1}>
              <TouchableOpacity
                onPress={() => changeModalVisibility(true)}
                style={styles.touchableOpacity}>
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/R.3c99f118e6f0ce6d2fb1dedd3d09436a?rik=m439jeY7yAZwDg&riu=http%3a%2f%2fg02.a.alicdn.com%2fkf%2fHTB17mPtJFXXXXbDXpXXq6xXFXXXj%2fPOSSBAY-DIY-Decoration-12V-Auto-Car-Interior-LED-EL-Wire-Rope-Tube-Neon-Light-Line-10.jpg&ehk=P1kk5g4mrQNWth2dHPwLDK0P2yhcARh83tBVRPHi7AU%3d&risl=&pid=ImgRaw&r=0',
                  }}
                  style={{width: '100%', height: '100%'}}
                />
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false)}>
                <ModalPicker
                  changeModalVisibility={changeModalVisibility}
                  setData={setData}
                />
              </Modal>
            </SafeAreaView>
          </View>
          <View style={(styles.img, styles.imgMargin)}>
            <SafeAreaView style={styles.container1}>
              <TouchableOpacity
                onPress={() => changeModalVisibility1(true)}
                style={styles.touchableOpacity}>
                <Image
                  source={{
                    uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/308/159/products/led-sd-d08a5e31-8e77-408a-88e3-092befdb094e.jpg?v=1533229343560',
                  }}
                  style={{width: '100%', height: '100%'}}
                />
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible1}
                nRequestClose={() => changeModalVisibility1(false)}>
                <ModalPickerImage2
                  changeModalVisibility={changeModalVisibility1}
                  setData={setData1}
                />
              </Modal>
            </SafeAreaView>
          </View>
          <View style={styles.img}>
            <SafeAreaView style={styles.container1}>
              <TouchableOpacity
                onPress={() => changeModalVisibility2(true)}
                style={styles.touchableOpacity}>
                <Image
                  source={{
                    uri: 'https://cf.shopee.vn/file/82d5eefa8cced9e0673926939c363b7a',
                  }}
                  style={{width: '100%', height: '100%'}}
                />
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible2}
                nRequestClose={() => changeModalVisibility2(false)}>
                <ModalPickerImage3
                  changeModalVisibility={changeModalVisibility2}
                  setData={setData2}
                />
              </Modal>
            </SafeAreaView>
          </View>
        </View>
        <Text
          style={{color: '#FF792E', padding: 8, paddingLeft: 0, fontSize: 16}}>
          Thông số kĩ thuật
        </Text>
        <Grid style={{height: 400}}>
          <Col size={35}>
            {data.specification.map((item, index) => {
              if (item.value) {
              return (
                <Row styles={styles.cell}>
                  <Text style={styles.textRow}>{item.name}</Text>
                </Row>
              );
              }
            })}
          </Col>
          <Col size={80}>
            {data.specification.map((item, index) => {
              if (item.value) {
              return (
                <Row styles={(styles.cell, styles.borderRight)}>
                  {item.name === 'Ánh Sáng' || item.name === 'Nhiệt Độ Màu' ? (
                    <Text style={styles.textRow}>{item.value.join(', ')}</Text>
                  ) : (
                    <Text style={styles.textRow}>{item.value}</Text>
                  )}
                </Row>
              );
              }
            })}
          </Col>
        </Grid>
        <Text
          style={{color: '#FF792E', padding: 8, paddingLeft: 0, fontSize: 16}}>
          Mô tả sản phẩm
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>
          1. MẶT ĐÈN KIM LOẠI SIÊU BỀN
        </Text>
        <Text style={{color: 'black', textAlign: 'justify'}}>
          Mặt đèn màu trắng được thiết kế siêu mòng chỉ 1mm làm bằng chất liệu
          kim loại siêu bền. Khi lắm lên trần nhà sẽ tạo cảm giác liền lạc và
          sang trọng hơn
        </Text>

        <ModalBuyProduct />
      </View>
    </ScrollView>
  );
};

export default DetailProduct;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 16,
    paddingBottom: 200,
    backgroundColor: '#fff',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#425C59',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  textRow: {
    color: '#425C59',
  },
  borderBottom: {
    borderWidth: 1,
    borderColor: '#425C59',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
  borderRight: {
    borderWidth: 1,
    borderColor: '#425C59',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 0,
  },
  borderBottom2: {
    borderWidth: 1,
    borderColor: '#425C59',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  containerImg: {
    width: '100%',
    height: 120,
    // backgroundColor:"red",
    borderColor: '#425C59',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 0,
  },
  imgMargin: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    height: '100%',
    //borderWidth: 1,
    //borderColor: '#425C59',
  },
  img: {
    flex: 1,
    height: '100%',
    //borderWidth: 1,
    //borderColor: '#425C59',
    borderRadius: 4,
  },
  seen: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  seenAll: {
    color: '#FF792E',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    marginRight: 4,
  },
  imgProduct: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  btn: {
    width: '100%',
    height: 50,
    // padding: 16,
    // paddingTop:0,
    backgroundColor: '#FF792E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
