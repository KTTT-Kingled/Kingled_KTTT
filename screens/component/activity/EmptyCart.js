import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../headerComponent.js';

const EmptyProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.titleTab}>
        <Icon name="cart-outline" color="#f0ad00" size={22} style={{left: 0}} />
        <Text style={{color: '#363636', fontSize: 16, marginLeft: 10}}>
          Giỏ hàng
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 250}}>
        <Text style={{color: '#363636', fontSize: 16,}}>Chưa có sản phẩm nào</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
  },
  progress: {
    marginTop: 15,
    marginBottom: 1,
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
  btnNext: {
    backgroundColor: 'red',
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
    width: "100%",
  },
});
export default EmptyProduct;
