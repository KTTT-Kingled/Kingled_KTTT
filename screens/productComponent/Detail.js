import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text, TouchableHighlight, View
} from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { OrderContext } from '../../contexts/orderContext';
import numberWithCommas from '../../utils/thousandSeperator.js';
import HeaderComponent from '../component/headerComponent.js';

const DetailProduct = ({navigation, route}) => {
  const {data} = route.params;
  const {addOrder} = useContext(OrderContext);

  const [imgSelected, setImg] = useState(data.images[0]);

  useEffect(() => {
    setImg(data.images[0]);
  }, []);
  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={styles.bigImg}>
          <Image
            source={{uri: imgSelected}}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <Text style={{fontSize: 16, color: '#425C59'}}>{data.name}</Text>
        <Text style={{fontSize: 22, color: '#e7a703', fontWeight: 'bold'}}>
          {numberWithCommas(data.price) + ' VNĐ'}
        </Text>
        <View style={styles.containerImg}>
          {data.images.map((item, index) => (
            <View style={styles.img} key={index}>
              <Pressable onPress={() => setImg(item)} key={index}>
                <Image
                  key={index}
                  source={{uri: item}}
                  style={{width: '100%', height: '100%'}}
                />
              </Pressable>
            </View>
          ))}
        </View>

        <Text
          style={{color: '#e7a703', padding: 8, paddingLeft: 0, fontSize: 16, fontWeight: 'bold'}}>
          Thông số kĩ thuật
        </Text>
        <Grid style={{height: 400}}>
          <Col size={35}>
            {data.specification.map((item, index) => {
              if (item.value) {
                return (
                  <Row styles={styles.cell} key={index}>
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
                  <Row styles={(styles.cell, styles.borderRight)} key={index}>
                    {item.name === 'Ánh Sáng' ||
                    item.name === 'Nhiệt Độ Màu' ? (
                      <Text style={styles.textRow}>
                        {item.value.join(', ')}
                      </Text>
                    ) : (
                      <Text style={styles.textRow}>{item.value}</Text>
                    )}
                  </Row>
                );
              }
            })}
          </Col>
        </Grid>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {
              Alert.alert(
                'Bạn có muốn thêm sản phẩm vào giỏ hàng?',
                `Item name: ${data.name}\nItem code: ${data.code}  `,
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      addOrder({
                        code: data.code,
                        name: data.name,
                        img: data.images[0],
                        price: data.price,
                        quantity: 1,
                      });
                      console.log('Added ' + data.code);
                    },
                  },
                ]
              );
            }}>
            <View style={styles.btn}>
              <Text style={{fontSize: 24, color: 'white'}}>ĐẶT HÀNG</Text>
            </View>
          </TouchableHighlight>
        </View>
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
    paddingBottom: 35,
    backgroundColor: '#fff',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#417a76',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  textRow: {
    color: '#417a76',
  },
  borderBottom: {
    borderWidth: 1,
    borderColor: '#417a76',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
  borderRight: {
    borderWidth: 1,
    borderColor: '#417a76',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 0,
  },
  borderBottom2: {
    borderWidth: 1,
    borderColor: '#417a76',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  containerImg: {
    width: '100%',
    height: 100,
    borderColor: '#417a76',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 0,
  },
  img: {
    flex: 1,
    marginRight: 5,
    height: '100%',
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#417a76',
  },
  seen: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  seenAll: {
    color: '#e7a703',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    marginRight: 4,
  },
  bigImg: {
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
    backgroundColor: '#417a76',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
