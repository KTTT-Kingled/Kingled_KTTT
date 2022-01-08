import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import numberWithCommas from '../../utils/thousandSeperator.js';
import LineCart from '../component/activity/ProgressLine/LineCart.js';
import HeaderComponent from '../component/headerComponent.js';

const ProductCard = ({title}) => (
  <View style={styles.item}>
    <View style={styles.itemInformation}>
      <View style={styles.imageContainer}>
        <Image source={{uri: title.images[0]}} style={styles.productImg} />
      </View>
      <View style={styles.inforContainer}>
        <Text style={styles.name}>{title.name}</Text>
        <Text style={styles.cost}>
          {title.price !== 0
            ? numberWithCommas(title.price) + ' VNĐ'
            : 'Liên hệ'}{' '}
        </Text>
        <Text style={styles.codeText}>Mã SP: {title.code}</Text>
      </View>
    </View>
  </View>
);
const CategoryCard = ({title}) => (
  <View>
    <View style={styles.itemInformation}>
      <View style={{}}>
        <Image source={{uri: title.img}} style={styles.categoryImg} />
      </View>
    </View>
  </View>
);

const Product = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [CategoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState('');

  // fetch json from url and convert to array
  useEffect(() => {
    fetchProduct('am-tran-downlight');
    fetchCategory();
  }, []);

  async function fetchProduct(category_name) {
    //fetch data from url and return array
    const fullUrl = `https://kingled-kttt.herokuapp.com/api/products/search?code=&name=&category=${category_name}`;
    await fetch(fullUrl).then(async response => {
      // convert response to array of objects
      const data = await response.json();
      setProductList(data);
    });
  }

  async function fetchCategory() {
    //fetch data from url and return array
    const fullUrl = 'https://kingled-kttt.herokuapp.com/api/categories/all';
    await fetch(fullUrl).then(async response => {
      // convert response to array of objects
      const data = await response.json();
      setCategoryList(data);
    });
  }

  async function fetchDetail(code) {
    //fetch data from url and return array
    const fullUrl = `https://kingled-kttt.herokuapp.com/api/products/detail?code=${code}`;
    console.log(fullUrl);
    const detail = await fetch(fullUrl).then(async response => {
      // convert response to array of objects
      const data = await response.json();
      return data;
    });
    return detail;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={styles.containerList}>
          {/* flat */}
          <View style={{marginTop: -4, marginBottom: 12}}>
            <SectionList
              horizontal={true}
              sections={CategoryList}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <View style={styles.categoryItem}>
                  <Pressable onPress={() => fetchProduct(item.slug)}>
                    <CategoryCard title={item} />
                  </Pressable>
                </View>
              )}
            />
          </View>
          {/* end flat */}
          <LineCart />
          {/* sectionList */}
          <View style={{flex: 1, marginTop: 12, marginBottom: 12}}>
            <SectionList
              sections={productList}
              keyExtractor={(item, index) => item + index}
              renderItem={({item, index}) => (
                <View
                key={item + index}
                  style={{
                    backgroundColor: 'white',
                    marginVertical: 0,
                    marginBottom: 7,
                    borderRadius: 4,
                    //elevation: 4,
                  }}>
                  <ProductCard title={item} />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: '37%',
                      paddingBottom: 16,
                    }}>
                    <Pressable
                      onPress={() => {
                        fetchDetail(item.code.trim()).then(data => {
                          console.log(data);
                          navigation.navigate('Detail', {
                            data: data,
                          });
                        });
                      }}>
                      <View style={styles.btnProduct}>
                        <Text style={styles.btnText}>Xem chi tiết</Text>
                      </View>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        Alert.alert('Bạn có muốn thêm sản phẩm vào giỏ hàng?', `Item name: ${item.name}\nItem code: ${item.code}  ` , [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () => console.log('Added ' + item.code),
                          },
                        ]);
                      }}>
                      <View style={[styles.btnBuy]}>
                        <Text style={styles.btnBuyBtn}>Mua hàng</Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              )}
              removeClippedSubviews={true}
            />
          </View>
          {/* end section list */}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingBottom: 40,
  },
  containerList: {
    flex: 1,
    width: '100%',
    padding: 16,
  },
  containers: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    color: 'black',
  },
  title: {
    fontSize: 24,
  },
  productImg: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginLeft: '7%',
    borderRadius: 8,

    // right:10
  },
  categoryImg: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  imageContainer: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  inforContainer: {
    flex: 7,
    marginLeft: 4,
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
  btnProduct: {
    //backgroundColor: '#FF792E',
    padding: 0,
    //   width:"44%",
    borderRadius: 4,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: '#FF792E',
  },
  btnText: {
    color: '#FF792E',
  },
  categoryItem: {
    marginVertical: 0,
    borderRadius: 10,
    width: 100,
    height: 100,
    marginRight: 10,
  },
  categoryItemPressed: {
    marginVertical: 0,
    borderRadius: 10,
    width: 100,
    height: 100,
    marginRight: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FF792E',
  },
  btnBuy: {
    backgroundColor: '#FF792E',
    padding: 0,
    borderRadius: 4,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 20,
    paddingRight: 20,
    overflow: 'hidden',
  },
  btnBuyBtn: {
    color: '#fff',
  },
});

export default Product;
