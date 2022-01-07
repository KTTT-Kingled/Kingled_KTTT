import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import numberWithCommas from '../../utils/thousandSeperator.js';
import HeaderComponent from '../component/headerComponent.js';
import ModalBuyProduct from '../modal/modalBuyProduct.js';

const DetailProduct = ({navigation, route}) => {
  const {data} = route.params;

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
        <Text style={{fontSize: 18, color: '#425C59'}}>{data.name}</Text>
        <Text style={{fontSize: 22, color: '#FF792E'}}>
          {numberWithCommas(data.price) + ' VND'}
        </Text>
        <View style={styles.containerImg}>
          {data.images.map((item, index) => (
            <View style={styles.img}>
              <Pressable
                onPress={() =>
                  setImg(item)
                } key={index}>
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
          style={{color: '#FF792E', padding: 8, paddingLeft: 0, fontSize: 16}}>
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
    height: 100,
    borderColor: '#425C59',
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
    // borderColor: '#425C59',
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
    backgroundColor: '#FF792E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
