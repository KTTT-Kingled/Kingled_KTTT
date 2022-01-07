import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Image,
  Pressable, SafeAreaView, SectionList,
  StatusBar,
  StyleSheet, Text,
  View,
} from 'react-native';
import numberWithCommas from '../../utils/thousandSeperator.js';
import LineCart from '../component/activity/ProgressLine/LineCart.js';
import HeaderComponent from '../component/headerComponent.js';
import ModalFilter from '../modal/modalFilter.js';
import ModalUp from '../modal/modalUp.js';

const ProductCard = ({title}) => (
  <View style={styles.item}>
    <View style={styles.itemInformation}>
      <View style={styles.imageContainer}>
        <Image source={{uri: title.images[0]}} style={styles.images} />
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
  <View style={styles.item}>
    <View style={styles.itemInformation}>
      <View style={{}}>
        <Image source={{uri: title.img}} style={styles.images2} />
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

  async function fetchProduct(url) {
    //fetch data from url and return array
    const fullUrl = `https://kingled-kttt.herokuapp.com/api/products/search?code=&name=&category=${url}`;
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
    <SafeAreaView style={{flex:1}}>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={styles.containerList}>
          {/* flat */}
          <View style={{marginTop: 12, marginBottom: 12}}>
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
          <View style={{width: '100%', height: 50, marginTop: 12}}>
            <ModalFilter />
          </View>
          <LineCart />
          {/* sectionList */}
          <View style={{flex:1, marginTop: 12, marginBottom: 12}}>
            <SectionList
              sections={productList}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: 'white',
                    marginVertical: 8,
                    borderRadius: 4,
                    elevation: 3,
                  }}>
                  <ProductCard title={item} />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: '37%',
                      paddingBottom: 12,
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
                    <ModalUp />
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
    paddingBottom: 50,
  },
  progress: {
    marginTop: 15,
    width: '100%',
  },
  circle: {
    width: 22,
    height: 22,
    backgroundColor: '#E9E9E9',
    borderRadius: 100,
    marginTop: '-3.2%',
    marginLeft: '16%',
    borderColor: '#FF792E',
    borderWidth: 2,
  },
  circle2: {
    marginTop: '-6.2%',
    marginLeft: '38%',
  },
  circle3: {
    marginTop: '-6.2%',
    marginLeft: '60%',
  },
  circle4: {
    marginTop: '-6.2%',
    marginLeft: '82%',
  },
  circleColor: {
    backgroundColor: '#FF792E',
  },
  containerList: {
    flex: 1,
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
  filter: {
    height: 36,
    width: 90,
    borderWidth: 2,
    borderColor: '#425C59',
    position: 'absolute',
    right: '0%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containers: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    // backgroundColor: "#f9c2ff",
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
  images: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginLeft: '7%',
    borderRadius: 8,

    // right:10
  },
  images2: {
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
  amount: {
    flexDirection: 'row',
    padding: 4,
  },
  deleteProduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF4646',
  },

  codeText: {
    color: '#818181',
  },
  btnProduct: {
    backgroundColor: '#FF792E',
    padding: 0,
    //   width:"44%",
    borderRadius: 4,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 8,
  },
  btnBuy: {
    marginLeft: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  btnText: {
    color: 'white',
  },
  categoryItem: {
    marginVertical: 0,
    borderRadius: 10,
    width: 100,
    height: 100,
    marginRight: 30,
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
});

export default Product;
